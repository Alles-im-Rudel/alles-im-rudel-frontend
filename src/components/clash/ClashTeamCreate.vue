<template>
  <v-card>
    <v-card-title>
      Clashteam erstellen
      <v-spacer />
      <v-btn
        icon
        @click="$emit('close')"
      >
        <v-icon>fa-times</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-text-field
        v-model="clashTeam.name"
        label="Teamname"
      />
    </v-card-text>
    <reset-save-action
      :can-submit="canSubmit"
      :is-loading="isLoading"
      @submit="submit"
      @clear="clear"
    />
  </v-card>
</template>
<script>
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';

export default {
  components: {
    ResetSaveAction
  },
  data() {
    return {
      clashTeam: {
        name: null
      },
      isLoading: false
    };
  },
  computed: {
    canSubmit() {
      return !!this.clashTeam.name;
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      const params = {
        name: this.clashTeam.name
      };
      window.axios
          .post('clash', params)
          .then((response => {
            this.$root.$snackbar.open(response.data.message);
            this.clear();
            this.$emit('created');
            this.$emit('close');
          }))
          .finally(() => this.isLoading = false);
    },

    clear() {
      this.clashTeam.name = null;

    }
  }
};
</script>