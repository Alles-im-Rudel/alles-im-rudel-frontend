<template>
  <v-combobox
    v-model="branch"
    :label="label"
    :items="branches"
    item-text="name"
    clearable
    :loading="isLoading"
    :error="hasErrors('branch')"
    :error-messages="getErrors('branch')"
    @click:clear="clearBranch"
  />
</template>

<script>
import ValidationErrors from '@/mixins/ValidationErrors';

export default {
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Number,
      required: false,
      default: () => null
    },
    label: {
      type: String,
      required: false,
      default: () => 'Sparte auswählen'
    },
    validationErrors: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      brancehs: [],
      branch: null,
      isLoading: false,
    };
  },
  watch: {
    branch(value) {
      this.$emit('input', value ? value.id : null);
    }
  },
  created() {
    this.getBranches();
  },
  methods: {
    getBranches() {
      this.isLoading = true;
      window.axios.get('branches/filterd')
          .then(({data}) => {
            this.branches = data.data;
          })
          .finally(() => this.isLoading = false);
    },
    clearBranch() {
      this.branch = null;
    }
  }
};
</script>
