<template>
  <v-data-table
    :headers="tableHeaders"
    :items="sepaChanges"
    :expanded.sync="expanded"
    :loading="isLoading"
    item-key="mandate"
    show-expand
    class="elevation-1"
  >
    <template v-slot:item.mandateDate="{ item }">
      {{ item.mandateDate | date }}
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td
        :colspan="headers.length"
        class="pa-0"
      >
        <sepa-row
          :sepa-change="item"
          @reload="reload"
        />
      </td>
    </template>
  </v-data-table>
</template>

<script>

import SepaRow from '@/views/management/members/SEPA/parts/SepaRow';

export default {
  components: {
    SepaRow
  },
  props: {
    sepaChanges: {
      type: Array,
      required: true,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      expanded: [],
      tableHeaders: [
        {
          text: 'Name',
          value: 'user.bankAccount.fullName',
        },
        {text: 'IBAN', value: 'user.bankAccount.iban'},
        {text: 'Mandatsrefernz', value: 'mandate'},
        {text: 'Mandatsdatum', value: 'mandateDate'},
        {text: 'Betrag in Euro', value: 'value'},
        {text: '', value: 'data-table-expand'},
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    reload() {
      this.$emit('reload');
    },
  }
};
</script>