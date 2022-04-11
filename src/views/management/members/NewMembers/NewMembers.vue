<template>
  <member-table
    v-model="options"
    :is-loading="isLoading"
    :members="members"
    :server-items-length="serverItemsLength"
    @reload="getMembers"
  />
</template>

<script>
import {zipObject} from 'lodash';
import MemberTable from '@/views/management/members/NewMembers/parts/MembersTable';

export default {
  components: {
    MemberTable
  },
  data() {
    return {
      members: [],
      isLoading: false,
      options: {
        page: 1,
        itemsPerPage: 10,
        sortBy: ['lastName'],
        sortDesc: [false]
      },
      serverItemsLength: 0,
      filters: {
        search: null
      }
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
      const sortBy = zipObject(this.options.sortBy, this.options.sortDesc);
      const params = {
        ...(Object.keys(sortBy).length > 0 ? {sortBy} : {}),
        search: this.filters.search,
        perPage: this.options.itemsPerPage,
        page: this.options.page
      };
      window.axios.get('manage-member-ship-applications', {params})
          .then(response => {
            this.members = response.data.data;
            this.serverItemsLength = response.data.meta.total;
          }).finally(() => this.isLoading = false);
    }
  }
};
</script>