<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
            flat
        >
          <v-btn
              outlined
              class="mr-4"
              color="grey darken-2"
              @click="setToday"
          >
            Heute
          </v-btn>
          <v-btn
              fab
              text
              small
              :loading="isLoading"
              color="grey darken-2"
              @click="prev"
          >
            <v-icon small>
              fa-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
              fab
              text
              small
              :loading="isLoading"
              color="grey darken-2"
              @click="next"
          >
            <v-icon small>
              fa-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer />
          <appointment-create-button @reload="$emit('reload')" />
          <v-spacer />
          <v-menu
              bottom
              right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  outlined
                  color="grey darken-2"
                  v-bind="attrs"
                  v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  fa-chevron-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Tag</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Woche</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Monat</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            event-name="title"
            event-start="startAt"
            event-end="endAt"
            event-timed="isAllDay"
            :events="events"
            :event-color="getEventColor"
            :type="type"
            locale="de"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
        />
        <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
        >
          <appointment-birthday-card
              v-if="selectedEvent.isBirthday"
              :appointment="selectedEvent"
              @close="selectedOpen = false"
          />
          <appointment-card
              v-else
              :selected-appointment="selectedEvent"
              @reload="$emit('reload')"
              @close="selectedOpen = false"
          />
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
import AppointmentCreateButton from "@/components/ appointment/AppointmentCreateButton";
import AppointmentCard from "@/components/ appointment/AppointmentCard";
import AppointmentBirthdayCard from "@/components/ appointment/AppointmentBirthdayCard";

export default {
  components: {
    AppointmentCreateButton,
    AppointmentCard,
    AppointmentBirthdayCard
  },
  props: {
    value: {
      type: Object,
      required: true
    },
    appointments: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Monat',
        week: 'Woche',
        day: 'Tag'
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: this.appointments,
      range: {
        month: null,
        year: null
      }
    }
  },
  mounted() {
    this.$refs.calendar.checkChange()
  },
  watch: {
    appointments: {
      handler(value) {
        this.events = value
      }
    },
    range: {
      handler(value) {
        this.$emit('input', value);
      }
    },
  },
  methods: {
    viewDay({date}) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = '';
      this.type = 'month'
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent({nativeEvent, event}) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange(range) {
      this.range = {
        month: range.start.month,
        year: range.start.year
      }
      this.events = this.appointments
    },
  },
}
</script>