<template>
  <div>
    <BaseSectionTitle>
      News
    </BaseSectionTitle>
    <v-card-text
      v-if="posts.length > 0"
      class="mt-6 mb-10"
    >
      <BaseContainer>
        <v-row
          justify="center"
          class="py-2"
        >
          <v-col
            v-for="post in posts"
            :key="post.id"
            cols="12"
            md="4"
          >
            <VueAnimation type="fade-in">
              <PostCard
                class="effects fade-in-main"
                :post="post"
              />
            </VueAnimation>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-btn
            v-if="hasMorePosts"
            text
            :loading="isLoading"
            color="primary"
            class="mt-8"
            @click="getNews"
          >
            Mehr laden
          </v-btn>
        </div>
      </BaseContainer>
    </v-card-text>
    <v-card-text
      v-if="isLoading && posts.length === 0"
      class="mt-16 mb-12 d-flex justify-center align-center"
    >
      <v-progress-circular
        color="darkGrey"
        indeterminate
      />
    </v-card-text>
  </div>
</template>

<script>
import PostCard from '@/components/post/PostCard';

export default {
  components: {
    PostCard

  },
  data() {
    return {
      isLoading: false,
      posts: [],
      page: 1,
      hasMorePosts: true,
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      this.isLoading = true;
      const params = {
        page: this.page,
        items: 3
      };

      window.axios
        .get('posts', {params})
        .then((response) => {
          this.hasMorePosts = response.data.meta.last_page !== this.page;
          this.page += 1;
          this.posts = [
            ...this.posts,
            ...response.data.data
          ];
        })
        .finally(() => this.isLoading = false);
    }
  },
};
</script>