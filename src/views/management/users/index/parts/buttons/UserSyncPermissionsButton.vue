<template>
  <v-dialog v-model="showDialog" persistent fullscreen>
    <template v-slot:activator="{ on: dialog }">
      <v-tooltip top>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
              v-if="canSeeButton"
              color="primary"
              icon
              v-on="{ ...dialog, ...tooltip }"
          >
            <v-icon>fa-link</v-icon>
          </v-btn>
        </template>
        <span>Verknüpfen mit Berechtigungen</span>
      </v-tooltip>
    </template>
    <user-sync-permissions :user-id="user.id" @reload="reload" @close="close" />
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import UserSyncPermissions from '@/components/users/UserSyncPermissions';

export default {
  components: {
    UserSyncPermissions
  },
  mixins: [Permissions],
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({
        id: null,
        fullName: null,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        isActive: false
      })
    }
  },
  data() {
    return {
      showDialog: false
    };
  },
  computed: {
    canSeeButton() {
      return this.can('permissions.user.sync') && !this.user.deletedAt;
    }
  },
  methods: {
    reload() {
      this.$emit('reload');
    },
    close() {
      this.showDialog = false;
    }
  }
};
</script>
