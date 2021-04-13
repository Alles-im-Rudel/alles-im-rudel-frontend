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
      <user-chip :user="appointment.user" />
      <close-button
          color="white"
          @close="$emit('close')"
      />
    </v-toolbar>
    <v-card-text class="py-0">
      <v-row>
        <v-col v-if="!appointment.isAllDay" cols="12" md="8" class="text-left">
          <strong>Von: {{ appointment.startAt | dateTime }}</strong> <br>
          <strong>Bis: {{ appointment.endAt | dateTime }}</strong>
        </v-col>
        <v-col v-else cols="12" md="8" class="text-left">
          <strong>Von: {{ appointment.startAt | date }}</strong> <br>
          <strong>Bis: {{ appointment.endAt | date }}</strong>
        </v-col>
        <v-col cols="12" md="4">
          <like-button :selected="appointment" model="appointments" @reload="getAppointment" />
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider />
    <div class="ql-snow">
      <div class="ql-editor" v-html="appointment.text" />
    </div>
    <v-card-actions>
      <appointment-edit-button v-model="appointment" @reload="$emit('reload')" />
      <appointment-delete-button :selected-appointment="appointment" @reload="$emit('reload')" />
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
import AppointmentEditButton from "@/components/ appointment/AppointmentEditButton";
import AppointmentDeleteButton from "@/components/ appointment/AppointmentDeleteButton";
import UserChip from "@/components/users/UserChip";
import LikeButton from "@/components/buttons/LikeButton";

export default {
  components: {
    CloseButton,
    AppointmentEditButton,
    AppointmentDeleteButton,
    UserChip,
    LikeButton
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