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
    <v-list dense v-if="isAuth">
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
            v-for="(item, i) in menu"
            :key="i"
            link
            @click="switchView(item.action)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list dense v-if="!isAuth">
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
            v-for="(item, i) in authItems"
            :key="i"
            link
            @click="switchView(item.action)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Permissions from '@/mixins/Permissions';

export default {
  components: {},
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
      view: 'home',

      item: 0,
      authItems: [
        {text: 'Login', icon: 'fa-sign-in-alt', action: 'login'},
        {text: 'Register', icon: 'fa-user-plus', action: 'register'}
      ],

      menu: []
    };
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuth']),
    currentRouteName() {
      return this.$route.name
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
    },
    currentRouteName(value) {
      if (value === 'login') {
        this.item = 0;
      } else if (value === 'register') {
        this.item = 1;
      } else {
        this.item = null;
      }
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    switchView(name) {
      if (this.$route.name !== name) {
        this.$router.push({name: name});
      }
    }
  }
};
</script>
