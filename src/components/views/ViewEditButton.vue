<template>
  <v-dialog v-model="showDialog" fullscreen>
    <template v-slot:activator="{ on: dialog }">
      <v-btn
          :icon="isMobile"
          v-if="canSeeButton"
          color="darkGrey"
          dark
          v-on="{ ...dialog }"
      >
        <v-icon left>fa-edit</v-icon>
        {{ !isMobile ? label : '' }}
      </v-btn>
    </template>
    <edit-view :view-id="viewId" :label="label" @close="close" @reload="$emit('reload')" />
  </v-dialog>
</template>

<script>
import EditView from "@/components/views/EditView";
import Permissions from "@/mixins/Permissions";
import CheckMobile from "@/mixins/CheckMobile";

export default {
  components: {
    EditView
  },
  mixins: [Permissions, CheckMobile],
  props: {
    label: {
      type: String,
      required: true
    },
    viewId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showDialog: false
    };
  },

  computed: {
    canSeeButton() {
      return this.can('views.update');
    },
  },
  methods: {
    close() {
      this.showDialog = false;
    }
  }
};
</script>