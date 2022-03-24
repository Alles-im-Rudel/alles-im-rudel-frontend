<template>
  <v-dialog v-model="showDialog" persistent>
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
        <span>Anmeldung bearbeiten</span>
      </v-tooltip>
    </template>
    <AcceptMember :user-id="member.id" @reload="reload" @close="close" />
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import AcceptMember from "@/views/management/members/parts/AcceptMember";

export default {
  components: {
    AcceptMember,
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
