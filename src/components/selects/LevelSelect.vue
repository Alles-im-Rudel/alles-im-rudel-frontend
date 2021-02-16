<template>
  <v-combobox
      v-model="level"
      :items="levels"
      :label="label"
      :hide-details="!hasErrors"
      :error="hasErrors"
      :error-messages="errors"
      item-text="displayName"
      single-line
  />
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
    hasErrors: {
      type: Boolean,
      required: false,
      default: () => false
    },
    errors: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      level: null
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
