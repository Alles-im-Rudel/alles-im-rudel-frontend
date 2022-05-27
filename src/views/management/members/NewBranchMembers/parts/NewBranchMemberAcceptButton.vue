<template>
  <v-dialog
    v-model="showDialog"
    persistent
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
            <v-icon>fa-check</v-icon>
          </v-btn>
        </template>
        <span>Sparten {{ branchUserMemberShip.branch.name }} Anmeldung bearbeiten</span>
      </v-tooltip>
    </template>
    <AcceptNewBranchMember
      :user="user"
      :branch-user-member-ship="branchUserMemberShip"
      @reload="reload"
      @close="close"
    />
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import AcceptNewBranchMember from '@/views/management/members/NewBranchMembers/parts/AcceptNewBranchMember';

export default {
  components: {
    AcceptNewBranchMember,
  },
  mixins: [Permissions],
  props: {
    user: {
      type: Object,
      required: true
    },
    branchUserMemberShip: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data() {
    return {
      showDialog: false
    };
  },
  computed: {
    canSeeButton() {
      return this.can('members.manage');
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
