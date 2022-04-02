<template>
  <div>
    <BaseBackground />
    <v-container>
      <BaseCard>
        <v-card-title>
          Clash
          <v-spacer />
          <clash-team-create-button @created="getClashTeams" />
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              v-for="clashTeam in clashTeams"
              :key="clashTeam.id"
              cols="12"
              md="6"
            >
              <BaseCard>
                <v-card-title>
                  {{ clashTeam.name }}
                  <v-spacer />
                  <clash-team-delete-button
                    :clash-team="clashTeam"
                    @clash-team-was-deleted="getClashTeams"
                  />
                  <clash-team-edit-button
                    :clash-team="clashTeam"
                    @updated="getClashTeams"
                  />
                </v-card-title>
                <v-card-text>
                  <v-col
                    v-for="clashMember in clashTeam.clashMembers"
                    :key="clashMember.id"
                    cols="12"
                  >
                    <BaseCard>
                      <v-card-text>
                        <strong>{{ clashMember.clashTeamRole.name }}:</strong> {{ clashMember.user.fullName }}
                      </v-card-text>
                    </BaseCard>
                  </v-col>
                </v-card-text>
              </BaseCard>
            </v-col>
          </v-row>
        </v-card-text>
      </BaseCard>
    </v-container>
  </div>
</template>

<script>
import ClashTeamCreateButton from '@/components/clash/ClashTeamCreateButton';
import ClashTeamEditButton from '@/components/clash/ClashTeamEditButton';
import ClashTeamDeleteButton from '@/components/clash/ClashTeamDeleteButton';

export default {
  name: 'Clash',
  components: {
    ClashTeamCreateButton,
    ClashTeamEditButton,
    ClashTeamDeleteButton
  },
  data() {
    return {
      clashTeams: []
    };
  },
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