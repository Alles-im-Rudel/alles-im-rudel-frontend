<template>
  <v-card tile>
    <v-card-text class="px-0 pt-0">
      <v-parallax :src="require('@/assets/background.png')">
        <h1 class="text-h1">Alles im Rudel e.V.</h1>
      </v-parallax>
      <div class="px-7 pt-1 text-h5">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.
      </div>
    </v-card-text>
    <v-divider />
    <v-card-title class="justify-center py-8" style="background-color: #596571; color: white">
      <h2 class="text-h2">Das Rudel</h2>
    </v-card-title>
    <v-divider />
    <v-card-title class="justify-center">
      <h3 class="body-1">Der Vorstand</h3>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="2">
          <user-card :user="member1" />
        </v-col>
        <v-col cols="12" md="2">
          <user-card :user="member2" />
        </v-col>
        <v-col cols="12" md="2">
          <user-card :user="member3" />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-title class="justify-center">
      <h3 class="body-1">Sparten</h3>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row justify="center">
        <v-col
            v-for="branch in braches"
            :key="branch.id"
            cols="12"
            md="2"
        >
          <branch v-model="active" :branch="branch" />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text class="ma-0 pa-0">
      <v-window
          v-model="active"
      >
        <v-window-item
            v-for="branch in braches"
            :key="branch.id"
            :value="branch.id"
        >
          <v-card
              color="greyBlue"
              dark
              tile
          >
            <v-card-title class="justify-center">
              <h2 class="text-h1">
                {{ branch.title }}
              </h2>
            </v-card-title>
            <v-card-text class="text-h5">
              {{ branch.text }}
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card-text>
    <v-divider color="#231f21" />
  </v-card>
</template>
<script>
import UserCard from "@/components/users/UserCard";
import Branch from "@/views/home/parts/Branch";

export default {
  name: 'Home',
  components: {
    UserCard,
    Branch
  },
  data() {
    return {
      active: 1,
      member1: {
        id: 1,
        fullName: 'Silas Beckmann',
        img: require('@/assets/silas.png'),
        text: '23 Jahre alt / Air Developer'
      },
      member2: {
        id: 1,
        fullName: 'Timm Vollborn',
        img: require('@/assets/timm.png'),
        text: '22 Jahre alt / Vorsitzender und so weiter'
      },
      member3: {
        id: 1,
        fullName: 'Nick Nickels',
        img: require('@/assets/nick.png'),
        text: '22 Jahre alt / Leiter Airsoft'
      },
      braches: [
        {
          id: 1,
          title: 'Airsoft',
          img: require('@/assets/nick.png'),
          user: {
            fullName: 'Nick Nickels',
            img: require('@/assets/nick.png'),
            text: '22 Jahre alt / Leiter Airsoft'
          },
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        {
          id: 2,
          title: 'E-Sports',
          img: require('@/assets/nick.png'),
          user: {
            id: 1,
            fullName: 'Timm Vollborn',
            img: require('@/assets/timm.png'),
            text: '22 Jahre alt / Vorsitzender und so weiter'
          },
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        {
          id: 3,
          title: 'Just Chillen',
          img: require('@/assets/nick.png'),
          user: {
            id: 1,
            fullName: 'Silas Beckmann',
            img: require('@/assets/silas.png'),
            text: '23 Jahre alt / Air Developer'
          },
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        }
      ],
    };
  },
  computed: {},
  created() {
  },
  methods: {},
};
</script>