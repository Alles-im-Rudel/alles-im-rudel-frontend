<template>
  <v-card v-if="user.id" tile>
    <v-card-title>
      Berechtigungen dem Benutzer: {{ user.fullName }} hinzufügen
      <v-spacer />
      <v-btn icon @click="close">
        <v-icon>fa-times</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="10">
          <permissions-table
              v-model="user.permissions"
              :is-loading="isLoading"
              @remove-permission="removePermission"
          />
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="10">
          <add-permissions-table
              v-model="notSelectedPermissions"
              :is-loading="isLoading"
              @add-permission="addPermission"
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
import AddPermissionsTable from '@/components/permissions/AddPermissionsTable';
import PermissionsTable from '@/components/permissions/PermissionsTable';
import {cloneDeep} from 'lodash';
import hasArrayDifferenz from '@/mixins/HasArrayDifferenz';

export default {
  components: {
    ResetSaveAction,
    AddPermissionsTable,
    PermissionsTable
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
      notSelectedPermissions: [],
      originalNotSelectedPermissions: []
    };
  },
  computed: {
    canSubmit() {
      return (
          this.checkArrays(
              this.user.permissions,
              this.originalUser.permissions
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
            this.getPermissions();
          })
          .finally(() => (this.isLoading = false));
    },
    getPermissions() {
      this.isLoading = true;
      const params = {
        withOutPermissionIds: this.user.permissions.map(
            (permission) => permission.id
        )
      };
      window.axios
          .get(`permissions`, {params})
          .then((response) => {
            this.notSelectedPermissions = cloneDeep(response.data.data);
            this.originalNotSelectedPermissions = cloneDeep(response.data.data);
          })
          .finally(() => (this.isLoading = false));
    },
    addPermission(permission) {
      if (
          this.user.permissions.findIndex((p) => p.id === permission.id) === -1
      ) {
        this.user.permissions.push(permission);
        this.notSelectedPermissions.splice(
            this.notSelectedPermissions.findIndex((p) => p.id === permission.id),
            1
        );
      }
    },
    removePermission(permission) {
      this.user.permissions.splice(
          this.user.permissions.findIndex((p) => p.id === permission.id),
          1
      );
      this.notSelectedPermissions.push(permission);
    },
    submit() {
      this.isLoading = true;
      const params = {
        permissionIds: this.user.permissions.map((permission) => permission.id),
        userId: this.user.id
      };
      window.axios
          .put(`users/sync-permissions/${this.user.id}`, params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.getUser();
            this.$emit('reload');
          })
          .finally(() => (this.isLoading = false));
    },
    reset() {
      this.user = cloneDeep(this.originalUser);
      this.notSelectedPermissions = cloneDeep(
          this.originalNotSelectedPermissions
      );
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>
