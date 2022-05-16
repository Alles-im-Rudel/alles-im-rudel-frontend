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
    <template v-slot:item.createdAt="{ item }">
      {{ item.createdAt | dateTime }}
    </template>
    <template v-slot:item.actions="{ item }">
      <user-show-button
        :user="item"
        @reload="reload"
      />
      <user-edit-button :user="item" />
      <user-sync-user-groups-button
        :user="item"
        @reload="reload"
      />
      <user-sync-permissions-button
        :user="item"
        @reload="reload"
      />
      <user-sync-main-summoner-button
        :user="item"
        @reload="reload"
      />
      <user-delete-button
        :selected-user="item"
        @user-was-deleted="reload"
      />
    </template>
  </v-data-table>
</template>
<script>
import Permissions from '@/mixins/Permissions';
import DataTableMixin from '@/mixins/DataTableMixin';
import UserEditButton from '@/views/management/users/index/parts/buttons/UserEditButton';
import UserDeleteButton from '@/views/management/users/index/parts/buttons/UserDeleteButton';
import UserSyncPermissionsButton from '@/views/management/users/index/parts/buttons/UserSyncPermissionsButton';
import UserSyncUserGroupsButton from '@/views/management/users/index/parts/buttons/UserSyncUserGroupsButton';
import UserSyncMainSummonerButton from '@/views/management/users/index/parts/buttons/UserSyncMainSummonerButton';
import UserShowButton from '@/views/management/users/index/parts/buttons/UserShowButton';

export default {
  components: {
    UserEditButton,
    UserDeleteButton,
    UserSyncPermissionsButton,
    UserSyncUserGroupsButton,
    UserSyncMainSummonerButton,
    UserShowButton
  },
  mixins: [Permissions, DataTableMixin],
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        page: 1,
        itemsPerPage: 10,
        sortBy: ['lastName'],
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
          text: 'E-Mail',
          value: 'email'
        },
        {
          text: 'Benutzergruppen',
          value: 'userGroupsCount',
          sortable: false
        },
        {
          text: 'Sparten',
          value: 'branchUserMemberShipsCount',
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
          text: 'Erstellt am',
          value: 'createdAt'
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
