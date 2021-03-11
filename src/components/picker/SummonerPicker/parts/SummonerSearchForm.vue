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
    <v-card-text v-if="showResults">
      <v-row>
        <v-col
            cols="12"
            sm="6"
            md="4"
        >
          <v-card height="100%">
            <v-card-title class="py-2">
              {{ newSummoner.name }}
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-row>
                <v-col cols="12" md="2"> Level: </v-col>
                <v-col cols="12" md="10">
                  {{ newSummoner.summonerLevel }}
                </v-col>
                <v-col cols="12">
                  <v-list>
                    <v-list-group
                        v-for="leagueEntry in newSummoner.leagueEntries"
                        :key="leagueEntry.id"
                        no-action
                    >
                      <template v-slot:activator>
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ leagueEntry.queueType.displayName }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </template>
                      <base-card flat>
                        <v-card-title>
                          {{ leagueEntry.tier }} {{ leagueEntry.rank }} {{ leagueEntry.leaguePoints }}
                        </v-card-title>
                      </base-card>
                    </v-list-group>
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-spacer />
              <v-btn small color="primary" @click="summonerSelected">
                Auswählen
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text v-if="showNoData" class="headline text-xs-center">
      Keine Summoner gefunden!
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
    },
    freeMain: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  data() {
    return {
      isLoading: false,
      search: null,
      summoner: this.value,
      newSummoner: {
        id: null,
      }
    };
  },
  computed: {
    showResults() {
      return !!this.newSummoner.id;
    },
    showNoData() {
      return (
          !this.isLoading &&
          this.search &&
          !this.newSummoner.id
      );
    },
    showStartNewSearch() {
      return (
          !this.isLoading &&
          !this.newSummoner.id &&
          !this.search
      );
    }
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.summoner = value;
      }
    },
    summoner: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      }
    },
  },
  methods: {
    startNewSearch() {
      this.startSearch();
    },
    startSearch() {
      if (this.isLoading && !this.search) {
        return;
      }
      this.summoner = {};
      this.isLoading = true;
      const params = {
        search: this.search,
        freeMain: this.freeMain
      };
      window.axios
          .get('/summoners/picker', { params })
          .then(({ data }) => {
            this.newSummoner = data.data;
          })
          .catch(error => {
            this.$root.$snackbar.open(error.response.data.message, 'error');
          })
          .finally(() => {
            this.isLoading = false;
          });
    },
    summonerSelected() {
      this.summoner = this.newSummoner;
      this.$emit('close');
    }
  }
};
</script>
