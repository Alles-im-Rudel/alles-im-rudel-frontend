<template>
  <BaseCard flat>
    <v-card-text>
      <v-row
        v-for="clashTeam in clashTeams"
        :key="clashTeam.id"
        justify="center"
      >
        <v-col cols="12">
          <v-card-title class="pb-0 text-h5">
            {{ clashTeam.name }}
          </v-card-title>
        </v-col>
        <div class="container">
          <div
            v-for="clashMember in clashTeam.clashMembers"
            :key="clashMember.id"
            class="item"
          >
            <clash-team-member :clash-member="clashMember" />
          </div>
        </div>
      </v-row>
    </v-card-text>
  </BaseCard>
</template>

<script>
import ClashTeamMember from '@/components/clash/ClashTeamMember';

export default {
  components: {
    ClashTeamMember,
  },
  data() {
    return {
      clashTeams: []
    };
  },
  computed: {},
  created() {
    this.getClashTeams();
  },
  methods: {
    getClashTeams() {
      window.axios.get('clash')
          .then(response => {
            this.clashTeams = response.data.data;
          }).finally(() => this.isLoading = false);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.item {
  max-width: 19%;
  margin: 5px;
}

@media (max-width: 1264px) {
  .container {
    display: flex;
    flex-flow: row wrap;
  }
  .item {
    max-width: 47%;
  }
}

@media (max-width: 960px) {
  .container {
    display: flex;
    flex-flow: row wrap;
  }
  .item {
    max-width: 100%;
  }
}
</style>