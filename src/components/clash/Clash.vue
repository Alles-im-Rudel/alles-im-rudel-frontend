<template>
  <BaseCard flat>
    <div
      v-for="clashTeam in clashTeams"
      :key="clashTeam.id"
      class="clash-wrapper"
    >
      <v-card-title class="px-0 text-h5">
        {{ clashTeam.name }}
      </v-card-title>

      <div class="clash-container">
        <div
          v-for="clashMember in clashTeam.clashMembers"
          :key="clashMember.id"
          class="item"
        >
          <clash-team-member :clash-member="clashMember" />
        </div>
      </div>
    </div>
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
        .then(({data}) => this.clashTeams = data.data)
        .finally(() => this.isLoading = false);
    }
  }
};
</script>

<style lang="scss" scoped>
.clash-wrapper {
  margin-top: 24px;

  &:nth-child(1) {
    margin-top: 0;
  }

  .clash-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .item {
    max-width: 19%;
    margin: 5px;
  }

  .item:nth-child(1) {
    margin-left: 0;
  }

  .item:nth-last-child(1) {
    margin-right: 0;
  }

  @media (max-width: 1264px) {
    .clash-container {
      justify-content: center;
    }

    .item {
      max-width: 32%;
      margin: 5px !important;
    }
  }

  @media (max-width: 960px) {
    .item {
      max-width: 47%;
    }
  }

  @media (max-width: 600px) {
    .item {
      max-width: 100%;
    }
  }
}
</style>