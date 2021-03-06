<template>
  <v-dialog v-model="showDialog" fullscreen persistent>
    <template v-slot:activator="{ on }">
      <v-btn block color="primary" v-on="on">
        <v-icon left> fa-search</v-icon>
        {{ label }}
      </v-btn>
    </template>
    <v-card tile>
      <v-card-title class="headline py-2">
        Summoner Suche
        <v-spacer />
        <v-btn icon small @click="close">
          <v-icon>fa-times</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text class="pa-0">
        <summoner-search-form v-model="summoner" :free-main="freeMain" :clash-member-ids="summonerIds" @close="close" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import SummonerSearchForm from './parts/SummonerSearchForm';

export default {
  name: 'UserPicker',
  components: {
    SummonerSearchForm
  },
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({})
    },
    summonerIds: {
      type: Array,
      required: false,
      default: () => []
    },
    label: {
      type: String,
      required: false,
      default: 'Summoner Suche'
    },
    freeMain: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  data() {
    return {
      showDialog: false,
      summoner: this.value
    };
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
    }
  },
  methods: {
    close() {
      this.showDialog = false;
    }
  }
};
</script>
