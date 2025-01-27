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
          Auch unter der ziemlich jungen Gamingsparte finden sich ein paar coole Leute, 
          die sich aktuell hauptsächlich in den Welten von Rocket League und League of Legends 
          austobten, jedoch würden nicht vor anderen Games zurückschrecken. 
          Bei uns steht der Spaß immer an erster Stelle, egal ob wir entspannt zocken oder uns 
          in der kompetitiven Szene beweisen wollen. Wir suchen immer nach neuen Mitspielern, 
          die nicht nur freundlich, sondern auch super gesellig sind. 
          
          Natürlich sind aber auch alle herzlich willkommen, die einfach nur in ihrer Freizeit 
          ein bisschen zocken wollen und auf der Suche nach coolen Mates sind. Wenn ihr mehr 
          über uns erfahren oder uns persönlich kennenlernen wollt, dann schaut doch einfach 
          mal auf unserem Discord-Server vorbei. Lasst uns gemeinsam die Gaming-Welt rocken!
          
          Was erwartet dich in der Gamingsparte?

          Die Gamingsparte ist noch ziemlich jung und im Aufbau. Daher sind wir aktiv auf 
          der Suche nach Leuten, die Interesse haben im Rahmen eines E-Sport Teams für Alles 
          im Rudel kompetitiv solo oder im Team je nach Game zu beweisen. Ebenfalls finden 
          gelegentlich diverse Events intern statt wie z.B. die  "Game Nights" für einen 
          entspannten Abend gemeinsam auf <a
              :href="discordUrl"
              target="_blank"
            >Discord</a> oder mehr
            kompetitive Events wie den "Alles im Rudel Beta Cup", in dieser sich die Vereinsmitglieder 
            untereinander in League of Legends duellierten. 
            
            Auch steht ein Projekt im Bereich Pen & Paper in Planung.
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