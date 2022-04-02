<template>
  <div>
    <BaseBackground />
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <BaseCard>
            <v-card-title>
              Kalender / Events
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="fa-search"
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
          </BaseCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TagSelect from '@/components/selects/TagSelect';
import Calender from '@/components/calendar/Calender';
import {debounce} from 'lodash';

export default {
  name: 'CalenderIndex',
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
    };
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
  created() {
    this.getAppointments();
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
          .get('appointments', {params})
          .then((response) => {
            this.appointments = response.data.data;
          })
          .finally(() => (this.isLoading = false));
    },
  }
};
</script>