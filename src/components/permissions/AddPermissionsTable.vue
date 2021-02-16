<template>
  <v-data-table
      :headers="headers"
      :items="notSelectedPermissions"
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
      <v-btn :disabled="isLoading" @click="addPermission(item)">
        hinzufügen
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
      notSelectedPermissions: this.value,
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
        this.notSelectedPermissions = this.value;
      }
    }
  },
  methods: {
    addPermission(permission) {
      this.$emit('add-permission', permission);
    }
  }
};
</script>
