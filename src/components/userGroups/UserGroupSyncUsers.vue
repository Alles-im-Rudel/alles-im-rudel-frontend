<template>
  <v-card
    v-if="userGroup.id"
    tile
  >
    <v-card-title>
      Benutzer der Benutzergruppe {{ userGroup.displayName }} hinzufügen
      <v-spacer />
      <v-btn
        icon
        @click="close"
      >
        <v-icon>fa-times</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          lg="6"
          md="6"
          sm="10"
        >
          <users-table
            v-model="userGroup.users"
            :is-loading="isLoading"
            @remove-user="removeUser"
          />
        </v-col>
        <v-col
          cols="12"
          lg="6"
          md="6"
          sm="10"
        >
          <add-users-table
            v-model="notSelectedUsers"
            :is-loading="isLoading"
            @add-user="addUser"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider />
    <reset-save-action
      :is-loading="isLoading"
      :can-submit="canSubmit"
      @submit="submit"
      @clear="reset"
    />
  </v-card>
  <v-card
    v-else
    tile
  >
    <v-card-text>
      <v-skeleton-loader
        class="mx-auto"
        type="card"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';
import Permissions from '@/mixins/Permissions';
import UsersTable from '@/components/users/UsersTable';
import AddUsersTable from '@/components/users/AddUsersTable';

import {cloneDeep} from 'lodash';
import hasArrayDifferenz from '@/mixins/HasArrayDifferenz';

export default {
  components: {
    ResetSaveAction,
    AddUsersTable,
    UsersTable
  },
  mixins: [Permissions, hasArrayDifferenz],
  props: {
    userGroupId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      userGroup: {
        id: null,
        users: [],
        permissions: []
      },
      originalUserGroup: {
        id: null,
        userGroups: [],
        permissions: []
      },
      isLoading: false,
      notSelectedUsers: [],
      originalNotSelectedUsers: []
    };
  },
  computed: {
    canSubmit() {
      return (
          this.checkArrays(
              this.userGroup.users,
              this.originalUserGroup.users
          )
      );
    }
  },
  created() {
    this.getUserGroup();
  },
  methods: {
    getUserGroup() {
      this.isLoading = true;
      const params = {
        userGroupId: this.userGroupId
      };
      window.axios
          .get(`user-groups/${this.userGroupId}`, {params})
          .then((response) => {
            this.userGroup = cloneDeep(response.data.data);
            this.originalUserGroup = cloneDeep(response.data.data);
            this.getUsers();
          })
          .finally(() => (this.isLoading = false));
    },
    getUsers() {
      this.isLoading = true;
      const params = {
        withOutUserIds: this.userGroup.users.map(
            (user) => user.id
        )
      };
      window.axios
          .get('users/all', {params})
          .then((response) => {
            this.notSelectedUsers = cloneDeep(response.data.data);
            this.originalNotSelectedUsers = cloneDeep(response.data.data);
          })
          .finally(() => (this.isLoading = false));
    },
    addUser(user) {
      if (
          this.userGroup.users.findIndex((p) => p.id === user.id) === -1
      ) {
        this.userGroup.users.push(user);
        this.notSelectedUsers.splice(
            this.notSelectedUsers.findIndex((p) => p.id === user.id),
            1
        );
      }
    },
    removeUser(user) {
      this.userGroup.users.splice(
          this.userGroup.users.findIndex((p) => p.id === user.id),
          1
      );
      this.notSelectedUserGroups.push(user);
    },
    submit() {
      this.isLoading = true;
      const params = {
        userIds: this.userGroup.users.map((user) => user.id),
        userGroupId: this.userGroup.id
      };
      window.axios
          .put(`user-groups/sync-users/${this.userGroup.id}`, params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.getUserGroup();
            this.$emit('reload');
          })
          .finally(() => (this.isLoading = false));
    },
    reset() {
      this.userGroup = cloneDeep(this.originalUserGroup);
      this.notSelectedUsers = cloneDeep(
          this.originalNotSelectedUsers
      );
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>
