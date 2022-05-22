<template>
  <v-data-table
    :headers="headers"
    :items="selectedPermissions"
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
        @click="removePermission(item)"
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
      selectedPermissions: this.value,
      search: null,
      headers: [
        {
          text: 'Name',
          value: 'name'
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
        this.selectedPermissions = this.value;
      }
    }
  },
  methods: {
    removePermission(permission) {
      this.$emit('remove-permission', permission);
    }
  }
};
</script>
