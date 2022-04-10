<template>
  <div class="profile-image">
    <div class="profile-image__container">
      <div
        class="profile-image__image"
        :style="profileImageStyle"
      />
      <v-btn
        :loading="isLoading"
        class="profile-image__button"
        fab
        @click="onPickFile"
      >
        <v-icon>
          fa-camera
        </v-icon>
      </v-btn>
    </div>

    <input
      ref="fileInput"
      type="file"
      class="d-none"
      accept="image/png, image/jpeg, image/jpg"
      @change="onFilePicked"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      image: null,
      imageUrl: null,
      isLoading: false
    };
  },
  computed: {
    profileImageStyle() {
      if (this.profileImageUrl) {
        return {
          backgroundImage: `url(${this.profileImageUrl})`
        };
      }

      return null;
    },
    profileImageUrl() {
      if (this.imageUrl) {
        return this.imageUrl;
      }

      if (this.value.image) {
        return this.value.image.image;
      }

      return null;
    }
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      this.image = files[0];

      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(this.image);

      this.submit();
    },
    submit() {
      this.isLoading = true;

      const request = new FormData();
      const config = {headers: {'Content-Type': 'multipart/form-data'}};
      request.append('image', this.image);

      window.axios
        .post('profile/image', request, config)
        .catch(() => {
          this.$root.$snackbar.open('Hochladen fehlgeschlagen.', 'error');
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  }
};
</script>

<style lang="scss" scoped>
.profile-image {
  .profile-image__container {
    position: relative;

    .profile-image__image {
      width: 100%;
      padding-bottom: 100%;
      height: 0;
      background-color: #eee;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .profile-image__button {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>