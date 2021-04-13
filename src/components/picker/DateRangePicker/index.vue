<template>
  <v-dialog v-model="showDialog" max-width="400">
    <template v-slot:activator="{ on }">
      <v-text-field
          v-on="on"
          :label="label"
          readonly
          v-model="value"
      />
    </template>
    <v-card>
      <v-card-text class="ma-0 pa-0">
        <v-date-picker
            v-model="date"
            color="darkGrey"
            range
            :min="minDate"
            full-width
        />
      </v-card-text>
      <v-card-actions class="ma-0 pa-1 pt-0">
        <v-btn text small @click="reset">
          Zurücksetzen
        </v-btn>
        <v-spacer />
        <v-btn text small @click="clear">
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
  name: 'DateRangePicker',
  props: {
    value: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: () => 'Datum range'
    }
  },
  data() {
    return {
      showDialog: false,
      date: cloneDeep(this.value),
      dateOriginal: cloneDeep(this.value)
    };
  },
  computed: {
    minDate() {
      return this.date[0] || this.today().format('YYYY-MM-DD');
    }
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
      this.date = [];
    },
    close() {
      this.showDialog = false;
    }
  }
};
</script>
