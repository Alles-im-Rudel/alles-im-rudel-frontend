<template>
  <v-card v-if="post.id" :max-height="maxHeight" class="scroll">
    <v-card-title>
      {{ post.title }}
      <v-spacer />
      <user-chip :user="post.user" />
      <post-tags :tags="post.tags" />
      <v-spacer />
      {{ post.createdAt | dateTime }}
    </v-card-title>
    <v-divider />
    <post-images :images="post.images" />
    <v-card-text>
      {{ post.text }}
    </v-card-text>
  </v-card>
  <v-card v-else>
    <v-skeleton-loader class="mx-auto" type="card" />
  </v-card>
</template>

<script>
import UserChip from "@/components/users/UserChip";
import PostImages from "@/components/post/PostImages";
import PostTags from "@/components/post/PostTags";

export default {
  components: {
    UserChip,
    PostImages,
    PostTags
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    maxHeight: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      post: {},
      isLoading: false,
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    getPost() {
      this.isLoading = true;
      window.axios
          .get(`/posts/${this.value}`)
          .then((response) => {
            this.post = response.data.data;
          })
          .finally(() => (this.isLoading = false));
    }
  }
};
</script>

<style>
.scroll {
  overflow-y: scroll
}
</style>
