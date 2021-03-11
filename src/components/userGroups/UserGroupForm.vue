<template>
  <v-row>
    <v-col cols="12" class="pb-0">
      <v-text-field
          v-model="userGroup.displayName"
          label="Name"
          :error="hasErrors('displayName')"
          :error-messages="getErrors('displayName')"
      />
    </v-col>
    <v-col cols="12" class="pb-0">
      <v-text-field
          v-model="userGroup.color"
          label="Farbe"
          :error="hasErrors('color')"
          :error-messages="getErrors('color')"
      />
    </v-col>
    <v-col class="pt-0" cols="12">
      <level-select v-model="userGroup.levelId" @input="updateLevel" />
    </v-col>
    <v-col cols="12">
      <v-textarea
          v-model="userGroup.description"
          label="Beschreibung"
          :error="hasErrors('description')"
          :error-messages="getErrors('description')"
      />
    </v-col>
  </v-row>
</template>

<script>
import ValidationErrors from '@/mixins/ValidationErros';
import LevelSelect from '@/components/selects/LevelSelect';

export default {
  components: {LevelSelect},
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Object,
      required: true
    },
    validationErrors: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      userGroup: this.value,
      errors: this.validationErrors
    };
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.userGroup = this.value;
      }
    },
    validationErrors: {
      handler() {
        this.errors = this.validationErrors;
      },
      deep: true
    },
    userGroup: {
      deep: true,
      handler() {
        this.$emit('input', this.userGroup);
      }
    }
  },
  methods: {
    updateLevel(data) {
      this.userGroup.levelId = data;
    }
  }
};
</script>
