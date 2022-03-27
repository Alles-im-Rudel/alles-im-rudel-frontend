<template>
  <BaseCard
    height="100%"
    style="display: flex; flex-direction: column"
  >
    <div
      class="post-thumbnail"
      :style="'background-image: url(' + post.thumbnails[0].thumbnail + ');'"
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
      <post-tags :tags="post.tags" />
      <v-spacer />
      <show-full-post-button
        :post-id="post.id"
        @reload="$emit('reload')"
      />
    </v-card-actions>
  </BaseCard>
</template>

<script>
import UserChip from '@/components/users/UserChip';
import PostTags from '@/components/post/PostTags';
import ShowFullPostButton from '@/components/post/ShowFullPostButton';

export default {
  components: {
    UserChip,
    PostTags,
    ShowFullPostButton
  },
  props: {
    post: {
      required: true,
      type: Object
    },
    textLength: {
      type: Number,
      required: false,
      default: () => 200
    }
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    text() {
      return this.post.text.length > this.textLength ? this.post.text.substring(0, this.textLength - 3) + '...' : this.post.text;
    }
  },
  methods: {}
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