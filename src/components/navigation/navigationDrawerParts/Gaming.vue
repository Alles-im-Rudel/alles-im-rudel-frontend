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
            <v-icon v-text="item.icon" />
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
          text: 'Gaming',
          permission: null
        },
        {
          auth: false,
          type: 'action',
          action: 'gaming',
          text: 'Startseite',
          icon: 'fa-headset',
          permission: null
        },
        {
          auth: false,
          type: 'action',
          action: 'gaming-lol',
          text: 'League of Legends',
          icon: 'fa-grin-hearts',
          permission: null
        },
        {
          auth: true,
          type: 'action',
          action: 'gaming-summoner',
          text: 'Summoner suche',
          icon: 'fa-search',
          permission: 'summoners.index'
        }
      ]
    };
  }
};
</script>
