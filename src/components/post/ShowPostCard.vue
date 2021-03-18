<template>
  <v-card v-if="post.id" :max-height="maxHeight" class="scroll">
    <v-card-title>
      {{ post.title }}
      <v-spacer />
      <user-chip :user="post.user" />
      <post-tags :tags="post.tags" />
      <v-spacer />
      {{ post.createdAt | dateTime }}
      <post-edit-button v-model="post" />
      <post-delete-button
          :selected-post="post"
          @deleted="$emit('reload')"
      />
    </v-card-title>
    <v-divider />
    <post-images :images="post.images" />
    <div class="ql-snow">
      <div class="ql-editor" v-html="post.text" />
    </div>
  </v-card>
  <v-card v-else>
    <v-skeleton-loader class="mx-auto" type="card" />
  </v-card>
</template>

<script>
import UserChip from "@/components/users/UserChip";
import PostImages from "@/components/post/PostImages";
import PostTags from "@/components/post/PostTags";
import PostDeleteButton from "@/components/post/PostDeleteButton";
import PostEditButton from "@/components/post/PostEditButton";

export default {
  components: {
    UserChip,
    PostImages,
    PostTags,
    PostDeleteButton,
    PostEditButton
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
