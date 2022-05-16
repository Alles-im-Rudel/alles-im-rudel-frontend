<template>
  <v-autocomplete
    v-model="color"
    :items="colors"
    :label="label"
    item-value="displayName"
    item-text="displayName"
    :hide-details="!hasErrors"
    :error="hasErrors"
    :error-messages="errors"
    single-line
  >
    <template v-slot:item="{ item }">
      <v-chip
        :color="item.displayName"
        :class="item.displayName === 'white' ? 'black--text' : 'white--text'"
      >
        {{ item.displayName }}
      </v-chip>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => null
    },
    label: {
      type: String,
      required: false,
      default: () => 'Farbe auswählen'
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
      color: this.value,
      colors: [
        {displayName: 'primary'},
        {displayName: 'darkGrey'},
        {displayName: 'greyBlue'},
        {displayName: 'secondary'},
        {displayName: 'yellow'},
        {displayName: 'black'},
        {displayName: 'error'},
        {displayName: 'info'},
        {displayName: 'success'},
        {displayName: 'warning'},
        {displayName: 'white'},
        {displayName: 'dev'},
        {displayName: 'admin'},
        {displayName: 'moderator'},
        {displayName: 'member'},
        {displayName: 'eSports'},
        {displayName: 'airsoft'},
        {displayName: 'prospect'},
        {displayName: 'gaming'},
        {displayName: 'default'},
        {displayName: 'liked'},
      ]
    };
  },
  watch: {
    value(value) {
      this.color = value;
    },
    color(value) {
      this.$emit('input', value);
    }
  }
};
</script>
