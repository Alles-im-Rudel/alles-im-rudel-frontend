<template>
  <v-card>
    <v-card-title class="headline">
      Bearbeiten von: {{ originUserGroup.displayName }}
      <v-spacer />
      <v-btn icon @click="$emit('close')">
        <v-icon>fa-times</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <user-group-form v-model="userGroup" :validation-errors="errors" />
    </v-card-text>
    <v-divider />
    <reset-save-action
        :is-loading="isLoading"
        :can-submit="canSubmit"
        :has-changes="hasChanges"
        @submit="submit"
        @clear="clear"
    />
  </v-card>
</template>

<script>
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';
import userGroupForm from '@/components/userGroups/UserGroupForm';
import ValidationErros from '@/mixins/ValidationErros'
import { cloneDeep } from 'lodash';

export default {
  components: {
    'user-group-form': userGroupForm,
    ResetSaveAction
  },
  mixins: [ValidationErros],
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      originUserGroup: cloneDeep(this.value),
      userGroup: cloneDeep(this.value),
      isLoading: false,
      errors: {}
    };
  },
  computed: {
    canSubmit() {
      return !!this.userGroup.displayName && !!this.userGroup.color && this.hasChanges;
    },
    hasChanges() {
      return (
          this.userGroup.displayName !== this.originUserGroup.displayName ||
          this.userGroup.description !== this.originUserGroup.description ||
          this.userGroup.color !== this.originUserGroup.color ||
          this.userGroup.levelId !== this.originUserGroup.levelId
      );
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      this.errors = {};
      const params = {
        userGroupId: this.originUserGroup.id,
        displayName: this.userGroup.displayName,
        description: this.userGroup.description,
        color: this.userGroup.color,
        levelId: this.userGroup.levelId
      };
      window.axios
          .put(`/user-groups/${this.originUserGroup.id}`, params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.originUserGroup = cloneDeep(response.data.userGroup);
            this.userGroup = cloneDeep(response.data.userGroup);
            this.clear();
            this.$emit('reload');
          })
          .catch(this.syncErrors)
          .finally(() => (this.isLoading = false));
    },
    clear() {
      this.userGroup = cloneDeep(this.originUserGroup);
      this.errors = {};
    }
  }
};
</script>
