<template>
  <v-card
    v-if="user.id"
    tile
  >
    <v-card-title>
      Main Summoner von dem Benutzer {{ user.fullName }}
      <v-spacer />
      <v-btn
        icon
        @click="close"
      >
        <v-icon>fa-times</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <summoner-card
            v-if="user.mainSummoner"
            :summoner="user.mainSummoner"
            can-detach-summoner
            @summoner-detached="getUser"
            @summoner-reloaded="getUser"
          />
          <v-card v-else>
            <v-card-title>
              Main Summoner hinzufügen
              <v-spacer />
              <summoner-picker
                v-model="mainSummoner"
                free-main
              />
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-card
    v-else
    tile
  >
    <v-card-text>
      <v-skeleton-loader
        class="mx-auto"
        type="card"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import SummonerCard from '@/components/summoners/SummonerCard';
import SummonerPicker from '@/components/picker/SummonerPicker';
import {cloneDeep} from 'lodash';

export default {
  components: {
    SummonerCard,
    SummonerPicker
  },
  mixins: [Permissions],
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      user: {
        id: null,
        fullName: null,
        firstName: null,
        lastName: null,
        email: null,
        isActive: false,
      },
      mainSummoner: {
        name: null
      },
      isLoading: false
    };
  },
  computed: {
    canSubmit() {
      return true;
    }
  },
  watch: {
    mainSummoner: {
      deep: true,
      handler(value) {
        if (value.id) {
          this.submit();
        }
      }
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.isLoading = true;
      const params = {
        userId: this.userId
      };
      window.axios
          .get(`users/${this.userId}`, {params})
          .then((response) => {
            this.user = cloneDeep(response.data.data);
          })
          .finally(() => (this.isLoading = false));
    },
    submit() {
      this.isLoading = true;
      const params = {
        mainSummonerId: this.mainSummoner.id,
        userId: this.userId
      };
      window.axios
          .put(`summoners/attach-main-user/${this.mainSummoner.id}`, params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.getUser();
            this.$emit('reload');
          })
          .finally(() => (this.isLoading = false));
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>
