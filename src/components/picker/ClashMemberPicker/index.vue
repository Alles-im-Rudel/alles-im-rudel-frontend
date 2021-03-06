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
        Member Suche
        <v-spacer />
        <v-btn icon small @click="close">
          <v-icon>fa-times</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text class="pa-0">
        <clash-member-search-form v-model="clashMember" :clash-member-ids="clashMemberIds" @close="close" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ClashMemberSearchForm from './parts/ClashMemberSearchForm';

export default {
  name: 'UserPicker',
  components: {
    ClashMemberSearchForm
  },
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({})
    },
    clashMemberIds: {
      type: Array,
      required: false,
      default: () => []
    },
    label: {
      type: String,
      required: false,
      default: 'Member auswählen'
    }
  },
  data() {
    return {
      showDialog: false,
      clashMember: this.value
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.clashMember = value;
      }
    },
    clashMember: {
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
