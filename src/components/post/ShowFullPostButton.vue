<template>
  <v-dialog v-model="showDialog">
    <template v-slot:activator="{ on: dialog }">
      <v-btn
        color="darkGrey"
        dark
        v-on="{ ...dialog }"
      >
        Ansehen
      </v-btn>
    </template>
    <v-row
      no-gutters
      class="pa-0 ma-0"
    >
      <v-col
        cols="12"
        class="py-0 pl-0"
      >
        <show-post-card
          v-model="postId"
          :max-height="windowSize.y - 150"
          @close="close"
          @reload="$emit('reload')"
        />
      </v-col>
    </v-row>
  </v-dialog>
</template>

<script>
import ShowPostCard from '@/components/post/ShowPostCard';

export default {
  components: {
    ShowPostCard
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
  computed: {},
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowSize = {x: window.innerWidth, y: window.innerHeight};
    },
    close() {
      this.showDialog = false;
    }
  }
};
</script>