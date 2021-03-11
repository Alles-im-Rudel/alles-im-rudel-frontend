<template>
  <v-card v-if="userGroup.id" tile>
    <v-card-title>
      Berechtigungen der Benutzergruppe {{ userGroup.displayName }} hinzufügen
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
              v-model="userGroup.permissions"
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
        users: [],
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
              this.userGroup.permissions,
              this.originalUserGroup.permissions
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
            this.getPermissions();
          })
          .finally(() => (this.isLoading = false));
    },
    getPermissions() {
      this.isLoading = true;
      const params = {
        withOutPermissionIds: this.userGroup.permissions.map(
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
          this.userGroup.permissions.findIndex((p) => p.id === permission.id) === -1
      ) {
        this.userGroup.permissions.push(permission);
        this.notSelectedPermissions.splice(
            this.notSelectedPermissions.findIndex((p) => p.id === permission.id),
            1
        );
      }
    },
    removePermission(permission) {
      this.userGroup.permissions.splice(
          this.userGroup.permissions.findIndex((p) => p.id === permission.id),
          1
      );
      this.notSelectedPermissions.push(permission);
    },
    submit() {
      this.isLoading = true;
      const params = {
        permissionIds: this.userGroup.permissions.map((permission) => permission.id),
        userGroupId: this.userGroup.id
      };
      window.axios
          .put(`user-groups/sync-permissions/${this.userGroup.id}`, params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.getUser();
            this.$emit('reload');
          })
          .finally(() => (this.isLoading = false));
    },
    reset() {
      this.userGroup = cloneDeep(this.originalUserGroup);
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
