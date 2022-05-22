<template>
  <v-card>
    <v-card-text>
      <v-text-field
        v-model="search"
        append-icon="fa-search"
        clearable
        hide-details
        label="Suche"
        :loading="isLoading"
        :disabled="isLoading"
        @keydown.enter="startNewSearch"
        @click:append="startNewSearch"
      />
    </v-card-text>
    <v-card-text
      v-if="lastPage > 1"
      class="text-xs-center"
    >
      <v-pagination
        v-model="pagination.page"
        :length="lastPage"
        :total-visible="11"
      />
    </v-card-text>
    <v-card-text v-if="showResults">
      <v-row>
        <v-col
          v-for="item in users"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="pa-1"
        >
          <v-card height="100%">
            <v-card-title class="py-2">
              {{ item.fullName }}
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  E-Mail:
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  {{ item.email }}
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-spacer />
              <v-btn
                small
                color="primary"
                @click="userSelected(item)"
              >
                Auswählen
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text
      v-if="showNoData"
      class="headline text-xs-center"
    >
      Keine User gefunden!
    </v-card-text>
    <v-card-text
      v-if="showStartNewSearch"
      class="headline text-xs-center"
    >
      Bitte geben Sie einen Suchbegriff ein und Starten Sie Ihre Suche!
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({})
    },
    userIds: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      isLoading: false,
      search: null,
      pagination: {
        perPage: 16,
        page: 1
      },
      totalItems: null,
      lastPage: null,
      user: this.value,
      users: []
    };
  },
  computed: {
    showResults() {
      return this.users.length > 0;
    },
    showNoData() {
      return (
          !this.isLoading &&
          this.search &&
          this.users.length === 0 &&
          this.totalItems !== null
      );
    },
    showStartNewSearch() {
      return (
          !this.isLoading &&
          this.users.length === 0 &&
          ((this.search && this.totalItems === null) || !this.search)
      );
    }
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.user = value;
      }
    },
    user: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      }
    },
    pagination: {
      deep: true,
      handler() {
        this.startSearch();
      }
    },
    userIds: {
      deep: true,
      handler() {
        this.startSearch();
      }
    }
  },
  methods: {
    startNewSearch() {
      this.pagination.page = 1;
      this.totalItems = 0;
      this.lastPage = 0;
      this.startSearch();
    },
    startSearch() {
      if (this.isLoading) {
        return;
      }
      this.users = [];
      this.isLoading = true;
      const params = {
        search: this.search,
        perPage: this.pagination.perPage,
        page: this.pagination.page,
        userIds: this.userIds.length > 0 ? this.userIds : null
      };
      window.axios
          .get('/users/picker', { params })
          .then(({ data }) => {
            this.users = data.data;
            this.totalItems = data.meta.total;
            this.lastPage = data.meta.last_page;
          })
          .finally(() => {
            this.isLoading = false;
          });
    },
    userSelected(user) {
      this.user = user;
      this.$emit('close');
    }
  }
};
</script>
