<template>
  <v-dialog v-model="showDialog">
    <template v-slot:activator="{ on: dialog }">
      <v-btn
          color="darkGrey"
          dark
          v-on="{ ...dialog }"
      >
        <v-icon left>fa-search</v-icon>
        Post ansehen
      </v-btn>
    </template>
    <v-row dense class="pa-0 ma-0">
      <v-col cols="12" lg="9" class="py-0 pl-0">
        <show-post-card v-model="postId" @close="close" :max-height="windowSize.y - 150" @reload="$emit('reload')"/>
      </v-col>
      <v-col cols="12" lg="3" class="py-0 pr-0">
        <comments-card v-model="postId" :max-height="windowSize.y - 150" />
      </v-col>
    </v-row>
  </v-dialog>
</template>

<script>
import ShowPostCard from "@/components/post/ShowPostCard";
import CommentsCard from "@/components/comments/CommentsCard";

export default {
  components: {
    ShowPostCard,
    CommentsCard
  },
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showDialog: false,
      windowSize: {
        x: 0,
        y: 0
      }
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  computed: {},
  methods: {
    onResize() {
      this.windowSize = {x: window.innerWidth, y: window.innerHeight}
    },
    close() {
      this.showDialog = false;
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>