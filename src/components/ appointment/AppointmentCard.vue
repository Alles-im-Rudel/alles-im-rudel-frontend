<template>
  <v-card
      v-if="appointment.id"
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
    <v-card-text class="pa-1">
      <strong>Von: {{ appointment.startAt | dateTime }}</strong> <br>
      <strong>Bis: {{ appointment.endAt | dateTime }}</strong>
    </v-card-text>
    <v-divider />
    <div class="ql-snow">
      <div class="ql-editor" v-html="appointment.text" />
    </div>
    <v-card-actions>
      <appointment-edit-button v-model="appointment" @reload="$emit('reload')" />
      <appointment-delete-button :selected-appointment="appointment" @reload="$emit('reload')" />
      <v-spacer />
      {{ appointment.likes }}
      <appointment-like-button :selected-appointment="appointment" @reload="getAppointment" />
    </v-card-actions>
  </v-card>
  <v-card v-else>
    <v-card-text>
      <v-skeleton-loader class="mx-auto" type="card" />
    </v-card-text>
  </v-card>
</template>
<script>
import CloseButton from '@/components/cardActions/CloseButton';
import AppointmentLikeButton from "@/components/ appointment/AppointmentLikeButton";
import AppointmentEditButton from "@/components/ appointment/AppointmentEditButton";
import AppointmentDeleteButton from "@/components/ appointment/AppointmentDeleteButton";

export default {
  components: {
    CloseButton,
    AppointmentLikeButton,
    AppointmentEditButton,
    AppointmentDeleteButton
  },
  props: {
    selectedAppointment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      appointment: {
        id: null,
        title: null,
        text: null,
        tags: [],
        likes: null
      }
    }
  },
  watch: {
    selectedAppointment: {
      deep: true,
      handler() {
        this.getAppointment();
      }
    }
  },
  created() {
    this.getAppointment();
  },
  methods: {
    getAppointment() {
      this.isLoading = true;
      window.axios
          .get(`appointments/${this.selectedAppointment.id}`)
          .then((response) => {
            this.appointment = response.data.data
          })
          .finally(() => {
            this.isLoading = false;
          });
    },
  }
}
</script>