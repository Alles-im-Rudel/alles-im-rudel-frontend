<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            IBAN
          </th>
          <th class="text-left">
            Mandatsrefernz
          </th>
          <th class="text-left">
            Mandatsdatum
          </th>
          <th class="text-left">
            Abbuchungsdatum
          </th>
          <th class="text-left">
            Betrag in Euro
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="member in members"
          :key="member.id"
        >
          <td>{{ member.name }}</td>
          <td>{{ member.iban }}</td>
          <td>{{ member.mandate }}</td>
          <td>{{ member.mandateDate | date }}</td>
          <td>{{ member.sepaDate | date }}</td>
          <td>{{ member.value }}</td>
          <td />
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>

export default {

  props: {
    members: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {}
};
</script>