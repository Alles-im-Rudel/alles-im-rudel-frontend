<template>
  <v-dialog v-model="showDialog">
    <template v-slot:activator="{ on: dialog }">
      <v-tooltip top>
        <template v-slot:activator="{ on:tooltip }">
          <v-btn
              v-if="canSeeButton"
              color="darkGrey"
              outlined
              v-on="{ ...dialog, ...tooltip}"
          >
            <v-icon left>fa-plus</v-icon>
            Event
          </v-btn>
        </template>
        <span>Erstellen</span>
      </v-tooltip>
    </template>
    <v-card tile>
      <v-card-title>
        Event erstellen
        <v-spacer />
        <close-button @close="close" />
      </v-card-title>
      <v-divider />
      <v-card-text>
        <appointment-form
            v-model="appointment"
            :validation-errors="errors"
        />
      </v-card-text>
      <v-divider />
      <reset-save-action
          :has-changes="hasChanges"
          :can-submit="canSubmit"
          :is-loading="isLoading"
          @submit="submit"
          @clear="clear"
      />
    </v-card>
  </v-dialog>
</template>

<script>
import ResetSaveAction from "@/components/cardActions/ResetSaveAction";
import ValidationErrors from "@/mixins/ValidationErros";
import CloseButton from '@/components/cardActions/CloseButton'
import {mapGetters} from "vuex";
import Permissions from "@/mixins/Permissions";
import AppointmentForm from "@/components/ appointment/AppointmentForm";
import HasArrayDifferenz from "@/mixins/HasArrayDifferenz";

export default {
  mixins: [ValidationErrors, Permissions, HasArrayDifferenz],
  components: {
    ResetSaveAction,
    AppointmentForm,
    CloseButton
  },
  data() {
    return {
      showDialog: false,
      isLoading: false,
      appointment: {
        title: null,
        text: null,
        isAllDay: false,
        startAt: null,
        endAt: null,
        color: '',
        tags: [],
        dates: [],
        fromTime: '',
        toTime: ''
      },
    };
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuth']),
    canSubmit() {
      return !!this.appointment.title &&
          !!this.appointment.text &&
          !!this.appointment.dates.length > 0 &&
          this.hasChanges;
    },
    hasChanges() {
      return !!this.appointment.text ||
          !!this.appointment.title ||
          !!this.appointment.isAllDay ||
          !!this.appointment.color ||
          this.appointment.tags.length > 0 ||
          this.checkArrays(
              this.appointment.dates,
              []
          );
    },
    canSeeButton() {
      return this.can('appointments.create');
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      this.clearErrors();
      const params = {
        title: this.appointment.title,
        text: this.appointment.text,
        tagIds: this.appointment.tags.map(tag => tag.id),
        color: this.appointment.color,
        isAllDay: this.appointment.isAllDay,
        startAt: this.appointment.dates[0] + ' ' + this.appointment.fromTime,
        endAt: this.appointment.dates[1] ? this.appointment.dates[1] : this.appointment.dates[0] + ' ' + this.appointment.toTime
      };
      window.axios
          .post(`appointments`, params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.clear();
            this.$emit('reload');
          })
          .catch(this.syncErrors)
          .finally(() => this.isLoading = false);
    },
    clear() {
      this.appointment = {
        title: null,
        text: null,
        isAllDay: false,
        startAt: null,
        endAt: null,
        color: '',
        tags: [],
        dates: [],
        fromTime: '',
        toTime: ''
      };
    },
    close() {
      this.showDialog = false
    }
  }
};
</script>