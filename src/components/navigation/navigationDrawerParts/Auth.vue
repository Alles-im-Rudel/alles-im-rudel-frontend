<template>
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
</template>

<script>
import Permissions from '@/mixins/Permissions';
import NavigationHelper from "@/mixins/NavigationHelper";

export default {
  components: {},
  mixins: [Permissions, NavigationHelper],
  data() {
    return {
      allItems: [
        //UnAuth
        {auth: false, type: 'action', action: 'login', text: 'Login', icon: 'fa-sign-in-alt', permission: null},
        {auth: false, type: 'action', action: 'register', text: 'Register', icon: 'fa-user-plus', permission: null}
      ]
    };
  }
};
</script>
