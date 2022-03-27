<template>
  <div
    class="news-filter"
    :class="showSelect ? 'mb-8' : 'mb-4'"
  >
    <div class="row-wrapper">
      <div
        v-if="showSelect"
        class="tag-select-container"
      >
        <TagSelect
          v-model="tagIds"
        />
      </div>
      <v-spacer />
      <v-btn
        text
        class="primary--text"
        @click="showSelect = !showSelect"
      >
        <v-icon
          small
          class="mr-2 grey--text"
        >
          fa-filter
        </v-icon>
        Filter
      </v-btn>
    </div>
  </div>
</template>

<script>
import TagSelect from '@/components/selects/TagSelect';

export default {
  components: {TagSelect},
  props: {
    value: {
      type: Array,
      required: false,
      default: () => []
    },
  },
  data() {
    return {
      showSelect: false
    };
  },
  computed: {
    tagIds: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  watch: {
    showSelect() {
      if (!this.showSelect && this.tagIds.length > 0) {
        this.$emit('input', []);
      }
    }
  }
};
</script>

<style lang="scss">
.news-filter {
  .row-wrapper {
    display: flex;
    align-items: end;

    .tag-select-container {
      width: 100%;
      max-width: 450px;
    }
  }
}
</style>