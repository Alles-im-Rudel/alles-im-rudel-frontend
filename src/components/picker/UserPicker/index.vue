<template>
  <v-dialog v-model="showDialog" fullscreen persistent>
    <template v-slot:activator="{ on }">
      <v-btn block color="primary" v-on="on">
        <v-icon left> fa-search</v-icon>
        {{ label }}
      </v-btn>
    </template>
    <v-card tile>
      <v-card-title class="headline py-2">
        Benutzer Suche
        <v-spacer />
        <v-btn icon small @click="close">
          <v-icon>fa-times</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text class="pa-0">
        <user-search-form v-model="user" :user-ids="userIds" @close="close" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import UserSearchForm from './parts/UserSearchForm';

export default {
  name: 'UserPicker',
  components: {
    UserSearchForm
  },
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({})
    },
    userIds: {
      type: Array,
      required: false,
      default: () => []
    },
    label: {
      type: String,
      required: false,
      default: 'Benutzer Auswählen'
    }
  },
  data() {
    return {
      showDialog: false,
      user: this.value
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.user = value;
      }
    },
    user: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    close() {
      this.showDialog = false;
    }
  }
};
</script>
