<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <base-card>
          <v-card-title>Benutzerverwaltung</v-card-title>
          <v-card-text>
            <user-table
                v-model="options"
                :is-loading="isLoading"
                :users="users"
                :server-items-length="serverItemsLength"
                @reload="getUsers"
            />
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {zipObject} from 'lodash';
import UserTable from "@/views/management/users/index/parts/UserTable";

export default {
  components: {
    UserTable
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
    this.getUsers();
  },
  watch: {
    options: {
      handler() {
        this.getUsers()
      }
    }
  },
  methods: {
    getUsers() {
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
      window.axios.get('users', {params})
          .then(response => {
            this.users = response.data.data
            this.serverItemsLength = response.data.meta.total;
          }).finally(() => this.isLoading = false)
    }
  }
}
</script>