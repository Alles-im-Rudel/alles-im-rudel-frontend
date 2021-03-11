<template>
  <v-card v-if="comments" :max-height="maxHeight">
    <v-card-title>
      Kommentare
      <v-spacer />
      <comment-create-button />
    </v-card-title>
    <v-divider />
    <v-card-text>
      <comment-card
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
      />
    </v-card-text>
  </v-card>
  <v-card v-else>
    <v-skeleton-loader class="mx-auto" type="card" />
  </v-card>
</template>

<script>
import CommentCard from "@/components/comments/CommentCard";
import CommentCreateButton from "@/components/comments/CommentCreateButton";

export default {
  components: {
    CommentCard,
    CommentCreateButton
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
    maxHeight: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      comments: [],
      isLoading: false,
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.isLoading = true;
      window.axios
          .get(`/commments/by/${this.value}`)
          .then((response) => {
            this.comments = response.data.data;
          })
          .finally(() => (this.isLoading = false));
    }
  }
};
</script>
