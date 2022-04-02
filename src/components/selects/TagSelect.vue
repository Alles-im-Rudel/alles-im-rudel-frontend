<template>
  <v-select
    v-model="selected"
    :items="tags"
    placeholder="Tag auswählen"
    color="primary"
    item-value="id"
    item-text="name"
    chips
    clearable
    :multiple="multiple"
    :hide-details="!hasErrors"
  >
    <template v-slot:item="{ item }">
      <v-chip
        :color="item.color"
        class="white--text"
      >
        {{ item.name }}
      </v-chip>
    </template>
    <template v-slot:selection="{ item }">
      <v-chip
        :color="item.color"
        class="white--text"
      >
        {{ item.name }}
      </v-chip>
    </template>
  </v-select>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  props: {
    value: {
      type: undefined,
      required: false,
      default: () => null
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
    },
    multiple: {
      type: Boolean,
      required: false,
      default: () => true
    }
  },
  data() {
    return {
      selected: this.value
    };
  },
  computed: {
    ...mapGetters('tag', ['tags'])
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.selected = value;
      }
    },
    selected: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      },
    },
  },
  created() {
    this.getTags();
  },
  methods: {
    ...mapActions('tag', ['getTags']),
  }
};
</script>
