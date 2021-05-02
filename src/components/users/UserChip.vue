<template>
  <v-menu
      v-model="menu"
      bottom
      right
      transition="scale-transition"
      origin="top left"
  >
    <template v-slot:activator="{ on }">
      <v-chip
          pill
          v-on="on"
      >
        <v-avatar left v-if="hasProfileImage">
          <v-img :src="user.thumbnail.thumbnail" />
        </v-avatar>
        {{ user.username }}
      </v-chip>
    </template>
    <v-card width="300">
      <v-list color="primary" dark>
        <v-list-item>
          <v-list-item-avatar v-if="hasProfileImage">
            <v-img :src="user.thumbnail.thumbnail"></v-img>
          </v-list-item-avatar>
          <v-list-item-content class="text-left">
            <v-list-item-title>{{ user.fullName }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.username }}</v-list-item-subtitle>
          </v-list-item-content>
          <user-profile-button :username="user.username" />
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import UserProfileButton from "@/components/users/UserProfileButton";

export default {
  components: {
    UserProfileButton
  },
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
      return this.user.thumbnail
    }
  }
};
</script>
