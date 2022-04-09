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
        <span>Sparten {{ branch.name }} Anmeldung bearbeiten</span>
      </v-tooltip>
    </template>
    <AcceptNewBranchMember
      :member="member"
      :branch="branch"
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
    member: {
      type: Object,
      required: true,
      default: () => ({
        id: null,
        fullName: null,
        firstName: null,
        lastName: null,
        email: null,
        isActive: false
      })
    },
    branch: {
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
      return this.can('members.mamage');
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
