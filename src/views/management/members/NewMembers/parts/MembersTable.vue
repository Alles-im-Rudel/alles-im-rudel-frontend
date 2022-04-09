<template>
  <v-data-table
    :loading="isLoading"
    :headers="headers"
    :items="members"
    :options.sync="options"
    :server-items-length="serverItemsLength"
    :footer-props="footerProps"
    no-data-text="Es wurden keine neu Anmeldungen gefunden"
    multi-sort
  >
    <template v-slot:item.emailVerifiedAt="{ item }">
      <v-icon
        v-if="item.emailVerifiedAt"
        color="success"
      >
        fa-check
      </v-icon>
      <v-icon
        v-else
        color="error"
      >
        fa-times
      </v-icon>
    </template>
    <template v-slot:item.birthday="{ item }">
      {{ item.birthday | date }}
    </template>
    <template v-slot:item.actions="{ item }">
      <member-accept-button
        :member="item"
        @reload="reload"
      />
    </template>
  </v-data-table>
</template>
<script>
import Permissions from '@/mixins/Permissions';
import DataTableMixin from '@/mixins/DataTableMixin';
import MemberAcceptButton from '@/views/management/members/NewMembers/parts/MemberAcceptButton';

export default {
  components: {
    MemberAcceptButton
  },
  mixins: [Permissions, DataTableMixin],
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        page: 1,
        itemsPerPage: 10,
        sortBy: ['lastName'],
        sortDesc: [false],
        totalItems: null
      })
    },
    serverItemsLength: {
      type: Number,
      required: true,
      default: 0
    },
    members: {
      type: Array,
      required: true,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      options: this.value,
      headers: [
        {
          text: 'Vorname',
          value: 'firstName'
        },
        {
          text: 'Nachname',
          value: 'lastName'
        },
        {
          text: 'E-Mail',
          value: 'email'
        },
        {
          text: 'E-Mail bestätigt',
          value: 'emailVerifiedAt'
        },
        {
          text: 'Geburstag',
          value: 'birthday'
        },
        {
          text: 'Aktionen',
          value: 'actions',
          sortable: false
        }
      ]
    };
  },
  watch: {
    options: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      }
    },
    value: {
      deep: true,
      handler(value) {
        this.options = value;
      }
    }
  },
  methods: {
    reload() {
      this.$emit('reload');
    }
  }
};
</script>
