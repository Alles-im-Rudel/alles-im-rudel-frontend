<template>
  <v-data-table
      :headers="headers"
      :items="selectedUserGroups"
      :search="search"
      :no-data-text="'Es wurden keine Berechtigungen gefunden'"
  >
    <template v-slot:top>
      <v-text-field
          v-model="search"
          label="Suche"
          single-line
          hide-details
          clearable
      />
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn
          :disabled="isLoading"
          color="error"
          @click="removeUserGroup(item)"
      >
        entfernen
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import Permissions from '@/mixins/Permissions';

export default {
  mixins: [Permissions],
  props: {
    value: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      selectedUserGroups: this.value,
      search: null,
      headers: [
        {
          text: 'Name',
          value: 'displayName'
        },
        {
          text: 'Aktionen',
          value: 'actions',
          sortable: false
        }
      ]
    };
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.selectedUserGroups = this.value;
      }
    }
  },
  methods: {
    removeUserGroup(userGroup) {
      this.$emit('remove-user-group', userGroup);
    }
  }
};
</script>
