<template>
  <new-branch-members-table
    v-model="options"
    :is-loading="isLoading"
    :users="users"
    :server-items-length="serverItemsLength"
    @reload="getNewBranchMembers"
  />
</template>

<script>
import {zipObject} from 'lodash';
import NewBranchMembersTable from '@/views/management/members/NewBranchMembers/parts/NewBranchMembersTable';

export default {
  components: {
    NewBranchMembersTable
  },
  data() {
    return {
      users: [],
      isLoading: false,
      options: {
        page: 1,
        itemsPerPage: 10,
        sortBy: ['firstName'],
        sortDesc: [false]
      },
      serverItemsLength: 0,
      filters: {
        search: null,
      }
    };
  },
  computed: {},
  watch: {
    options: {
      handler() {
        this.getNewBranchMembers();
      }
    }
  },
  created() {
    this.getNewBranchMembers();
  },
  methods: {
    getNewBranchMembers() {
      this.isLoading = true;
      const sortBy = zipObject(this.options.sortBy, this.options.sortDesc);
      const params = {
        ...(Object.keys(sortBy).length > 0 ? {sortBy} : {}),
        search: this.filters.search,
        perPage: this.options.itemsPerPage,
        page: this.options.page
      };
      window.axios.get('manage-branch-applications', {params})
          .then(response => {
            this.users = response.data.data;
            this.serverItemsLength = response.data.meta.total;
          }).finally(() => this.isLoading = false);
    }
  }
};
</script>