<template>
  <v-dialog
    v-model="showDialog"
    max-width="400"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="value"
        type="date"
        :label="label"
        readonly
        :hide-details="hideDetails"
        v-on="on"
      />
    </template>
    <v-card>
      <v-card-text class="ma-0 pa-0">
        <v-date-picker
          v-model="date"
          color="darkGrey"
          locale="de"
          :max="maxDate"
          full-width
        />
      </v-card-text>
      <v-card-actions class="ma-0 pa-1 pt-0">
        <v-btn
          text
          small
          @click="reset"
        >
          Zurücksetzen
        </v-btn>
        <v-spacer />
        <v-btn
          text
          small
          @click="clear"
        >
          Leeren
        </v-btn>
        <v-spacer />
        <v-btn
          text
          small
          @click="submit"
        >
          auswählen
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {cloneDeep} from 'lodash';

export default {
  name: 'DatePicker',
  props: {
    value: {
      type: String,
      default: () => ''
    },
    label: {
      type: String,
      default: () => 'Datum'
    },
    maxDate: {
      type: String,
      default: () => ''
    },
    hideDetails: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      showDialog: false,
      date: cloneDeep(this.value),
      dateOriginal: cloneDeep(this.value)
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.date = cloneDeep(value);
        this.dateOriginal = cloneDeep(value);
      }
    }
  },
  methods: {
    submit() {
      this.$emit('input', this.date);
      this.close();
    },
    reset() {
      this.date = cloneDeep(this.dateOriginal);
    },
    clear() {
      this.date = null;
    },
    close() {
      this.showDialog = false;
    }
  }
};
</script>
