<template>
  <v-row>
    <v-col cols="12" md="6" lg="3">
      <v-text-field
          v-model="view.title"
          label="Titel"
          :error="hasErrors('title')"
          :error-messages="getErrors('title')"
      />
    </v-col>
    <v-col cols="12">
      <vue-editor v-model="view.body" />
    </v-col>
  </v-row>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErros';

export default {
  components: {},
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        title: null,
        body: null
      })
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      view: this.value,
    };
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.view = this.value;
      }
    },
    validationErrors: {
      handler() {
        this.errors = this.validationErrors;
      },
      deep: true
    },
    view: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      }
    }
  }
};
</script>
