<template>
  <div class="white">
    <BaseContainer v-if="user">
      <v-row
        class="mt-6"
        align="center"
      >
        <v-col cols="12">
          <h2 class="text-h5 mb-2">
            Mein Profil
          </h2>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <ProfileImage v-model="user" />
        </v-col>
        <v-col
          cols="12"
          md="9"
        >
          <ProfileInfo
            v-model="user"
            class="pl-md-3"
          />
        </v-col>
      </v-row>
      <v-divider class="mt-14 mb-10" />
      <v-row>
        <v-col cols="12">
          <h2 class="text-h5 mb-2">
            Meine Sparten
          </h2>
          <ProfileBranches v-model="user" />
        </v-col>
      </v-row>
    </BaseContainer>
  </div>
</template>

<script>
import ProfileImage from '@/views/profile/parts/ProfileImage';
import ProfileInfo from '@/views/profile/parts/ProfileInfo';
import ProfileBranches from '@/views/profile/parts/ProfileBranches';

export default {
  name: 'Profile',
  components: {ProfileBranches, ProfileImage, ProfileInfo},
  data() {
    return {
      user: null,
      isLoading: false
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.isLoading = true;
      window.axios
          .get('profile')
          .then((response) => {
            this.user = response.data.data;
          })
          .finally(() => (this.isLoading = false));
    },
  }
};
</script>