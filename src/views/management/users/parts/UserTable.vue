<template>
  <v-data-table
      :loading="isLoading"
      :headers="headers"
      :items="users"
      :options.sync="options"
      :server-items-length="serverItemsLength"
      :footer-props="footerProps"
      :no-data-text="'Es wurden keine Benutzer gefunden'"
      multi-sort
  >
    <template v-slot:item.userGroups="{ item }">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-if="item.userGroups.length > 0" color="fhRed" v-on="on">
            fa-bars
          </v-icon>
        </template>
        <span>
          <v-row v-for="userGroup in item.userGroups" :key="userGroup.id">
            <v-col lg="12">
              {{ userGroup.displayName }}
            </v-col>
          </v-row>
        </span>
      </v-tooltip>
    </template>
    <template v-slot:item.activatedAt="{ item }">
      <v-icon v-if="item.isActive" color="success">fa-check</v-icon>
      <v-icon v-else color="error">fa-times</v-icon>
    </template>
    <template v-slot:item.updatedAt="{ item }">
      {{ item.updatedAt | dateTime }}
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn>Test {{ item.firstName }}</v-btn>
    </template>
  </v-data-table>
</template>
<script>
import Permissions from '@/mixins/Permissions';
import DataTableMixin from '@/mixins/DataTableMixin';

export default {
  components: {},
  mixins: [Permissions, DataTableMixin],
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        page: 1,
        itemsPerPage: 10,
        sortBy: ['firstName'],
        sortDesc: [false],
        totalItems: null
      })
    },
    serverItemsLength: {
      type: Number,
      required: true,
      default: 0
    },
    users: {
      type: Array,
      required: true,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      options: this.value,
      headers: [
        {
          text: 'Vorname',
          value: 'firstName'
        },
        {
          text: 'Nachname',
          value: 'lastName'
        },
        {
          text: 'Benutzername',
          value: 'username'
        },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Rollen',
          value: 'rolesCount',
          sortable: false
        },
        {
          text: 'Berechtigungen',
          value: 'permissionsCount',
          sortable: false
        },
        {
          text: 'Aktiv',
          value: 'activatedAt'
        },
        {
          text: 'Bearbeitet am',
          value: 'updatedAt'
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
    options: {
      deep: true,
      handler() {
        this.$emit('input', this.options);
      }
    }
  },
  methods: {
    reload() {
      this.$emit('reload');
    }
  }
};
</script>
