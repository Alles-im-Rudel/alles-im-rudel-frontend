<template>
  <BaseCard
    height="100%"
    style="display: flex; flex-direction: column"
  >
    <div
      class="post-thumbnail"
      :style="'background-image: url(' + post.thumbnail.thumbnail + ');'"
    >
      <div class="user">
        <user-chip :user="post.user" />
      </div>
    </div>
    <v-card-title class="pb-2">
      {{ post.title }}
    </v-card-title>
    <v-card-text>
      {{ post.createdAt | date }} - {{ post.createdAt | time }} Uhr
    </v-card-text>
    <v-divider />
    <v-card-actions class="px-3">
      <PostTag :tag="post.tag" />
      <v-spacer />
      <v-btn
        color="darkGrey"
        dark
        @click="pushRouteTo('PostsShow', { id: post.id })"
      >
        Ansehen
      </v-btn>
    </v-card-actions>
  </BaseCard>
</template>

<script>
import UserChip from '@/components/users/UserChip';
import PostTag from '@/components/post/PostTag';

export default {
  components: {
    UserChip,
    PostTag
  },
  props: {
    post: {
      required: true,
      type: Object
    },
  },
  data() {
    return {
      show: false
    };
  },
};
</script>

<style lang="scss">
.post-thumbnail {
  width: 100%;
  padding-bottom: 100%;
  height: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .user {
    display: flex;
    justify-content: flex-end;
    width: calc(100% - 24px);
    margin: 0 auto;
    padding-top: calc(100% - 32px - 12px);
    height: 0;
  }
}
</style>