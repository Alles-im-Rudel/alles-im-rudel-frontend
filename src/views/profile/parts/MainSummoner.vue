<template>
  <BaseCard>
    <v-card-title class="headline">
      Main Summoner Verwalten
    </v-card-title>
    <v-divider />
    <v-card-text v-if="user.mainSummoner && user.mainSummoner.id">
      <summoner-card
        can-detach-summoner
        :summoner="user.mainSummoner"
        @summoner-detached="$emit('updated')"
      />
    </v-card-text>
    <v-card-text v-else>
      <summoner-picker
        v-model="mainSummoner"
        free-main
      />
    </v-card-text>
    <v-divider />
    <reset-save-action
      :is-loading="isLoading"
      :can-submit="canSubmit"
      :has-changes="hasChanges"
      @submit="submit"
      @clear="clear"
    />
  </BaseCard>
</template>
<script>
import {cloneDeep} from 'lodash';
import ValidationErrors from '@/mixins/ValidationErros';
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';
import SummonerCard from '@/components/summoners/SummonerCard';
import SummonerPicker from '@/components/picker/SummonerPicker';

export default {
  components: {
    ResetSaveAction,
    SummonerCard,
    SummonerPicker
  },
  mixins: [ValidationErrors],
  props: {
    originalUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: cloneDeep(this.originalUser),
      isLoading: false,
      errors: {},
      mainSummoner: {}
    };
  },
  computed: {
    canSubmit() {
      return this.hasChanges;
    },
    hasChanges() {
      return this.originalUser.mainSummoner !== this.user.mainSummoner;
    }
  },
  watch: {
    originalUser: {
      deep: true,
      handler(value) {
        this.user = cloneDeep(value);
      }
    },
    mainSummoner: {
      deep: true,
      handler(value) {
        if (value.id) {
          this.user.mainSummoner = value;
        }
      }
    },
    'user.mainSummoner': {
      deep: true,
      handler(value) {
        if (value === null) {
          this.mainSummoner = {};
        }
      }
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      let params = {
        mainSummonerId: null,
      };
      if (this.user.mainSummoner && this.user.mainSummoner.id) {
        params.mainSummonerId = this.user.mainSummoner.id;
      }
      window.axios
          .put('profile/main-summoner', params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.$emit('updated');
          })
          .finally(() => (this.isLoading = false));
    },
    clear() {
      this.user = cloneDeep(this.originalUser);
      this.errors = {};
    }
  }
};
</script>
