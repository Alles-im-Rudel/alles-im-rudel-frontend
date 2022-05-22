<template>
  <v-data-table
    :loading="isLoading"
    :headers="headers"
    :items="userGroups"
    :options.sync="options"
    :server-items-length="serverItemsLength"
    :footer-props="footerProps"
    :no-data-text="'Es wurden keine Benutzer gefunden'"
    multi-sort
  >
    <template v-slot:item.activatedAt="{ item }">
      <v-icon
        v-if="item.isActive"
        color="success"
      >
        fa-check
      </v-icon>
      <v-icon
        v-else
        color="error"
      >
        fa-times
      </v-icon>
    </template>
    <template v-slot:item.updatedAt="{ item }">
      {{ item.updatedAt | dateTime }}
    </template>
    <template v-slot:item.actions="{ item }">
      <user-group-edit-button
        :user-group="item"
        @reload="reload"
      />
      <user-group-sync-users-button
        :user-group="item"
        @reload="reload"
      />
      <user-group-sync-permissions-button
        :user-group="item"
        @reload="reload"
      />
      <user-group-delete-button
        :selected-user-group="item"
        @user-group-was-deleted="reload"
      />
    </template>
  </v-data-table>
</template>
<script>
import Permissions from '@/mixins/Permissions';
import DataTableMixin from '@/mixins/DataTableMixin';
import UserGroupEditButton from '@/views/management/permissions/parts/UserGroups/parts/buttons/UserGroupEditButton';
import UserGroupDeleteButton from '@/views/management/permissions/parts/UserGroups/parts/buttons/UserGroupDeleteButton';
import UserGroupSyncPermissionsButton
  from '@/views/management/permissions/parts/UserGroups/parts/buttons/UserGroupSyncPermissionsButton';
import UserGroupSyncUsersButton
  from '@/views/management/permissions/parts/UserGroups/parts/buttons/UserGroupSyncUsersButton';

export default {
  components: {
    UserGroupEditButton,
    UserGroupDeleteButton,
    UserGroupSyncPermissionsButton,
    UserGroupSyncUsersButton
  },
  mixins: [Permissions, DataTableMixin],
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        page: 1,
        itemsPerPage: 10,
        sortBy: ['levelId'],
        sortDesc: [true],
        totalItems: null
      })
    },
    serverItemsLength: {
      type: Number,
      required: true,
      default: 0
    },
    userGroups: {
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
          text: 'Name',
          value: 'displayName'
        },
        {
          text: 'Benutzer',
          value: 'usersCount'
        },
        {
          text: 'Farbe',
          value: 'color'
        },
        {
          text: 'Level',
          value: 'levelId'
        },
        {
          text: 'Berechtigungen',
          value: 'permissionsCount'
        },
        {
          text: 'Rollen',
          value: 'rolesCount',
          sortable: false
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
      handler(value) {
        this.$emit('input', value);
      }
    },
    value: {
      deep: true,
      handler(value) {
        this.options = value;
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
