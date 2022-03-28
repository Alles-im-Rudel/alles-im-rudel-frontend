<template>
  <div class="white branch-airsoft">
    <BaseBranchHeader
      background="/assets/backgrounds/esports.jpg"
      title="E-Sports"
    />

    <BaseContainer class="mt-14 pb-4">
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
            Wir sind ein E-Sports-Team, das sich an allen möglichen Spielen versucht und sind dabei stets auf der Suche nach
            weiteren Spielern, die sowohl freundlich als auch teamplayfähig sind. Zwar steht bei uns der Spaß im
            Vordergrund, aber je nach Spiel nehmen wir auch kompetitiv an kleineren oder auch mal größeren Turnieren teil.
            Aktuell spielt die Mehrheit von uns vor allem League of Legends, aber auch Spiele wie Minecraft oder Hearts of
            Iron sind bei uns vertreten.<br><br>
            Selbstverständlich ist aber auch jeder, der einfach nur so in seiner Freizeit ein wenig zocken möchte und auf
            der Suche nach einem freundlichen Team ist, bei uns herzlich willkommen! Um noch mehr über uns zu erfahren oder
            uns persönlich kennenzulernen, tretet gerne einfach unserem <a
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

    <BaseSectionTitle class="mt-12">
      League of Legends
    </BaseSectionTitle>

    <BaseContainer class="mb-14">
      <BaseParagraph class="mt-14 mb-6">
        Im Hinblick auf League of Legends sind wir häufig bei den Clash-Turnieren vertreten. Dennoch erweitern
        wir gerade unseren Bereich rund um League of Legends, da wir mehrere Teams haben möchten, die dann regelmäßig
        zusammenspielen, trainieren, und letztlich erfolgreich an Turnieren teilnehmen.
      </BaseParagraph>
      <clash />
    </BaseContainer>
  </div>
</template>

<script>
import BaseBranchHeader from '@/components/base/BaseBranchHeader';
import leaders from '@/constants/branchLeaders';
import Clash from '@/components/clash/Clash';
import links from '@/constants/links';

export default {
  name: 'ESports',
  metaInfo: {
    title: 'Alles im Rudel | E-Sports',
  },
  components: {
    Clash,
    BaseBranchHeader
  },
  data() {
    return {
      leader: leaders.CHRISTOPH_SCHOTTELIUS,
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