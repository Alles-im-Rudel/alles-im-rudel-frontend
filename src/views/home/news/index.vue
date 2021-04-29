<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <base-card>
          <v-card-title>
            News
            <v-spacer />
            <v-text-field
                append-icon="fa-search"
                v-model="search"
                label="Suche"
                clearable
                @keydown.enter="tagsChanged"
                @click:append="tagsChanged"
                @click:clear="tagsChanged"
            />
            <v-spacer />
            <tag-select v-model="tags" />
            <v-spacer v-if="can('posts.create')" />
            <post-create-button @reload="tagsChanged" />
          </v-card-title>
        </base-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6"
             v-for="post in posts"
             :key="post.id"
      >
        <post-card class="effects fade-in-main" :post="post" @reload="tagsChanged" />
      </v-col>
    </v-row>
    <infinite-loader
        :is-loading="isLoading"
        :end="allPostsLoaded"
        loaded-text="Alle Posts geladen..."
        @load="startGetPosts"
    />
  </v-container>
</template>

<script>
import PostCard from "@/components/post/PostCard";
import PostCreateButton from "@/components/post/PostCreateButton";
import TagSelect from "@/components/selects/TagSelect";
import InfiniteLoader from '@/components/infiniteLoader/InfiniteLoader';
import {debounce} from 'lodash';
import Permissions from "@/mixins/Permissions";

export default {
  name: "News",
  mixins: [Permissions],
  components: {
    PostCard,
    PostCreateButton,
    TagSelect,
    InfiniteLoader
  },
  data() {
    return {
      isLoading: false,
      posts: [],
      tags: [],
      page: 1,
      search: null,
      totalItems: null
    }
  },
  created() {
    this.startGetPosts();
  },
  watch: {
    tags: {
      deep: true,
      handler() {
        this.tagsChanged();
      }
    },
  },
  computed: {
    allPostsLoaded() {
      return this.totalItems === this.posts.length
    }
  },
  methods: {
    startGetPosts() {
      if (this.allPostsLoaded) {
        return;
      }
      this.isLoading = true;
      this.getPosts()
    },
    getPosts: debounce(function () {
      const params = {
        tagIds: this.tags.map(tag => tag.id),
        page: this.page,
        search: this.search
      };
      window.axios
          .get(`posts`, {params})
          .then((response) => {
            if (response.data.data.length) {
              this.page += 1;
              this.posts.push(...response.data.data)
              this.totalItems = response.data.meta.total
            }
          })
          .finally(() => (this.isLoading = false));
    }, 500),
    tagsChanged() {
      this.page = 1;
      this.posts = [];
      this.totalItems = null;
      this.startGetPosts();
    },
  }
}
</script>