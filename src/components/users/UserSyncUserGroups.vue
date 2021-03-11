<template>
  <v-card v-if="user.id" tile>
    <v-card-title>
      Benutzergruppen dem Benutzer: {{ user.fullName }} hinzufügen
      <v-spacer />
      <v-btn icon @click="close">
        <v-icon>fa-times</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="10">
          <user-groups-table
              v-model="user.userGroups"
              :is-loading="isLoading"
              @remove-user-group="removeUserGroup"
          />
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="10">
          <add-user-groups-table
              v-model="notSelectedUserGroups"
              :is-loading="isLoading"
              @add-user-group="addUserGroup"
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
  <v-card v-else tile>
    <v-card-text>
      <v-skeleton-loader class="mx-auto" type="card" />
    </v-card-text>
  </v-card>
</template>

<script>
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';
import Permissions from '@/mixins/Permissions';
import UserGroupsTable from "@/components/userGroups/UserGroupsTable";
import AddUserGroupsTable from "@/components/userGroups/AddUserGroupsTable";

import {cloneDeep} from 'lodash';
import hasArrayDifferenz from '@/mixins/HasArrayDifferenz';

export default {
  components: {
    ResetSaveAction,
    AddUserGroupsTable,
    UserGroupsTable
  },
  mixins: [Permissions, hasArrayDifferenz],
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      user: {
        id: null,
        fullName: null,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        isActive: false,
        userGroups: [],
        permissions: []
      },
      originalUser: {
        id: null,
        fullName: null,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        isActive: false,
        userGroups: [],
        permissions: []
      },
      isLoading: false,
      notSelectedUserGroups: [],
      originalNotSelectedUserGroups: []
    };
  },
  computed: {
    canSubmit() {
      return (
          this.checkArrays(
              this.user.userGroups,
              this.originalUser.userGroups
          )
      );
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.isLoading = true;
      const params = {
        userId: this.userId
      };
      window.axios
          .get(`users/${this.userId}`, {params})
          .then((response) => {
            this.user = cloneDeep(response.data.data);
            this.originalUser = cloneDeep(response.data.data);
            this.getUserGroups();
          })
          .finally(() => (this.isLoading = false));
    },
    getUserGroups() {
      this.isLoading = true;
      const params = {
        withOutUserGroupIds: this.user.userGroups.map(
            (userGroup) => userGroup.id
        )
      };
      window.axios
          .get(`user-groups/all`, {params})
          .then((response) => {
            this.notSelectedUserGroups = cloneDeep(response.data.data);
            this.originalNotSelectedUserGroups = cloneDeep(response.data.data);
          })
          .finally(() => (this.isLoading = false));
    },
    addUserGroup(userGroup) {
      if (
          this.user.userGroups.findIndex((p) => p.id === userGroup.id) === -1
      ) {
        this.user.userGroups.push(userGroup);
        this.notSelectedUserGroups.splice(
            this.notSelectedUserGroups.findIndex((p) => p.id === userGroup.id),
            1
        );
      }
    },
    removeUserGroup(userGroup) {
      this.user.userGroups.splice(
          this.user.userGroups.findIndex((p) => p.id === userGroup.id),
          1
      );
      this.notSelectedUserGroups.push(userGroup);
    },
    submit() {
      this.isLoading = true;
      const params = {
        userGroupIds: this.user.userGroups.map((userGroup) => userGroup.id),
        userId: this.user.id
      };
      window.axios
          .put(`users/sync-user-groups/${this.user.id}`, params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.getUser();
            this.$emit('reload');
          })
          .finally(() => (this.isLoading = false));
    },
    reset() {
      this.user = cloneDeep(this.originalUser);
      this.notSelectedUserGroups = cloneDeep(
          this.originalNotSelectedUserGroups
      );
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>
