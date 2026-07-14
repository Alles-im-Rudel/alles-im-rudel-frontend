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
          Wir sind ein Haufen Gamer, die Bock auf die perfekte Mischung aus Tryhard und entspannten
          Feierabend-Runden haben. Bei uns läuft alles ziemlich unkompliziert, ohne Drama oder
          unnötige Regeln – wir sind einfach eine entspannte Gaming-Community.
          </BaseParagraph>
          <h3 class="text-h4 mt-md-4">
            Was bei uns gezockt wird?
          </h3>
          <BaseParagraph class="mt-6 mt-sm-8">
            <ul>
              <li><strong>League of Legends:</strong> Das ist unser E-Sport-Kern. Wir haben ein festes
                Team für die Prime League und spielen an Trainingsabenden aktiv zu fünft in der
                Flex-Queue. Natürlich zocken wir hin und wieder aber auch einfach entspannt ein paar
                Normals / ARAMs, um vom kompetitiven Alltag abzuschalten. Egal ob Tryhard oder relaxed – wenn
                du League zockst, bist du hier richtig!
              </li>
              <li>
                <strong>Minecraft-Server:</strong> Neben League of Legends zocken wir auch gemeinsam auf
                unserem eigenen Minecraft-Server. Der Server läuft dauerhaft – einfach draufgehen, bauen,
                farmen und im Discord quatschen.
              </li>
              <li>
                <strong>Andere Projekte:</strong> Uns wird nicht langweilig! Wenn genug Leute Bock haben,
                werfen wir spontan eigene Server an. Egal ob Survival in SCUM oder Taktik-Runden in ARMA –
                wir zocken das, worauf wir als Gaming-Community gerade Lust haben.
              </li>
            </ul>
          </BaseParagraph>
          <h3 class="text-h4 mt-md-4">
            Passt du zu uns?
          </h3>
          <BaseParagraph class="mt-6 mt-sm-8">
          Wenn du cool bist, keinen Bock auf Toxizität hast und entweder ein festes League-Team oder einfach
          nur korrekte Leute zum Zocken für verschiedene Games suchst, bist du hier richtig. Alter und
          Skill-Level sind erst mal zweitrangig, solange das Zwischenmenschliche passt.
          </BaseParagraph>
          <h3 class="text-h4 mt-md-4">
            Klingt gut?
          </h3>
          <BaseParagraph class="mt-6 mt-sm-8">
          Schau am besten direkt bei uns auf dem <a :href="discordUrl" target="_blank">Discord</a> vorbei,
          stell dich kurz vor und zock eine Runde mit uns!
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
          <div class="branch-leader-container">
            <v-row class="mt-8">
              <v-col cols="12">
                <a
                  href="https://www.primeleague.gg/de/leagues/teams/164679-alles-im-rudel-e-v"
                  target="_blank"
                  class="d-flex align-center"
                >
                  <v-img
                    src="/assets/branches/gaming/lol-icon.png"
                    max-width="64"
                    contain
                    class="mr-2"
                  />
                  <span>Prime League</span>
                </a>
              </v-col>
            </v-row>
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
      leader: leaders.ELVAN_ELMAS,
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
