<template>
  <v-dialog
    v-model="showDialog"
    persistent
    fullscreen
  >
    <template v-slot:activator="{ on: dialog }">
      <v-tooltip top>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            v-if="canSeeButton"
            color="primary"
            icon
            v-on="{ ...dialog, ...tooltip }"
          >
            <v-icon>fa-user</v-icon>
          </v-btn>
        </template>
        <span>Verknüpfen mit Benutzern</span>
      </v-tooltip>
    </template>
    <user-group-sync-users
      :user-group-id="userGroup.id"
      @reload="reload"
      @close="close"
    />
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import UserGroupSyncUsers from '@/components/userGroups/UserGroupSyncUsers';

export default {
  components: {
    UserGroupSyncUsers,
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
      return this.can('user_groups.user.sync') && !this.userGroup.deletedAt;
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
