<template>
  <div class="text-center text-md-left d-md-flex">
    <div class="d-block d-md-none">
      <div
        v-for="(branch, index) in branches"
        :key="index"
      >
        <v-btn
          text
          class="mt-2 mt-md-0"
          :color="getNavigationRouteColor(branch.route)"
          @click="pushRouteTo(branch.route)"
        >
          {{ branch.title }}
        </v-btn>
      </div>
    </div>

    <div class="d-none d-md-block">
      <v-menu
        bottom
        offset-y
        close-on-content-click
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :color="getNavigationGroupColor('branch')"
            class="mx-1"
            text
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>
              fa-code-branch
            </v-icon>

            Sparten
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(branch, index) in branches"
            :key="index"
            link
            @click="pushRouteTo(branch.route)"
          >
            {{ branch.title }}
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
import NavigationRouteColor from '@/mixins/Navigation/NavigationRouteColor';

export default {
  mixins: [NavigationRouteColor],
  data() {
    return {
      branches: [
        {
          title: 'Airsoft',
          icon: 'fa-smog',
          route: 'airsoft'
        },
        {
          title: 'E-Sports',
          icon: 'fa-laptop',
          route: 'esports'
        }
      ]
    };
  }
};
</script>