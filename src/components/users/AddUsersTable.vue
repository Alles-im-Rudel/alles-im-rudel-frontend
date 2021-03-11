<template>
  <v-data-table
      :headers="headers"
      :items="notSelectedUsers"
      :search="search"
      :no-data-text="'Es wurden keine Benutzer gefunden'"
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
      <v-btn :disabled="isLoading" @click="addUser(item)">
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
      notSelectedUsers: this.value,
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
        this.notSelectedUsers = this.value;
      }
    }
  },
  methods: {
    addUser(user) {
      this.$emit('add-user', user);
    }
  }
};
</script>
