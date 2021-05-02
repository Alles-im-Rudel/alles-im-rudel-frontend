<template>
  <v-container>
    <user-group-table
        v-model="options"
        :is-loading="isLoading"
        :user-groups="userGroups"
        :server-items-length="serverItemsLength"
        @reload="getUserGroups"
    />
  </v-container>
</template>

<script>
import {zipObject} from 'lodash';
import UserGroupTable from "@/views/management/permissions/parts/UserGroups/parts/UserGroupTable";

export default {
  components: {
    UserGroupTable
  },
  data() {
    return {
      userGroups: [],
      isLoading: false,
      options: {
        page: 1,
        itemsPerPage: 10,
        sortBy: ['levelId'],
        sortDesc: [true]
      },
      serverItemsLength: 0,
      filters: {
        search: null,
        withOnlyTrashed: false
      }
    }
  },
  computed: {},
  created() {
    this.getUserGroups();
  },
  watch: {
    options: {
      handler() {
        this.getUserGroups()
      }
    }
  },
  methods: {
    getUserGroups() {
      this.isLoading = true;
      const sortBy = zipObject(this.options.sortBy, this.options.sortDesc);
      const params = {
        ...(Object.keys(sortBy).length > 0 ? {sortBy} : {}),
        search: this.filters.search,
        perPage: this.options.itemsPerPage,
        page: this.options.page,
        withOnlyTrashed: this.filters.withOnlyTrashed
      };
      window.axios.get('user-groups', {params})
          .then(response => {
            this.userGroups = response.data.data
            this.serverItemsLength = response.data.meta.total;
          }).finally(() => this.isLoading = false)
    }
  }
}
</script>