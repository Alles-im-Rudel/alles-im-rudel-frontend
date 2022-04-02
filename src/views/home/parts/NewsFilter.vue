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
        :class="canSeeCreateButton ? 'mr-2' : ''"
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
      <PostCreateButton
        v-if="canSeeCreateButton"
        @reload="reload"
      />
    </div>
  </div>
</template>

<script>
import TagSelect from '@/components/selects/TagSelect';
import PostCreateButton from '@/components/post/PostCreateButton';
import Permissions from '@/mixins/Permissions';

export default {
  components: {PostCreateButton, TagSelect},
  mixins: [Permissions],
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
    },
    canSeeCreateButton() {
      return this.can('posts.create');
    }
  },
  watch: {
    showSelect() {
      if (!this.showSelect && this.tagIds.length > 0) {
        this.$emit('input', []);
      }
    }
  },
  methods: {
    reload() {
      this.$emit('reload');
    }
  }
};
</script>

<style lang="scss">
.news-filter {
  .row-wrapper {
    display: flex;
    align-items: flex-end;

    .tag-select-container {
      width: 100%;
      max-width: 450px;
    }
  }
}
</style>