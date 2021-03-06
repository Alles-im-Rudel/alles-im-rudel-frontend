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
            <v-icon>fa-crown</v-icon>
          </v-btn>
        </template>
        <span>Verknüpfen Main Summoner</span>
      </v-tooltip>
    </template>
    <user-sync-main-summoner :user-id="user.id" @reload="reload" @close="close" />
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import UserSyncMainSummoner from "@/components/users/UserSyncMainSummoner";

export default {
  components: {
    UserSyncMainSummoner
  },
  mixins: [Permissions],
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      showDialog: false
    };
  },
  computed: {
    canSeeButton() {
      return this.can('summoners.main');
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
