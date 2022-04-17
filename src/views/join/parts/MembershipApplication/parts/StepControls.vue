<template>
  <v-row class="px-0 py-2">
    <v-col
      v-if="hasBack"
      cols="6"
    >
      <v-btn @click="onClickBack">
        {{ backLabel }}
      </v-btn>
    </v-col>
    <v-col
      :cols="hasBack ? 6 : 12"
      class="d-flex justify-end"
    >
      <v-btn
        color="primary"
        :disabled="!isValid"
        @click="onClickContinue"
      >
        {{ continueLabel }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    backLabel: {
      type: String,
      default: 'Zurück'
    },
    continueLabel: {
      type: String,
      default: 'Weiter'
    },
    hasBack: {
      type: Boolean,
      default: true
    },
    isValid: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    onClickBack() {
      this.$emit('step-back');
    },
    onClickContinue() {
      this.$emit('step-continue');
    }
  }
};
</script>
