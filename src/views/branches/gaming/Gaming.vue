<template>
  <div class="white branch-airsoft">
    <BaseBranchHeader
      background="/assets/backgrounds/gaming.jpg"
      title="Gaming"
    />

    <BaseContainer class="my-14 pb-4">
      <v-row>
        <v-col
          class="pr-lg-6 pr-md-4"
          cols="12"
          md="8"
          lg="9"
        >
          <h2 class="text-h3 mt-md-6">
            Moin!
          </h2>
          <BaseParagraph class="mt-6 mt-sm-8">
            Wir sind ein Team aus Gamern, das sich an allen möglichen Spielen versucht, wobei der Spaß immer an
            erster Stelle steht. Dabei sind wir stets auf der Suche nach weiteren Spielern, die sowohl freundlich als
            auch gesellig sind.<br><br>
            Aktuell spielt die Mehrheit von uns vor allem Age of Empires, aber auch Spiele wie Minecraft, League of
            Legends oder Hearts of Iron sind bei uns vertreten.<br><br>
            Selbstverständlich ist aber auch jeder, der einfach nur so in seiner Freizeit ein wenig zocken möchte und
            auf der Suche nach einem freundlichen Team ist, bei uns herzlich willkommen! Um noch mehr über uns zu
            erfahren oder uns persönlich kennenzulernen, tretet gerne einfach unserem <a
              :href="discordUrl"
              target="_blank"
            >Discord-Server</a> bei.
          </BaseParagraph>
        </v-col>

        <v-col
          cols="12"
          md="4"
          lg="3"
        >
          <div class="branch-leader-container">
            <BaseLeaderCard :leader="leader" />
          </div>
        </v-col>
      </v-row>

      {{ /* todo: join branch button */ }}
    </BaseContainer>
  </div>
</template>

<script>
import BaseBranchHeader from '@/components/base/BaseBranchHeader';
import leaders from '@/constants/branchLeaders';
import links from '@/constants/links';

export default {
  name: 'Gaming',
  metaInfo: {
    title: 'Alles im Rudel e.V. | Gaming',
  },
  components: {
    BaseBranchHeader
  },
  data() {
    return {
      leader: leaders.SILAS_BECKMANN,
      discordUrl: links.DISCORD
    };
  }
};
</script>

<style lang="scss">
.branch-airsoft {
  .branch-leader-container {
    max-width: 70vw;
    margin: 0 auto;
  }

  .begadi-banner {
    margin: 0 auto;
    max-width: 650px;

    img {
      width: 100%;
    }
  }
}
</style>