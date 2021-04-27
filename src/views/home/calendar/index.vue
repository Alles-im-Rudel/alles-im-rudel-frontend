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
                @click:clear="clearSearch"
            />
            <v-spacer />
            <tag-select v-model="tags" />
          </v-card-title>
          <v-card-text>
            <calender
                v-model="range"
                :appointments="appointments"
                :is-loading="isLoading"
                @reload="getAppointments"
            />
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
      tags: [],
      search: null,
      range: {
        month: this.today().format('MM'),
        year: this.today().format('YYYY')
      }
    }
  },
  created() {
    this.getAppointments();
  },
  watch: {
    tags: {
      deep: true,
      handler: debounce(function () {
        this.getAppointments();
      }, 500)
    },
    range: {
      deep: true,
      handler() {
        this.getAppointments();
      }
    },
  },
  methods: {
    clearSearch() {
      this.search = null;
      this.getAppointments();
    },
    getAppointments() {
      this.isLoading = true;
      const params = {
        tagIds: this.tags.map(tag => tag.id),
        search: this.search,
        month: this.range.month,
        year: this.range.year
      };
      window.axios
          .get(`appointments`, {params})
          .then((response) => {
            this.appointments = response.data.data;
          })
          .finally(() => (this.isLoading = false));
    },
  }
}
</script>