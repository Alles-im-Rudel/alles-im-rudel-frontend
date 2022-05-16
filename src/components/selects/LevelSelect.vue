<template>
  <v-combobox
    v-model="level"
    :label="label"
    :items="levels"
    item-text="displayName"
    :error="hasErrors('level')"
    :error-messages="getErrors('level')"
    :hide-details="!hasErrors('level')"
  />
</template>

<script>
import { mapGetters } from 'vuex';
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
      default: () => 'Level auswählen'
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      level: this.value,
      errors: this.validationErrors,
    };
  },
  computed: {
    ...mapGetters('level', ['levels'])
  },
  watch: {
    value() {
      this.loadLevel();
    },
    level(value) {
      if (this.level !== null) {
        this.$emit('input', value.id);
      }
    }
  },
  created() {
    this.loadLevel();
  },
  methods: {
    loadLevel() {
      if (this.value === null) {
        this.level = null;
      } else {
        for (let index = 0; index < this.levels.length; index++) {
          if (this.value === this.levels[index].id) {
            this.level = this.levels[index];
            break;
          }
        }
      }
    }
  }
};
</script>
