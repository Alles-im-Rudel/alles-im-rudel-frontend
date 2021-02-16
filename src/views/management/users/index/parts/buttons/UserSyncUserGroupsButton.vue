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
            <v-icon>fa-users</v-icon>
          </v-btn>
        </template>
        <span>Verknüpfen mit Benutzergruppen</span>
      </v-tooltip>
    </template>
    <user-sync-user-groups :user-id="user.id" @reload="reload" @close="close" />
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import UserSyncUserGroups from "@/components/users/UserSyncUserGroups";

export default {
  components: {
    UserSyncUserGroups,
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
      return this.can('user_groups.user.sync') && !this.user.deletedAt;
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
