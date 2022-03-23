<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <base-card>
          <v-card-title>
            Neue Anmeldungen
          </v-card-title>
          <v-card-text>
            <member-table
                v-model="options"
                :is-loading="isLoading"
                :users="users"
                :server-items-length="serverItemsLength"
                @reload="getMembers"
            />
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {zipObject} from 'lodash';
import MemberTable from "@/views/management/users/index/parts/UserTable";

export default {
  components: {
    MemberTable
  },
  data() {
    return {
      users: [],
      isLoading: false,
      options: {
        page: 1,
        itemsPerPage: 10,
        sortBy: ['username'],
        sortDesc: [false]
      },
      serverItemsLength: 0,
      filters: {
        search: null,
        withOnlyTrashed: false,
        userGroups: []
      }
    }
  },
  computed: {},
  created() {
    this.getMembers();
  },
  watch: {
    options: {
      handler() {
        this.getMembers()
      }
    }
  },
  methods: {
    getMembers() {
      this.isLoading = true;
      const sortBy = zipObject(this.options.sortBy, this.options.sortDesc);
      const params = {
        ...(Object.keys(sortBy).length > 0 ? {sortBy} : {}),
        search: this.filters.search,
        userGroupIds: this.filters.userGroups.map((userGroup) => userGroup.id),
        perPage: this.options.itemsPerPage,
        page: this.options.page,
        withOnlyTrashed: this.filters.withOnlyTrashed
      };
      window.axios.get('members', {params})
          .then(response => {
            this.users = response.data.data
            this.serverItemsLength = response.data.meta.total;
          }).finally(() => this.isLoading = false)
    }
  }
}
</script>