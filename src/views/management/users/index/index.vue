<template>
  <div>
    <BaseBackground />
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <BaseCard>
            <v-card-title>
              Benutzerverwaltung
              <v-spacer />
              <v-text-field
                v-model="filters.search"
                append-icon="fa-search"
                label="Suche"
                clearable
                @keydown.enter="getUsers"
                @click:append="getUsers"
                @click:clear="clearSearch"
              />
              <v-spacer />
              <branch-select v-model="filters.branchId" />
              <v-spacer />
              <user-download-button
                :filters="filters"
              />
            </v-card-title>
            <v-card-text>
              <user-table
                v-model="options"
                :is-loading="isLoading"
                :users="users"
                :server-items-length="serverItemsLength"
                @reload="getUsers"
              />
            </v-card-text>
          </BaseCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {zipObject} from 'lodash';
import UserTable from '@/views/management/users/index/parts/UserTable';
import BranchSelect from '@/components/selects/BranchSelect';
import UserDownloadButton from '@/views/management/users/index/parts/buttons/UserDownloadButton';

export default {
  components: {
    UserTable,
    BranchSelect,
    UserDownloadButton
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
        withOnlyTrashed: false,
        branchId: null
      }
    };
  },
  computed: {},
  watch: {
    options: {
      handler() {
        this.getUsers();
      }
    },
    'filters.branchId': {
      handler() {
        this.getUsers();
      }
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    clearSearch() {
      this.filters.search = null;
      this.getUsers();
    },
    getUsers() {
      this.isLoading = true;
      const sortBy = zipObject(this.options.sortBy, this.options.sortDesc);
      const params = {
        ...(Object.keys(sortBy).length > 0 ? {sortBy} : {}),
        search: this.filters.search,
        branchId: this.filters.branchId,
        perPage: this.options.itemsPerPage,
        page: this.options.page,
        withOnlyTrashed: this.filters.withOnlyTrashed
      };
      window.axios.get('users', {params})
          .then(response => {
            this.users = response.data.data;
            this.serverItemsLength = response.data.meta.total;
          }).finally(() => this.isLoading = false);
    }
  }
};
</script>