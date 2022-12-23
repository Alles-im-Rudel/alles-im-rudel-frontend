<template>
  <v-toolbar-title
    class="cursor-pointer pl-0 pl-sm-1 d-flex align-center"
    @click="pushRouteTo('home')"
  >
    <v-icon
      :size="$vuetify.breakpoint.smAndDown ? 56 : 64"
      class="mr-3"
    >
      $vuetify.icons.allesimrudel
    </v-icon>

    <span class="d-none d-sm-block">
      Alles im Rudel e.V.
    </span>
  </v-toolbar-title>
</template>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>