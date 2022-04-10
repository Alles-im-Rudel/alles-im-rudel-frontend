<template>
  <div>
    <div class="d-flex">
      <v-checkbox
        v-model="checkbox"
        class="ml-2"
        :disabled="!branch.isSelectable"
        @change="onChange"
      />

      <v-card flat>
        <v-card-title>
          {{ branch.name }}
        </v-card-title>
        <v-card-subtitle class="text-left pb-1">
          Kosten: {{ branch.price || '0' }} €
        </v-card-subtitle>
      </v-card>

      <v-spacer />

      <v-btn
        icon
        class="mt-3"
        @click="show = !show"
      >
        <v-icon>{{ show ? 'fa-angle-up' : 'fa-angle-down' }}</v-icon>
      </v-btn>
    </div>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text class="text-left">
          {{ branch.description || '' }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
import ValidationErrors from '@/mixins/ValidationErrors';

export default {
  mixins: [ValidationErrors],
  props: {
    branch: {
      type: Object,
      default: () => {
      }
    },
    selected: {
      type: Boolean,
      default: false
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      form: {},
      errors: {},
      show: false,
      checkbox: false,
    };
  },
  watch: {
    selected() {
      this.checkbox = this.selected;
    }
  },
  created() {
    this.checkbox = this.selected;
  },
  methods: {
    onChange() {
      if (this.checkbox) {
        this.$emit('select');
      } else {
        this.$emit('unselect');
      }
    }
  }
};
</script>