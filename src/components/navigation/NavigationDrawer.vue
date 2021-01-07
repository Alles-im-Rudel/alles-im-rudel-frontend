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
    <v-list dense class="pa-0">
      <v-list-item-group v-model="activeItem" color="primary">
        <div
            v-for="(item, i) in items"
            :key="i"
        >
          <v-divider v-if="item.auth === isAuth && item.type === 'headline' && can(item.permission)" />
          <v-card-text class="white--text pa-1" style="background-color: #495056"
                       v-if="item.auth === isAuth && item.type === 'headline' && can(item.permission)"
          >
            {{ item.text }}
          </v-card-text>

          <v-list-item
              v-if="item.auth === isAuth && item.type === 'action' && can(item.permission)"
              link
              @click="switchView(item.action)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content class="text-right">
              <v-list-item-title v-text="item.text" />
            </v-list-item-content>
          </v-list-item>
        </div>
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
      activeItem: null,

      items: [

        //Unnötig
        {auth: true, type: 'headline', action: '', text: 'Unnötige sachen hier', permission: null},
        {auth: true, type: 'action', action: 'gaming', text: 'Unnötig', icon: 'fa-cookie-bite', permission: null},

        //Verwaltung
        {auth: true, type: 'headline', action: '', text: 'Verwaltung', permission: 'headline.management'},
        {
          auth: true,
          type: 'action',
          action: 'management-users',
          text: 'Benutzerverwaltung',
          icon: 'fa-users',
          permission: 'users.index'
        },
        {
          auth: true,
          type: 'action',
          action: 'management-permissions',
          text: 'Berechtigungsverwaltung',
          icon: 'fa-shield-alt',
          permission: 'permissions.index'
        },

        //UnAuth
        {auth: false, type: 'action', action: 'login', text: 'Login', icon: 'fa-sign-in-alt', permission: null},
        {auth: false, type: 'action', action: 'register', text: 'Register', icon: 'fa-user-plus', permission: null}
      ]
    };
  },
  created() {
    this.setActiveItem();
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuth']),
    currentRouteName() {
      return this.$route.name
    },
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
    currentRouteName: {
      deep: true,
      immediate: true,
      handler() {
        this.setActiveItem();
      }
    },
  },
  mounted() {
    this.setActiveItem();
  },
  methods: {
    ...mapActions('auth', ['logout']),
    setActiveItem() {
      this.activeItem = null;
      let actions = this.items.filter(item => item.type === 'action' && item.auth === this.isAuth && this.can(item.permission))
      console.log(actions);
      actions.forEach((item, index) => {
        console.log(this.can(item.permission));
        if (item.action === this.currentRouteName) {
          this.activeItem = index
        }
      })
    },
    switchView(name) {
      if (this.$route.name !== name) {
        this.$router.push({name: name});
      }
    }
  }
};
</script>
