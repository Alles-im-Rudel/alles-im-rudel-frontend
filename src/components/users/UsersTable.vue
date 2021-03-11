<template>
  <v-data-table
      :headers="headers"
      :items="selectedUsers"
      :search="search"
      :no-data-text="'Es wurden kein Benutzer gefunden'"
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
          @click="removeUser(item)"
      >
        entfernen
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
      selectedUsers: this.value,
      search: null,
      headers: [
        {
          text: 'Name',
          value: 'fullName'
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
        this.selectedUsers = this.value;
      }
    }
  },
  methods: {
    removeUser(user) {
      this.$emit('remove-user', user);
    }
  }
};
</script>
