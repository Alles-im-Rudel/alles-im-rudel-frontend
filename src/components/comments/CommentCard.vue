<template>
  <v-card>
    <v-card-title>
      <user-chip :user="comment.user" />
      <v-spacer />
      {{ comment.createdAt | dateTime }}
    </v-card-title>
    <v-card-text>
      {{ comment.text }}
    </v-card-text>
  </v-card>
</template>

<script>
import UserChip from "@/components/users/UserChip";

export default {
  components: {
    UserChip
  },
  props: {
    comment: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {}
};
</script>
