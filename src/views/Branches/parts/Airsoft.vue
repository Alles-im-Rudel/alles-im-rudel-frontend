<template>
  <v-card>
    <v-card-text class="pt-4">
      <h2 class="text-h3 text-sm-h2">Willkommen im Bereich Airsoft von <br>Alles im Rudel</h2>
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
          <user-card :user="branchLeader" />
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text class="text-h5 mt-2">
      <p class="text-justify">
        Wir sind ein stetig wachsendes Team, das sich aus Mitgliedern aus dem Raum Schleswig-Holstein und
        Mecklenburg-Vorpommern zusammensetzt, und jeweils einen Sitz in Elmshorn (SH) und in Leizen (MV) hat.
        Es ist unser vorrangiges Ziel, den Airsoft-Sport für neue Spieler zugänglicher zu machen, und bereits aktiven
        Spielern schnell und unkompliziert ein erfahrenes Team anzubieten. Mit dem Fokus auf Teamplay, Fairness und vor
        allem Spaß an dem Airsoft-Sport begrüßen wir auf herzliche Weise neue Spieler bei uns im Team.
        <br><br>
        Folgendes können wir euch zur Verfügung stellen:
      </p>
      <div class="text-left">
        <ul>
          <li>
            Ausrüstung zum Leihen, um einen ersten Eindruck zu gewinnen
          </li>
          <li>Beratung beim Kauf und Tuning von Ausrüstung</li>
          <li>Organisation von Events, Fahrgemeinschaften, etc.</li>
        </ul>
      </div>
      <p class="text-justify mt-7">
        Folgendes solltet ihr mitbringen:
      </p>
      <div class="text-left">
        <ul>
          <li>Interesse an dem Airsoft-Sport</li>
        </ul>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import UserCard from "@/components/users/UserCard";
import dayjs from "dayjs";
import CheckMobile from "../../../mixins/CheckMobile";

export default {
  components: {
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
  },
  watch: {},
  created() {
  },
  methods: {}
};
</script>
