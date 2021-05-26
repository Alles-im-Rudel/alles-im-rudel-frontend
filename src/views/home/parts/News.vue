<template>
  <div>
    <v-card-title class="justify-center py-8 greyBlue white--text">
      <h2 class="text-h2">News</h2>
    </v-card-title>
    <v-card-text
      v-if="isLoading"
      class="mt-16 mb-12 d-flex justify-center align-center"
    >
      <v-progress-circular
        color="darkGrey"
        indeterminate
      />
    </v-card-text>
    <v-card-text
      v-else
      class="mt-4"
    >
      <v-row
        justify="center"
        class="pt-2 mx-auto mb-5"
        style="max-width: 1300px"
      >
        <v-col
          cols="12" md="4"
          v-for="post in posts"
          :key="post.id"
        >
          <post-card class="effects fade-in-main" :post="post"/>
        </v-col>
      </v-row>
      <v-row justify="center" class="mb-4">
        <v-btn
          text
          color="primary"
          @click="pushRouteTo('news')"
        >
          Alle News
        </v-btn>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
import PostCard from "@/components/post/PostCard";

export default {
  components: {
    PostCard
  },
  data() {
    return {
      isLoading: false,
      posts: []
    }
  },
  created() {
    this.getNews()
  },
  methods: {
    getNews() {
      this.isLoading = true;
      const params = {
        page: 1,
        items: 3
      };

      window.axios
        .get(`posts`, {params})
        .then((response) => {
          this.page += 1;
          this.posts = response.data.data
        })
        .finally(() => this.isLoading = false);
    }
  },
}
</script>