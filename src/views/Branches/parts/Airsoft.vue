<template>
  <v-card>
    <v-card-text class="pt-4">
      <h2 class="text-h3 text-sm-h2 py-8">Willkommen in der Sparte Airsoft!</h2>
    </v-card-text>

    <v-card-text
      v-if="isMobile"
      class="mt-4"
    >
      <v-img
        src="/assets/sponsors/begadi/begadi_vertical.jpg"
        style="max-width: 150px;"
        class="mx-auto"
      />
    </v-card-text>

    <v-card-text
      v-else
      class="pt-6"
    >
      <v-img
        src="/assets/sponsors/begadi/begadi_horizontal.jpg"
        style="max-width: 600px;"
        class="mx-auto"
      />
    </v-card-text>

    <v-card-text class="mt-4">
      <v-row justify="center">
        <v-col cols="12" md="6" lg="3">
          <user-card :user="branchLeader"/>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-title class="mt-4">
      <h3 class="text-h3">
        Über uns
      </h3>
    </v-card-title>
    <v-card-text class="text-h5 mt-2">
      <p class="text-justify mb-2">
        Wir sind ein stetig wachsendes Airsoft-Team, das sich aus Mitgliedern aus dem Raum Schleswig-Holstein und
        Mecklenburg-Vorpommern zusammensetzt, und jeweils einen Sitz in Elmshorn (SH) und in Leizen (MV) hat. Es ist
        unser vorrangiges Ziel, den Airsoft-Sport für neue Spieler zugänglicher zu machen, und bereits aktiven Spielern
        schnell und unkompliziert ein erfahrenes Team anzubieten. Mit dem Fokus auf Teamplay, Fairness und vor allem
        Spaß an dem Airsoft-Sport begrüßen wir auf herzliche Weise neue Spieler bei uns im Team.
        <br><br>
        Folgendes können wir euch zur Verfügung stellen:
      </p>
      <div class="text-left">
        <ul>
          <li>Sponsoring durch Begadi mit exklusiven Rabatten</li>
          <li>
            Ausrüstung zum Leihen, um einen ersten Eindruck zu gewinnen
          </li>
          <li>Beratung beim Kauf und Tuning von Ausrüstung</li>
          <li>Organisation von Events, Fahrgemeinschaften, etc.</li>
        </ul>
      </div>
      <p class="text-justify mt-7 mb-2">
        Folgendes solltet ihr mitbringen:
      </p>
      <div class="text-left">
        <ul>
          <li>Interesse an dem Airsoft-Sport</li>
        </ul>
      </div>
      <div class="text-left mt-7 pb-6">
        Uns findest du übrigens auch im <a href="https://www.airsoft-verzeichnis.de/index.php?status=team&teamnummer=011712" target="_blank">Airsoft-Verzeichnis</a>!
      </div>
    </v-card-text>

    <v-card-title class="mt-8" v-if="false">
      <h3 class="text-h3">
        Unser Team
      </h3>
    </v-card-title>
    <airsoft-members class="py-4" v-if="false"/>
  </v-card>
</template>
<script>
import UserCard from "@/components/users/UserCard";
import dayjs from "dayjs";
import CheckMobile from "../../../mixins/CheckMobile";
import AirsoftMembers from "./AirsoftMembers";

export default {
  components: {
    AirsoftMembers,
    UserCard
  },
  mixins: [
    CheckMobile
  ],
  data() {
    return {
      branchLeader: {
        fullName: 'Nick Nickels',
        image: '/assets/leading/branches/airsoft.jpg',
        text: dayjs().diff('1998-12-28', 'years') + " Jahre alt\nSpartenleiter Airsoft",
        socials: {
          instagram: 'air_nj',
          snapchat: 'nickels_nick',
          linkedin: null
        }
      },
    };
  }
};
</script>
