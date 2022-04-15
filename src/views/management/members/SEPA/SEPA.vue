<template>
  <v-row class="justify-center">
    <v-col
      v-if="sepaChanges"
      cols="12"
      md="8"
    >
      <sepa-members-table
        :sepa-changes="sepaChanges"
        :is-loading="isLoading"
        @reload="getSepaData"
      />
    </v-col>
  </v-row>
</template>

<script>

import SepaMembersTable from '@/views/management/members/SEPA/parts/SepaMembersTable';

export default {
  components: {
   SepaMembersTable
  },
  data() {
    return {
      sepaChanges: [],
      isLoading: false,
    };
  },
  computed: {},
  watch: {
    options: {
      handler() {
        this.getSepaData();
      }
    }
  },
  created() {
    this.getSepaData();
  },
  methods: {
    getSepaData() {
      this.isLoading = true;
      window.axios.get('sepa-data')
          .then(response => {
            this.sepaChanges = response.data.sepaChanges;
          }).finally(() => this.isLoading = false);
    }
  }
};
</script>