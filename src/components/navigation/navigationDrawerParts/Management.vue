<template>
  <v-list dense class="pa-0">
    <v-list-item-group v-model="activeItem" color="primary">
      <div
          v-for="(item, i) in items"
          :key="i"
      >
        <v-divider v-if="item.type === 'headline'" />
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
          auth: true,
          type: 'headline',
          action: '',
          text: 'Verwaltung',
          permission: 'headline.management'
        },
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
        {
          auth: true,
          type: 'action',
          action: 'management-clash',
          text: 'Clashverwaltung',
          icon: 'fa-cogs',
          permission: 'clash.update'
        }
      ]
    };
  },
};
</script>
