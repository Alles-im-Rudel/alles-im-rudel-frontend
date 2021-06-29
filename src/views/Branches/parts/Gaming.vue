<template>
  <v-card>
    <v-card-text class="pt-4">
      <h2 class="text-h3 text-sm-h2 py-8">Willkommen in der Sparte E-Sports!</h2>
    </v-card-text>

    <v-card-text class="mt-2">
      <v-row justify="center">
        <v-col cols="12" md="6" lg="3">
          <user-card :user="brachLeader"/>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-title class="mt-4">
      <h3 class="text-h3">
        Über uns
      </h3>
    </v-card-title>
    <v-card-text class="text-h5 mt-2 pb-6">
      <p class="text-justify">
        Wir sind ein E-Sports-Team, das sich an allen möglichen Spielen versucht und sind dabei stets auf der Suche nach
        weiteren Spielern, die sowohl freundlich als auch teamplayfähig sind. Zwar steht bei uns der Spaß im
        Vordergrund, aber je nach Spiel nehmen wir auch kompetitiv an kleineren oder auch mal größeren Turnieren teil.
        Aktuell spielt die Mehrheit von uns vor allem League of Legends, aber auch Spiele wie Minecraft oder Hearts of
        Iron sind bei uns vertreten.<br><br>
        Im Hinblick auf League of Legends sind wir bereits häufig bei den Clash-Turnieren vertreten. Dennoch erweitern
        wir gerade unseren Bereich rund um League of Legends, da wir mehrere Teams haben möchten, die dann regelmäßig
        zusammenspielen, trainieren, und letztlich erfolgreich an Turnieren teilnehmen.<br><br>
        Selbstverständlich ist aber auch jeder, der einfach nur so in seiner Freizeit ein wenig zocken möchte und auf
        der Suche nach einem freundlichen Team ist, bei uns herzlich willkommen! Um noch mehr über uns zu erfahren oder
        uns persönlich kennenzulernen, tretet gerne einfach unserem Discord-Server bei.
      </p>
    </v-card-text>
    <v-card-title class="mt-4" v-if="false">
      <h3 class="text-h3">
        Unsere Teams
      </h3>
    </v-card-title>
    <clash class="pb-8" v-if="false"/>
  </v-card>
</template>
<script>
import UserCard from "@/components/users/UserCard";
import dayjs from "dayjs";
import Clash from "../../gaming/lol/parts/Clash";

export default {
  components: {
    Clash,
    UserCard
  },
  data() {
    return {
      brachLeader: {
        fullName: 'Christoph Schottelius',
        image: '/assets/leading/branches/e-sports.jpg',
        text: dayjs().diff('2002-01-17', 'years') + " Jahre alt\nSpartenleiter E-Sports",
        socials: {
          instagram: 'cchhristoph',
          snapchat: 'cchristoph4',
          linkedin: null
        }
      },
    };
  }
  //
};
</script>
