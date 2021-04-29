<template>
  <v-autocomplete
      v-model="selected"
      :items="tags"
      label="Tag auswählen"
      return-object
      color="primary"
      item-value="id"
      item-text="name"
      chips
      clearable
      multiple
  >
    <template v-slot:item="{ item }">
      <v-chip :color="item.color">{{ item.name }}</v-chip>
    </template>
    <template v-slot:selection="{ item }">
      <v-chip :color="item.color">{{ item.name }}</v-chip>
    </template>
  </v-autocomplete>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  props: {
    value: {
      type: Array,
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
    this.getTags()
  },
  methods: {
    ...mapActions('tag', ['getTags']),
  }
};
</script>
