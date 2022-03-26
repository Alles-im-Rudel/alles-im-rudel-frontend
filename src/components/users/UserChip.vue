<template>
  <v-chip pill>
    <v-avatar
      v-if="hasProfileImage"
      left
    >
      <v-img :src="user.thumbnail.thumbnail" />
    </v-avatar>
    {{ user.username }}
  </v-chip>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      menu: false
    };
  },
  computed: {
    hasProfileImage() {
      return this.user.thumbnail;
    }
  }
};
</script>
