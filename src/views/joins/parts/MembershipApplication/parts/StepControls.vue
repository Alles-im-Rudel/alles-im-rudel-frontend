<template>
  <v-card-actions class="ma-0 pa-0">
    <v-btn @click="onClickBack">
      {{ backLabel }}
    </v-btn>
    <v-spacer />
    <v-btn
        color="primary"
        @click="onCLickContinue"
        :disabled="!isValid"
    >
      {{ continueLabel }}
    </v-btn>
  </v-card-actions>
</template>
<script>

export default {
  props: {
    backLabel: {
      type: String,
      default: "Zurück"
    },
    continueLabel: {
      type: String,
      default: "Weiter"
    },
    isValid: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  methods: {
    onClickBack() {
      this.$emit('step-back');
    },
    onCLickContinue() {
      this.$emit('step-continue');
    }
  }
}
</script>
