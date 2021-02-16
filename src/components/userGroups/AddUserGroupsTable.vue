<template>
  <v-data-table
      :headers="headers"
      :items="notSelectedUserGroups"
      :search="search"
      :no-data-text="'Es wurden keine Benutzergruppen gefunden'"
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
      <v-btn :disabled="isLoading" @click="addUserGroup(item)">
        hinzufügen
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>

export default {
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
      notSelectedUserGroups: this.value,
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
        this.notSelectedUserGroups = this.value;
      }
    }
  },
  methods: {
    addUserGroup(userGroup) {
      this.$emit('add-user-group', userGroup);
    }
  }
};
</script>
