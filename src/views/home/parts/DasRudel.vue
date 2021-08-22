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
      <v-tab href="#esports">E-Sports</v-tab>
    </v-tabs>
    <v-divider />
    <v-tabs-items
        v-model="activeTab"
        class="mt-8 pb-8 text-center mx-auto"
    >
      <v-tab-item value="airsoft">
        <v-card flat>
          <v-card-text class="mt-0">
            <h3 class="text-h3" v-once>
              Airsoft
            </h3>
            <p class="text-h5 mt-6" v-once>
              Wir spielen gerne Airsoft. Und wir würden uns freuen, wenn wir dich auch dafür begeistern könnten.
              <br />Schau doch mal bei unserer Sparte Airsoft vorbei!
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
      <v-tab-item value="esports">
        <v-card flat>
          <v-card-text class="mt-0">
            <h3 class="text-h3" v-once>
              E-Sports
            </h3>
            <p class="text-h5 mt-6" v-once>
              Wir zocken gerne, sowohl casual als auch kompetitiv. Und wir würden uns freuen, wenn wir dich auch dafür
              begeistern könnten.
              <br />Schau doch mal bei unserer Sparte E-Sports vorbei!
            </p>
            <v-btn
                @click="toBranch('esports')"
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
        fullName: 'Silas Beckmann',
        image: '/assets/leading/left.png',
        text: dayjs().diff('1998-04-20', 'years') + ' Jahre alt',
        socials: {
          instagram: 'silas098',
          snapchat: 'silas098',
          linkedin: 'silas-beckmann-866828210'
        }
      },
      member2: {
        id: 1,
        fullName: 'Timm Vollborn',
        image: '/assets/leading/center.png',
        text: dayjs().diff('1999-01-30', 'years') + ' Jahre alt',
        socials: {
          instagram: 't.vollborn',
          snapchat: 't.vollborn',
          linkedin: 'timm-vollborn'
        }
      },
      member3: {
        id: 1,
        fullName: 'Nick Nickels',
        image: '/assets/leading/right.png',
        text: dayjs().diff('1998-12-28', 'years') + ' Jahre alt',
        socials: {
          instagram: 'air_nj',
          snapchat: 'nickels_nick',
          linkedin: null
        }
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