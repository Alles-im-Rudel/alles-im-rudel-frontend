<template>
  <v-navigation-drawer
      v-model="showMenu"
      clipped
      app
      class="elevation-5"
  >
    <v-card color="darkGrey" tile flat>
      <v-card-text v-if="isAuth" class="white--text">
        Willkommen:
        <br />
        {{ user.username }}
      </v-card-text>
      <v-card-text v-if="!isAuth" class="white--text">
        Willkommen
      </v-card-text>
    </v-card>
    <home v-if="showHome" />
    <management v-if="showManagement" />
    <gaming v-if="showGaming" />
    <airsoft v-if="showAirsoft" />
    <auth v-if="showAuth" />
    <template #append>
      <iframe
          src="https://discord.com/widget?id=377547252278886422&theme=light"
          width="100%" height="400"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
    </template>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from 'vuex';
import Permissions from '@/mixins/Permissions';
import Management from "@/components/navigation/navigationDrawerParts/Management";
import Gaming from "@/components/navigation/navigationDrawerParts/Gaming";
import Auth from "@/components/navigation/navigationDrawerParts/Auth";
import Airsoft from "@/components/navigation/navigationDrawerParts/Airsoft";
import Home from "@/components/navigation/navigationDrawerParts/Home";

export default {
  components: {
    Airsoft,
    Management,
    Gaming,
    Auth,
    Home
  },
  mixins: [Permissions],
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      showMenu: this.value,
    };
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuth']),
    currentRouteGroup() {
      return this.$route.meta.group
    },
    showAuth() {
      return !this.isAuth
    },
    showGaming() {
      return this.currentRouteGroup === 'gaming'
    },
    showManagement() {
      return this.currentRouteGroup === 'management'
    },
    showAirsoft() {
      return this.currentRouteGroup === 'airsoft'
    },
    showHome() {
      return this.currentRouteGroup === 'home'
    }
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.showMenu = value;
      }
    },
    showMenu: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      },
    }
  }
};
</script>
