<template>
  <vue-editor
    v-model="text"
    :editor-toolbar="toolbar"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: null
    },
    toolbar: {
      type: Array,
      required: false,
      default: () => [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ 'header': [1, 2, false] }],
        ['image', 'link'],
      ]
    }
  },
  computed: {
    text: {
      set(value) {
        this.$emit('input', value);
      },
      get() {
        return this.value;
      }
    }
  }
};
</script>