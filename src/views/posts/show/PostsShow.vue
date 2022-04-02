<template>
  <div class="white posts-show">
    <template v-if="!isLoading">
      <BaseSectionTitle>
        {{ post.title }}
        <br><PostTag
          :tag="post.tag"
          class="mt-8"
        />
      </BaseSectionTitle>

      <BaseContainer class="mt-8 pb-8">
        <div class="d-flex mb-8 align-center justify-space-between">
          <v-btn
            text
            class="px-2 darkGrey--text"
            @click="pushRouteTo('home')"
          >
            <v-icon class="darkGrey--text mr-0 mr-md-2">
              fa-arrow-left
            </v-icon>
            <span class="d-none d-md-block">
              Zurück
            </span>
          </v-btn>
          <div class="d-flex align-center mr-2">
            <UserChip :user="post.user" />
            <div class="ml-3 text-subtitle-2 darkGrey--text">
              {{ post.createdAt | date }} - {{ post.createdAt | time }} Uhr
            </div>
          </div>
        </div>

        <div class="image-container">
          <v-img :src="post.image.image" />
        </div>
        
        <div
          class="content-container mt-8"
          v-html="post.text"
        />

        <div class="d-flex justify-end">
          <PostEditButton
            v-model="post"
            @reload="getPost"
          />
          <PostDeleteButton
            :selected-post="post"
            @deleted="pushRouteTo('home')"
          />
        </div>
      </BaseContainer>
    </template>

    <BaseContainer
      v-else
      class="mt-12"
    >
      <v-skeleton-loader
        class="mx-auto"
        type="card"
      />
    </BaseContainer>
  </div>
</template>

<script>
import UserChip from '@/components/users/UserChip';
import PostEditButton from '@/components/post/PostEditButton';
import PostDeleteButton from '@/components/post/PostDeleteButton';
import PostTag from '@/components/post/PostTag';
export default {
  name: 'PostsShow',
  components: {PostTag, PostDeleteButton, PostEditButton, UserChip},
  metaInfo: {
    title: 'Alles im Rudel | Posts',
  },
  data() {
    return {
      postId: this.$route.params.id,
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
        .get(`/posts/${this.postId}`)
        .then((response) => {
          this.post = response.data.data;
          this.isLoading = false;
        });
    }
  }
};
</script>

<style lang="scss">
.posts-show {
  .image-container {
    width: 100%;
    margin: 0 auto;
  }
  .content-container {
    h1 {
      color: #495056;
      margin-bottom: 12px;
    }
    h2 {
      color: #495056;
      margin-bottom: 12px;
    }
    p {
      color: #111;
      margin-bottom: 24px;
    }
    img {
      width: 100%;
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }
}
</style>