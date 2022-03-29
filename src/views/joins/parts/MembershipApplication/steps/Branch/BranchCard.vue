<template>
  <v-card
      flat
  >
    <v-card-title class="pb-1 pt-1">
      {{ branch.name }}
      <v-spacer />
      <div class="text-body-2">
        {{ label }}
      </div>
      <v-checkbox
          class="ml-2"
          v-model="checkbox"
          :disabled="!branch.isSelectable"
          @change="onChange"
      />
      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>{{ show ? 'fa-angle-up' : 'fa-angle-down' }}</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle class="text-left pb-0">
      Mitglieder: {{ branch.membersCounts || '0' }}
    </v-card-subtitle>
    <v-card-subtitle class="text-left pt-1 pb-1">
      Kosten: {{ branch.price || '0' }}€
    </v-card-subtitle>
    <v-expand-transition>
      <div v-show="show">
        <v-card-text class="text-left">
          {{ branch.description || '0' }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
import ValidationErrors from "@/mixins/ValidationErros";

export default {
  mixins: [ValidationErrors],
  props: {
    branch: {
      type: Object,
      default: () => {
      }
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    label() {
      return this.checkbox ? `Ich nehme bei der Sparte ${this.branch.name} teil` : `Ich nehme bei der Sparte ${this.branch.name} nicht teil`
    }
  },
  data() {
    return {
      form: {},
      errors: {},
      show: false,
      checkbox: !this.branch.isSelectable,
    }
  },
  methods: {
    onChange() {
      this.$emit('branch-changed', this.branch);
    }
  },
  watch: {}
}
</script>