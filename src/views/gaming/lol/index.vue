<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <base-card>
          <v-card-title>Alles Im Rudel im League of Legends Wahn</v-card-title>
          <v-card-text class="pa-0 ma-0">
            <v-tabs
                v-model="activeTab"
                centered
            >
              <v-tab href="#clash">Clash Teams</v-tab>
              <v-tab href="#summoner-search">Summoner Suche</v-tab>
            </v-tabs>
            <v-divider />
            <v-tabs-items style="background-color:rgba(255, 255, 255, 0)" v-model="activeTab">
              <v-tab-item value="clash">
                <clash />
              </v-tab-item>
              <v-tab-item value="summoner-search">
                <summoner-search />
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Clash from '@/views/gaming/lol/parts/Clash'
import SummonerSearch from '@/views/gaming/lol/parts/SummonerSearch'

export default {
  name: "Gaming-Lol",
  components: {
    Clash,
    SummonerSearch
  },
  data() {
    return {
      activeTab: this.$route.query.activeTab || null
    }
  },
  computed: {},
  methods: {},
  watch: {
    activeTab(activeTab) {
      if (activeTab) {
        this.$router.replace({
          name: 'gaming-lol',
          query: {activeTab}
        });
      }
    }
  }
}
</script>