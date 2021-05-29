<template>
  <div>
    <v-card-title class="justify-center py-8 greyBlue white--text">
      <h2 class="text-h2">Das Rudel</h2>
    </v-card-title>
    <v-card-title class="justify-center mt-4 mb-1">
      <h5 class="text-h5">Unser Vorstand</h5>
    </v-card-title>
    <v-divider class="mb-4" />
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="2">
          <user-card class="effects fade-in-main" :user="member1" />
        </v-col>
        <v-col cols="12" md="2">
          <user-card class="effects fade-in-main" :user="member2" />
        </v-col>
        <v-col cols="12" md="2">
          <user-card class="effects fade-in-main" :user="member3" />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-title class="justify-center mt-5 mb-1">
      <h5 class="text-h5">Unsere Sparten</h5>
    </v-card-title>
    <v-divider />
    <v-tabs
      v-model="activeTab"
      active-class="secondary"
      fixed-tabs
      show-arrows
    >
      <v-tab href="#airsoft">Airsoft</v-tab>
      <v-tab href="#gaming">E-Sports</v-tab>
    </v-tabs>
    <v-divider />
    <v-tabs-items
      v-model="activeTab"
      class="mt-8 pb-8 text-center mx-auto"
    >
      <v-tab-item value="airsoft">
        <v-card flat>
          <v-card-text class="mt-0">
            <div class="text-h3">
              Airsoft
            </div>
            <p class="text-h5 mt-6">
              Wir spielen gerne Airsoft. Und wir würden uns freuen, wenn wir dich auch dafür begeistern könnten.
              <br />Schau dir Näheres auf unserer Airsoft-Seite an!
            </p>
            <v-btn
              @click="toBranch('airsoft')"
              text
              class="mt-2"
            >
              Näheres erfahren
            </v-btn>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="gaming">
        <v-card flat>
          <v-card-text class="mt-0">
            <div class="text-h3">
              E-Sports
            </div>
            <p class="text-h5 mt-6">
              Wir zocken. Ob kompetitiv oder casual.
              <br />Schau dir Näheres auf unserer E-Sports-Seite an!
            </p>
            <v-btn
              @click="toBranch('gaming')"
              text
              class="mt-2"
            >
              Näheres erfahren
            </v-btn>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
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
      activeTab: null,
      member1: {
        id: 1,
        fullName: 'Silas Beckmann',
        img: '/assets/leading/left.png',
        text: dayjs().diff('1998-04-20', 'years') + ' Jahre alt'
      },
      member2: {
        id: 1,
        fullName: 'Timm Vollborn',
        img: '/assets/leading/center.png',
        text: dayjs().diff('1999-01-30', 'years') + ' Jahre alt'
      },
      member3: {
        id: 1,
        fullName: 'Nick Nickels',
        img: '/assets/leading/right.png',
        text: dayjs().diff('1998-12-28', 'years') + ' Jahre alt'
      },
    }
  },
  methods: {
    toBranch(activeTab) {
      window.location.href = '/#/branches?activeTab=' + activeTab;
    }
  }
}
</script>