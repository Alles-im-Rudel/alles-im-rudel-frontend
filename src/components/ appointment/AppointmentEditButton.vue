<template>
  <v-dialog v-model="showDialog">
    <template v-slot:activator="{ on: dialog }">
      <v-tooltip top>
        <template v-slot:activator="{ on:tooltip }">
          <v-btn
            v-if="canSeeButton"
            color="darkGrey"
            dark
            icon
            v-on="{ ...dialog, ...tooltip}"
          >
            <v-icon>fa-edit</v-icon>
          </v-btn>
        </template>
        <span>Bearbeiten</span>
      </v-tooltip>
    </template>
    <v-card tile>
      <v-card-title>
        Event {{ appointment.title }} bearbeiten
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
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';
import ValidationErrors from '@/mixins/ValidationErrors';
import CloseButton from '@/components/cardActions/CloseButton';
import {mapGetters} from 'vuex';
import Permissions from '@/mixins/Permissions';
import {cloneDeep} from 'lodash';
import AppointmentForm from '@/components/ appointment/AppointmentForm';

export default {
  components: {
    ResetSaveAction,
    AppointmentForm,
    CloseButton
  },
  mixins: [ValidationErrors, Permissions],
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDialog: false,
      isLoading: false,
      appointment: cloneDeep(this.value),
      originalAppointment: cloneDeep(this.value)
    };
  },

  computed: {
    ...mapGetters('auth', ['user', 'isAuth']),
    canSubmit() {
      return this.appointment.title &&
          this.appointment.text &&
          this.hasChanges;
    },
    hasChanges() {
      return !!this.appointment.text ||
          !!this.appointment.title ||
          this.appointment.tags.length > 0;
    },
    canSeeButton() {
      return this.can('appointments.update');
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
          .put(`appointments/${this.appointment.id}`, params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.$emit('reload');
            this.close();
          })
          .catch(this.syncErrors)
          .finally(() => this.isLoading = false);
    },
    clear() {
      this.appointment = cloneDeep(this.originalAppointment);
    },
    close() {
      this.showDialog = false;
    }
  }
};
</script>