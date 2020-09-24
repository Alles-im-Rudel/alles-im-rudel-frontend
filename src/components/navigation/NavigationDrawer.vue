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
    <v-list dense nav shaped>
      <v-list-item-group v-model="view" color="primary">
        <div v-for="item in menu" :key="item.title">
          <v-subheader v-if="item.type === 'title' && can(item.permission)">{{
              item.title
            }}</v-subheader>

          <v-list-item
              v-if="item.type === 'button' && can(item.permission)"
              v-show="can(item.permission)"
              link
              @click="switchView(item.action)"
          >
            <v-list-item-icon>
              <v-icon small>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>

          <v-divider v-if="item.type === 'divider' && can(item.permission)" />
        </div>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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

      menu: [
          // Main
        {
          type: 'title',
          title: 'MAIN',
          permission: null,
          icon: null,
          action: null
        },
        {
          type: 'button',
          title: 'Neu',
          action: 'recording.customer.create',
          permission: null,
          icon: 'fa-plus'
        },
        {
          type: 'divider',
          title: null,
          permission: null,
          icon: null,
          action: null
        },

        // Administration

        {
          type: 'title',
          title: 'ADMINISTRATION',
          permission: null,
          icon: null,
          action: null
        },
        {
          type: 'button',
          title: 'Tier',
          action: 'administration-animal',
          permission: null,
          icon: 'fa-paw'
        },
        {
          type: 'divider',
          title: null,
          permission: null,
          icon: null,
          action: null
        },

        // Reports

        {
          type: 'title',
          title: 'REPORTS',
          permission: 'reports.headline',
          icon: null,
          action: null
        },
        {
          type: 'divider',
          title: null,
          permission: 'reports.headline',
          icon: null,
          action: null
        }
      ]
    };
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuth'])
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
      }
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    switchView(name) {
      if (this.$route.name !== name) {
        this.$router.push({ name: name });
      }
    }
  }
};
</script>
