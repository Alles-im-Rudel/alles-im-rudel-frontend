<template>
  <v-card
      color="grey lighten-4"
      min-width="350px"
      flat
  >
    <v-toolbar
        :color="appointment.color"
        dark
    >
      <v-toolbar-title v-html="appointment.title"></v-toolbar-title>
      <v-spacer />
      <close-button
          color="white"
          @close="$emit('close')"
      />
    </v-toolbar>
    <div class="ql-snow">
      <div class="ql-editor" v-html="appointment.text" />
    </div>
    <v-card-actions>
      <v-btn icon>
        <v-icon>fa-edit</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon color="liked">
        <v-icon>fa-thumbs-up</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import CloseButton from '@/components/cardActions/CloseButton';

export default {
  components: {
    CloseButton
  },
  props: {
    appointment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>