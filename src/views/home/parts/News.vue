<template>
  <div>
    <BaseSectionTitle>
      News
    </BaseSectionTitle>

    <BaseContainer class="mt-8 mb-3">
      <NewsFilter
        v-model="tagIds"
        @reload="getFresh"
      />
    </BaseContainer>

    <v-card-text
      v-if="posts.length > 0"
      class="mb-10 pt-0"
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
      v-else-if="isLoading && posts.length === 0"
      class="mt-16 mb-12 d-flex justify-center align-center"
    >
      <v-progress-circular
        color="darkGrey"
        indeterminate
      />
    </v-card-text>
    <v-card-text
      v-else
      class="text-center mt-10 mb-12"
    >
      Es wurden keine Ergebnisse gefunden.
    </v-card-text>
  </div>
</template>

<script>
import PostCard from '@/components/post/PostCard';
import NewsFilter from '@/views/home/parts/NewsFilter';

export default {
  components: {
    NewsFilter,
    PostCard
  },
  data() {
    return {
      isLoading: false,
      posts: [],
      page: 1,
      hasMorePosts: true,
      tagIds: []
    };
  },
  watch: {
    tagIds: {
      deep: true,
      handler() {
        this.getFresh();
      }
    }
  },
  created() {
    this.getFresh();
  },
  methods: {
    getFresh() {
      this.page = 1;
      this.posts = [];

      this.isLoading = true;
      const params = {
        page: this.page,
        perPage: 3,
        tagIds: this.tagIds
      };

      window.axios
        .get('posts', {params})
        .then((response) => {
          this.hasMorePosts = response.data.meta.last_page !== this.page;
          this.posts = response.data.data;
          this.page = 2;
        })
        .finally(() => this.isLoading = false);
    },
    getNews() {
      this.isLoading = true;
      const params = {
        page: this.page,
        perPage: 3,
        tagIds: this.tagIds
      };

      window.axios
        .get('posts', {params})
        .then((response) => {
          this.hasMorePosts = response.data.meta.last_page !== this.page;
          this.posts = [
            ...this.posts,
            ...response.data.data
          ];
          this.page += 1;
        })
        .finally(() => this.isLoading = false);
    }
  },
};
</script>