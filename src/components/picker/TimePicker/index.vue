<template>
  <v-dialog
    v-model="showDialog"
    max-width="400"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="value"
        readonly
        :label="label"
        v-on="on"
      />
    </template>
    <v-card>
      <v-card-text class="ma-0 pa-0">
        <v-time-picker
          v-model="time"
          color="darkGrey"
          full-width
          format="24hr"
          scrollable
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
  name: 'TimePicker',
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: () => 'Zeit'
    }
  },
  data() {
    return {
      showDialog: false,
      time: cloneDeep(this.value),
      timeOriginal: cloneDeep(this.value)
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.time = cloneDeep(value);
        this.timeOriginal = cloneDeep(value);
      }
    }
  },
  methods: {
    submit() {
      this.$emit('input', this.time);
      this.close();
    },
    reset() {
      this.time = cloneDeep(this.timeOriginal);
    },
    clear() {
      this.time = '';
    },
    close() {
      this.showDialog = false;
    }
  }
};
</script>
