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
        <user-chip :user="user" />
      </v-card-text>
      <v-card-text v-if="!isAuth" class="white--text">
        Willkommen
      </v-card-text>
    </v-card>
    <home v-if="showHome" />
    <management v-if="showManagement" />
    <gaming v-if="showGaming" />
    <airsoft v-if="showAirsoft" />
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from 'vuex';
import Permissions from '@/mixins/Permissions';
import Management from "@/components/navigation/navigationDrawerParts/Management";
import Gaming from "@/components/navigation/navigationDrawerParts/Gaming";
import Airsoft from "@/components/navigation/navigationDrawerParts/Airsoft";
import Home from "@/components/navigation/navigationDrawerParts/Home";
import UserChip from '@/components/users/UserChip'

export default {
  components: {
    Airsoft,
    Management,
    Gaming,
    Home,
    UserChip
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
      return this.currentRouteGroup === 'home' || this.currentRouteGroup === 'profile' || this.currentRouteGroup === 'login' || this.currentRouteGroup === 'register'
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
