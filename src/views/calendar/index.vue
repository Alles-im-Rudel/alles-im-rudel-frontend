<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <base-card>
          <v-card-title>
           Kalender / Events
            <v-spacer />
            <v-text-field
                append-icon="fa-search"
                v-model="search"
                label="Suche"
                clearable
                @keydown.enter="getAppointments"
                @click:append="getAppointments"
                @click:clear="getAppointments"
            />
            <v-spacer />
            <tag-select v-model="tags" />
          </v-card-title>
          <v-card-text v-if="appointments.length > 0">
            <calender :appointments="appointments" @reload="getAppointments" />
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TagSelect from "@/components/selects/TagSelect";
import Calender from "@/components/calendar/Calender";
import {debounce} from "lodash";

export default {
  name: "CalenderIndex",
  components: {
    TagSelect,
    Calender
  },
  data() {
    return {
      isLoading: false,
      appointments: [],
      page: 1,
      tags: [],
      search: null
    }
  },
  created() {
    this.getAppointments();
  },
  watch: {
    tags: {
      deep: true,
      handler() {
        this.getAppointments();
      }
    },
  },
  methods: {
    getAppointments: debounce(function () {
      const params = {
        tagIds: this.tags.map(tag => tag.id),
        search: null
      };
      window.axios
          .get(`appointments`, {params})
          .then((response) => {
            this.appointments = response.data.data;
          })
          .finally(() => (this.isLoading = false));
    }, 500),
  }
}
</script>