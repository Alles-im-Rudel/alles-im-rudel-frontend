<template>
  <v-dialog
    v-model="showDialog"
    persistent
    max-width="800px"
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
            <v-icon>fa-edit</v-icon>
          </v-btn>
        </template>
        <span>Benutzergruppe bearbeiten</span>
      </v-tooltip>
    </template>
    <user-group-edit
      v-model="userGroup"
      @reload="reload"
      @close="close"
    />
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import UserGroupEdit from '@/components/userGroups/UserGroupEdit';

export default {
  components: {
    UserGroupEdit
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
      return this.can('user_groups.update') && !this.userGroup.deletedAt;
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
