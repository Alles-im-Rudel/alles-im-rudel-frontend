<template>
  <v-dialog v-model="showDialog" max-width="500">
    <template v-slot:activator="{ on: dialog }">
      <v-btn
          color="darkGrey"
          icon
          v-on="{ ...dialog }"
      >
        <v-icon>fa-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Kommentar
      </v-card-title>
      <v-card-text>
        <v-text-field
            label="Kommentar"
        />
      </v-card-text>
      <reset-save-action />
    </v-card>
  </v-dialog>
</template>

<script>
import ResetSaveAction from "@/components/cardActions/ResetSaveAction";

export default {
  components: {
    ResetSaveAction
  },
  props: {
    postId: {
      type: Number,
      required: false,
      default: () => null
    },
    commentId: {
      type: Number,
      required: false,
      default: () => null
    }
  },
  data() {
    return {
      showDialog: false
    };
  },

  computed: {},
  methods: {}
};
</script>