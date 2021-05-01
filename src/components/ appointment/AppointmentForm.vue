<template>
  <v-row>
    <v-col cols="6">
      <v-row>
        <v-col cols="12">
          <tag-select v-model="appointment.tags" />
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
              v-model="appointment.title"
              label="Titel"
              :error="hasErrors('title')"
              :error-messages="getErrors('title')"
          />
        </v-col>
        <v-col cols="12" lg="3">
          <v-checkbox
              v-model="appointment.isAllDay"
              color="darkGrey"
              label="Ganzen Tag"
          />
        </v-col>
        <v-col cols="12" lg="3">
          <color-select v-model="appointment.color" />
        </v-col>
        <v-col cols="12" lg="6">
          <date-range-picker v-model="appointment.dates" label="Datum von, bis" />
        </v-col>
        <v-col cols="12" lg="3" v-if="!appointment.isAllDay">
          <time-picker v-model="appointment.fromTime" label="Start Urzeit" />
        </v-col>
        <v-col cols="12" lg="3" v-if="!appointment.isAllDay">
          <time-picker v-model="appointment.toTime" label="End Urzeit" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6">
      <v-col cols="12" md="12">
        <vue-editor v-model="appointment.text" />
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import ValidationErrors from "@/mixins/ValidationErros";
import TagSelect from "@/components/selects/TagSelect";
import DateRangePicker from "@/components/picker/DateRangePicker";
import TimePicker from "@/components/picker/TimePicker";
import ColorSelect from "@/components/selects/ColorSelect";

export default {
  mixins: [ValidationErrors],
  components: {
    TagSelect,
    DateRangePicker,
    TimePicker,
    ColorSelect
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      appointment: this.value,
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.appointment = value;
      }
    },
    appointment: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      },
    },
    validationErrors: {
      handler() {
        this.errors = this.validationErrors;
      },
      deep: true
    },
  }
};
</script>