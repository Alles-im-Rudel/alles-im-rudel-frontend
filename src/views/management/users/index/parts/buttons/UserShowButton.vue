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
            <v-icon>fa-search</v-icon>
          </v-btn>
        </template>
        <span>{{ user.fullName }} ansehen</span>
      </v-tooltip>
    </template>
    <user-detail
      :user-id="user.id"
      @close="close"
      @reload="reload"
    />
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import UserDetail from '@/components/users/UserDetail/UserDetail';

export default {
  components: {
    UserDetail
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
      return this.can('users.show');
    }
  },
  methods: {
    close() {
      this.showDialog = false;
    },
    reload() {
      this.$emit('reload');
    }
  }
};
</script>
