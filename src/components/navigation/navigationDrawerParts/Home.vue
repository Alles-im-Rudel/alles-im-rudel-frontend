<template>
  <v-list dense class="pa-0">
    <v-list-item-group v-model="activeItem" color="primary">
      <div
          v-for="(item, i) in items"
          :key="i"
      >
        <v-divider
            v-if="item.type === 'headline'"
        />
        <v-card-text
            class="white--text pa-1"
            style="background-color: #495056"
            v-if="item.type === 'headline'"
        >
          {{ item.text }}
        </v-card-text>

        <v-list-item
            v-if="item.type === 'action'"
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
import NavigationHelper from "@/mixins/NavigationHelper";

export default {
  components: {},
  mixins: [NavigationHelper],
  data() {
    return {
      allItems: [
        {
          auth: false,
          type: 'headline',
          action: '',
          text: 'Home',
          permission: null
        },
        {
          auth: false,
          type: 'action',
          action: 'home',
          text: 'Startseite',
          icon: 'fa-home',
          permission: null
        },
        {
          auth: false,
          type: 'action',
          action: 'news',
          text: 'News',
          icon: 'fa-newspaper',
          permission: null
        },
        {
          auth: false,
          type: 'action',
          action: 'calendar',
          text: 'Kalender',
          icon: 'fa-calendar-alt',
          permission: null
        },
        {
          auth: true,
          type: 'action',
          action: 'dashboard',
          text: 'Dashboard',
          icon: 'fa-columns',
          permission: null
        }
      ]
    };
  },
};
</script>
