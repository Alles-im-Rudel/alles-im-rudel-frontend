<template>
  <v-badge
    color="greyBlue"
    :content="selected.likes ? selected.likes : '0'"
    overlap
  >
    <v-btn
      :disabled="!canSeeButton"
      :color="color"
      icon
      @click="change"
    >
      <v-icon>fa-thumbs-up</v-icon>
    </v-btn>
  </v-badge>
</template>

<script>
import Permissions from '@/mixins/Permissions';

export default {
  mixins: [Permissions],
  props: {
    selected: {
      type: Object,
      required: true
    },
    model: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      liked: false
    };
  },
  computed: {
    canSeeButton() {
      return this.can(this.model+'.like');
    },
    color() {
      return this.liked ? 'liked' : 'darkGrey';
    }
  },
  watch: {
    selected: {
      deep: true,
      handler() {
        this.check();
      }
    }
  },
  created() {
    this.check();
  },
  methods: {
    check() {
      if(this.checkAuth) {
        this.isLoading = true;
        window.axios
            .get(this.model+`/${this.selected.id}/like`)
            .then((response) => {
              this.liked = response.data.liked;
            })
            .finally(() => {
              this.isLoading = false;
            });
      }
    },
    change() {
      this.isLoading = true;
      window.axios
          .put(this.model+`/${this.selected.id}/change`)
          .then((response) => {
            this.liked = response.data.liked;
            this.$emit('reload');
          })
          .finally(() => {
            this.isLoading = false;
          });
    }
  }
};
</script>
