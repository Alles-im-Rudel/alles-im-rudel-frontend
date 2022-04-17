<template>
  <v-dialog
    v-model="showDialog"
    persistent
    max-width="1900px"
  >
    <template #activator="{ on }">
      <v-btn
        color="primary"
        :disabled="canSeeButton"
        block
        v-on="on"
      >
        Member hinzufügen
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Member hinzufügen
        <v-spacer />
        <v-btn
          icon
          @click="showDialog = false"
        >
          <v-icon>fa-times</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            md="3"
          >
            <v-select
              v-model="selectedRole"
              :items="selectable"
              label="Rolle"
            />
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="selectedMember.fullName"
              label="Member"
              readonly
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <clash-member-picker
              v-model="selectedMember"
              :clash-member-ids="memberIds"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider />
      <reset-save-action
        :can-submit="canSubmit"
        @submit="submit"
        @clear="clear"
      />
    </v-card>
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';
import ClashMemberPicker from '@/components/picker/ClashMemberPicker';

export default {
  components: {
    ResetSaveAction,
    ClashMemberPicker
  },
  mixins: [Permissions],
  props: {
    value: {
      type: Array,
      required: true
    },
    clashTeam: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      showDialog: false,
      newClashMembers: this.value,
      selectedRole: null,
      selectedMember: {},
      roles: [
        'Toplane',
        'Jungle',
        'Midlane',
        'Botlane',
        'Support'
      ]
    };
  },
  computed: {
    canSeeButton() {
      return !this.selectable.length >= 1;
    },
    selectable() {
      return this.roles.filter(role => {
        return !this.clashTeam.clashMembers.some(clashMember => clashMember.clashTeamRole.name === role) && !this.newClashMembers.some(clashMember => clashMember.clashTeamRole.name === role);
      });
    },
    memberIds() {
      return this.clashTeam.clashMembers.map(clashMember => clashMember.user.id).concat(this.newClashMembers.map(clashMember => clashMember.user.id));
    },
    canSubmit() {
      return !!this.selectedRole && !!this.selectedMember.id;
    }
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.newClashMembers = value;
      }
    },
    newClashMembers: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      },
    }
  },
  methods: {
    submit() {
      this.newClashMembers.push({
        user: this.selectedMember,
        clashTeamRole: {
          name: this.selectedRole
        }
      });
      this.clear();
      this.showDialog = false;
    },
    clear() {
      this.selectedRole = null;
      this.selectedMember = {};
    }
  }
};
</script>
