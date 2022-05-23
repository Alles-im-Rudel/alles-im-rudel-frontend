<template>
  <div class="d-flex align-center mt-3">
    <template v-if="loading">
      <v-progress-circular
        indeterminate
        size="16"
        width="3"
        color="greyBlue"
      />
    </template>
    <template v-else>
      <v-icon
        class="mr-2"
        :color="available ? 'success' : 'error'"
        small
      >
        {{ available ? 'fa-check' : 'fa-times' }}
      </v-icon>
      {{
        available
          ? 'Dieser Sponsor ist für dich verfügbar!'
          : 'Dieser Sponsor ist nur für die Sparte ' + branch + ' verfügbar.'
      }}
    </template>
  </div>
</template>

<script>
export default {
  props: {
    available: {
      type: Boolean,
      required: false,
      default: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    branch: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>