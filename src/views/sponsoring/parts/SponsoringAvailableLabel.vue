<template>
  <div class="d-flex align-center mt-3">
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
    branch: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>