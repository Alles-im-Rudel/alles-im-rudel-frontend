<template>
  <base-card flat>
    <v-card-text>
      <v-row
          justify="center"
          v-for="clashTeam in clashTeams"
          :key="clashTeam.id"
      >
        <v-col cols="12" md="11" offset-md="1">
          <v-card-title class="pb-0 text-h5">{{ clashTeam.name }}</v-card-title>
        </v-col>
        <v-col cols="12" md="2"
               v-for="clashMember in clashTeam.clashMembers"
               :key="clashMember.id"
        >
          <clash-team-member :clash-member="clashMember" />
        </v-col>
      </v-row>
    </v-card-text>
  </base-card>
</template>

<script>
import ClashTeamMember from "@/components/clash/ClashTeamMember";

export default {
  components: {
    ClashTeamMember,
  },
  data() {
    return {
      clashTeams: []
    }
  },
  computed: {},
  created() {
    this.getClashTeams();
  },
  methods: {
    getClashTeams() {
      window.axios.get('clash')
          .then(response => {
            this.clashTeams = response.data.data
          }).finally(() => this.isLoading = false)
    }
  }
}
</script>