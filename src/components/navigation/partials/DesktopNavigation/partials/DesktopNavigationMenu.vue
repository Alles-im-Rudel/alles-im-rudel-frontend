<template>
  <v-menu
    bottom
    offset-y
    close-on-content-click
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-1"
        text
        dark
        v-bind="attrs"
        v-on="on"
      >
        <v-icon
          v-if="item.icon"
          left
        >
          {{ item.icon }}
        </v-icon>

        {{ item.name }}
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(child, index) in item.children"
        :key="index"
        link
        @click="child.route ? pushRouteTo(child.route) : null"
      >
        <template v-if="child.external">
          <a
            :href="child.external"
            target="_blank"
            rel="noopener noreferrer"
            class="v-list-item__content"
            style="text-decoration: none; color: inherit; width: 100%; display: block;"
          >
            {{ child.name }}
          </a>
        </template>
        <template v-else>
          {{ child.name }}
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
