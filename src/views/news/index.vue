<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <base-card>
          <v-card-title>
            News
            <v-spacer />
            <post-create-button @reload="getPosts" />
          </v-card-title>
        </base-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6"
             v-for="post in posts"
             :key="post.id"
      >
        <post-card :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostCard from "@/components/post/PostCard";
import PostCreateButton from "@/components/post/PostCreateButton";
import {cloneDeep} from "lodash";

export default {
  name: "News",
  components: {
    PostCard,
    PostCreateButton
  },
  data() {
    return {
      isLoading: false,
      posts: []
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.isLoading = true;
      window.axios
          .get(`posts`)
          .then((response) => {
            this.posts = cloneDeep(response.data.data);
          })
          .finally(() => (this.isLoading = false));
    }
  }
}
</script>