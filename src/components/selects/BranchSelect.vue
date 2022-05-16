<template>
  <v-combobox
    v-model="branch"
    :label="label"
    :items="branches"
    item-text="name"
    clearable
    :error="hasErrors('branch')"
    :error-messages="getErrors('branch')"
    @click:clear="clearBranch"
  />
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
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
      branch: null
    };
  },
  computed: {
    ...mapGetters('branch', ['branches']),
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
    ...mapActions('branch', ['getBranches']),
    clearBranch() {
      this.branch = null;
    }
  }
};
</script>
