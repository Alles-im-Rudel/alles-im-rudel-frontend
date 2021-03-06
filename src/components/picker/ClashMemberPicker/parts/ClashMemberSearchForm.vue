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
    <v-card-text v-if="lastPage > 1" class="text-xs-center">
      <v-pagination
          v-model="pagination.page"
          :length="lastPage"
          :total-visible="11"
      />
    </v-card-text>
    <v-card-text v-if="showResults">
      <v-row>
        <v-col
            v-for="item in clashMembers"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="pa-1"
        >
          <v-card height="100%">
            <v-card-title class="py-2">
              {{ item.username }}
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-row>
                <v-col cols="12" md="2"> Email: </v-col>
                <v-col cols="12" md="10">
                  {{ item.email }}
                </v-col>
                <v-col cols="12" md="2"> Name: </v-col>
                <v-col cols="12" md="10">
                  {{ item.fullName }}
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-spacer />
              <v-btn small color="primary" @click="clashMembersSelected(item)">
                Auswählen
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text v-if="showNoData" class="headline text-xs-center">
      Keine Member gefunden!
    </v-card-text>
    <v-card-text v-if="showStartNewSearch" class="headline text-xs-center">
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
    clashMemberIds: {
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
      clashMember: this.value,
      clashMembers: []
    };
  },
  computed: {
    showResults() {
      return this.clashMembers.length > 0;
    },
    showNoData() {
      return (
          !this.isLoading &&
          this.search &&
          this.clashMembers.length === 0 &&
          this.totalItems !== null
      );
    },
    showStartNewSearch() {
      return (
          !this.isLoading &&
          this.clashMembers.length === 0 &&
          ((this.search && this.totalItems === null) || !this.search)
      );
    }
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.clashMember = value;
      }
    },
    clashMember: {
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
    clashMemberIds: {
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
      this.clashMembers = [];
      this.isLoading = true;
      const params = {
        search: this.search,
        perPage: this.pagination.perPage,
        page: this.pagination.page,
        clashMemberIds: this.clashMemberIds.length > 0 ? this.clashMemberIds : null
      };
      window.axios
          .get('/clash/member-picker', { params })
          .then(({ data }) => {
            this.clashMembers = data.data;
            this.totalItems = data.meta.total;
            this.lastPage = data.meta.last_page;
          })
          .finally(() => {
            this.isLoading = false;
          });
    },
    clashMembersSelected(clashMember) {
      this.clashMember = clashMember;
      this.$emit('close');
    }
  }
};
</script>
