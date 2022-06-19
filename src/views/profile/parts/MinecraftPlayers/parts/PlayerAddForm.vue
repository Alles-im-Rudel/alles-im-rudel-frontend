<template>
  <div class="mt-3 d-flex align-center">
    <v-text-field
      v-model="name"
      label="Name"
      hide-details
      class="mt-0"
    />
    <v-btn
      class="ml-3"
      color="success"
      icon
      :loading="isLoading"
      :disabled="!canSubmit"
      @click="submit"
    >
      <v-icon>
        fa-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      name: null
    };
  },
  computed: {
    canSubmit() {
      return !!this.name;
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      window.axios.post('/minecraft/players', {
        name: this.name
      })
        .then(()=> {
          this.name = null;
          this.$emit('reload');
        })
        .catch((error) => {
          this.$root.$notifications.open({
            type: 'error',
            message: error.response.data.message,
            duration: 4000
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>