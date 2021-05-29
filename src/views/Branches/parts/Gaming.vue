<template>
  <v-card>
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="6" lg="3">
          <user-card :user="brachLeader" />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text class="text-h5">
      <h2 class="text-h2 mb-8">Willkommen in dem Bereich E-Sports von <br>"Alles im Rudel"</h2>
      <p class="text-justify">
        Hier möchten wir uns als E-Sports-Team an allen möglichen Spielen versuchen, und sind dabei stets auf der Suche
        nach weiteren Spielern, denen Teamplay und Freundlichkeit sehr wichtig sind. Bei uns steht der Spaß primär im
        Vordergrund, aber je nachdem, um welches Spiel es sich handelt, ist es ebenfalls ein Ziel von uns, kompetitiv an
        kleineren oder auch mal größeren Turnieren teilzunehmen. Die Mehrheit von uns spielt momentan vor allem League
        of
        Legends, und bei den Clash-Turnieren sind wir regelmäßig vertreten. Im Hinblick auf League of Legends möchten
        wir
        gerade als kurzfristiges Ziel versuchen, ein paar Teams zu bilden, die dann regelmäßig zusammenspielen und
        trainieren können, und letztlich an Scrims und Clash-Turnieren teilnehmen. <br><br>
        Natürlich ist aber auch jeder, der einfach nur so in seiner Freizeit ein wenig zocken möchte und auf der Suche
        nach einem freundlichen Team ist, bei uns herzlich willkommen!<br><br>
        Um noch mehr über uns zu erfahren oder uns persönlich kennenzulernen, könnt ihr <a href="https://discord.com/invite/CwjhPq6">hier</a> unserem Discord-Server
        beitreten.
      </p>
    </v-card-text>
  </v-card>
</template>
<script>
import UserCard from "@/components/users/UserCard";
import dayjs from "dayjs";

export default {
  components: {
    UserCard
  },
  data() {
    return {
      brachLeader: {
        fullName: 'Christoph Schottelius',
        image: '/assets/leading/branches/e-sports.jpg',
        text: dayjs().diff('2001-01-17', 'years') + " Jahre alt\nSpartenleiter E-Sports",
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
