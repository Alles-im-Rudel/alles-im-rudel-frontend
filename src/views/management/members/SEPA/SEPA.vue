<template>
  <v-row class="justify-center">
    <v-col
      v-if="members"
      cols="12"
      md="6"
    >
      <sepa-members-table
        :members="members"
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
      members: [],
      isLoading: false,
    };
  },
  computed: {},
  watch: {
    options: {
      handler() {
        this.getMembers();
      }
    }
  },
  created() {
    this.getMembers();
  },
  methods: {
    getMembers() {
      this.isLoading = true;
      window.axios.get('sepa-members')
          .then(response => {
            this.members = response.data.members;
          }).finally(() => this.isLoading = false);
    }
  }
};
</script>