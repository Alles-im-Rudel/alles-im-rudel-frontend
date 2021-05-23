<template>
  <v-card tile>
    <v-card-text class="px-0 pt-0">
      <v-parallax :src="require('@/assets/background_only_wolfs.png')">
      </v-parallax>
      <div class="mx-auto mt-16 mb-12" style="max-width: 1300px">
        <div class="text-center text-h3">
          Willkommen bei Alles im Rudel e.V.!
        </div>
        <p class="text-h5 mt-8">
          Moin und herzlich Willkommen auf der offiziellen Seite von Alles im Rudel e.V.!
          <br />Wir sind ein Verein mit Sitz in Elmshorn und wachsen stetig.
          <br />
          <br />Schau doch mal bei unseren Vereinssparten vorbei!
        </p>
        <v-btn
            class="mt-4"
            @click="pushRouteTo('branches')"
            text
        >
          Zu den Sparten
        </v-btn>
      </div>
    </v-card-text>
    <v-divider />
    <v-card-title class="justify-center py-8" style="background-color: #596571; color: white">
      <h2 class="text-h2">News</h2>
    </v-card-title>
    <v-card-text class="mt-2">
      <v-row justify="center" class="pt-2 mx-auto mb-5" style="max-width: 1300px">
        <v-col cols="12" md="4"
               v-for="post in posts"
               :key="post.id"
        >
          <post-card class="effects fade-in-main" :post="post" />
        </v-col>
      </v-row>
      <v-row justify="center" class="mb-4">
        <v-btn
            text
            color="primary"
            @click="pushRouteTo('news')"
        >
          Alle News
        </v-btn>
      </v-row>
    </v-card-text>
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
    <v-card-title class="justify-center">
      <h3 class="body-1">Sparten</h3>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row justify="center">
        <v-col
            v-for="branch in branches"
            :key="branch.id"
            cols="12"
            md="2"
        >
          <branch class="effects fade-in-main" v-model="active" :branch="branch" />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text class="ma-0 pa-0">
      <v-window
          v-model="active"
      >
        <v-window-item
            v-for="branch in branches"
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
            <v-card-text class="text-h5 text-justify mx-auto" style="max-width: 1300px">
              {{ branch.text }} <a :href="link" style="color: unset">Zu der Sparte</a>
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
import PostCard from "@/components/post/PostCard";

export default {
  name: 'Home',
  components: {
    UserCard,
    Branch,
    PostCard
  },
  data() {
    return {
      active: 1,
      posts: [],
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
      branches: [
        {
          id: 1,
          title: 'Airsoft',
          img: require('@/assets/nick.png'),
          user: {
            fullName: 'Nick Nickels',
            img: require('@/assets/nick.png'),
            text: '22 Jahre alt / Leiter Airsoft'
          },
          text: 'Wir sind ein stetig wachsendes Team, das sich aus Mitgliedern aus dem Raum Schleswig-Holstein und\n' +
              '        Mecklenburg-Vorpommern zusammensetzt, und jeweils einen Sitz in Elmshorn (SH) und in Leizen (MV) hat.\n' +
              '        Es ist unser vorrangiges Ziel, den Airsoft-Sport für neue Spieler zugänglicher zu machen, und bereits aktiven\n' +
              '        Spielern schnell und unkompliziert ein erfahrenes Team anzubieten. Mit dem Fokus auf Teamplay, Fairness und vor\n' +
              '        allem Spaß an dem Airsoft-Sport begrüßen wir auf herzliche Weise neue Spieler bei uns im Team.',
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
          text: 'Hier möchten wir uns als E-Sports-Team an allen möglichen Spielen versuchen, und sind dabei stets auf der Suche nach weiteren Spielern, ' +
              'denen Teamplay und Freundlichkeit sehr wichtig sind. Bei uns steht der Spaß primär im Vordergrund, aber je nachdem, um welches Spiel es sich ' +
              'handelt, ist es ebenfalls ein Ziel von uns, kompetitiv an kleineren oder auch mal größeren Turnieren teilzunehmen. Die Mehrheit von uns spielt' +
              ' momentan vor allem League of Legends, und bei den Clash-Turnieren sind wir regelmäßig vertreten.'
        }
      ],
    };
  },
  computed: {
    link() {
      return this.active === 1 ? '/#/branches?activeTab=airsoft' : '/#/branches?activeTab=gaming'
    }
  },
  created() {
    this.getNews()
  },
  methods: {
    getNews() {
      const params = {
        page: 1,
        items: 3
      };
      window.axios
          .get(`posts`, {params})
          .then((response) => {
            this.page += 1;
            this.posts = response.data.data
          })
          .finally(() => (this.isLoading = false));
    }
  },
};
</script>