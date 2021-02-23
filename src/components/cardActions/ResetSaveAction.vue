<template>
  <v-card-actions>
    <v-btn :disabled="!hasChanges && !isLoading" @click="clear">
      Zurücksetzen
    </v-btn>
    <v-spacer />
    <v-btn
        color="success"
        :loading="isLoading"
        :disabled="!canSubmit"
        @click="submit"
    >
      {{ submitText }}
    </v-btn>
  </v-card-actions>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: () => false
    },
    canSubmit: {
      type: Boolean,
      required: false,
      default: () => false
    },
    hasChanges: {
      type: Boolean,
      required: false,
      default: () => true
    },
    submitText: {
      type: String,
      required: false,
      default: () => 'Speichern'
    }
  },
  methods: {
    submit() {
      this.$emit('submit');
    },
    clear() {
      this.$emit('clear');
    }
  }
};
</script>
