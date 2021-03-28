<template>
  <v-card
      min-width="350px"
      flat
  >
    <v-toolbar
        style="background-image: linear-gradient(to Left top, #F2167D, #7EE7F2,#278C2E, #D9A404, #F22D1B);"
        dark
    >
      <v-toolbar-title>
        Geburstag {{ appointment.startAt | date }}
        von:
        <user-chip :user="appointment.birthdayKid" />
      </v-toolbar-title>
      <v-spacer />
      <close-button
          color="white"
          @close="$emit('close')"
      />
    </v-toolbar>
  </v-card>
</template>
<script>
import CloseButton from '@/components/cardActions/CloseButton';
import UserChip from "@/components/users/UserChip";

export default {
  components: {
    CloseButton,
    UserChip
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