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
    <user-group-sync-permissions :user-group-id="userGroup.id" @reload="reload" @close="close" />
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import UserGroupSyncPermissions from '@/components/userGroups/UserGroupSyncPermissions';

export default {
  components: {
    UserGroupSyncPermissions
  },
  mixins: [Permissions],
  props: {
    userGroup: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDialog: false
    };
  },
  computed: {
    canSeeButton() {
      return this.can('permissions.user_groups.sync') && !this.userGroup.deletedAt;
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
