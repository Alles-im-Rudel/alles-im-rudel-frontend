<template>
  <v-btn
    v-if="canSeeButton"
    :loading="isLoading"
    color="success"
    @click="getDownload"
  >
    <v-icon left>
      fa-download
    </v-icon>Excel Download
  </v-btn>
</template>

<script>
import Permissions from '@/mixins/Permissions';

export default {
  mixins: [Permissions],
  props: {
    filters: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    canSeeButton() {
      return this.can('users.download');
    }
  },
  methods: {
    getDownload() {
      this.isLoading = true;
      const params = {
        search: this.filters.search,
        branchId: this.filters.branchId,
      };
      window.axios({
        url: '/users/download',
        method: 'GET',
        responseType: 'blob',
        params: params
      })
          .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'users.xlsx');
            document.body.appendChild(link);
            link.click();
          }).finally(() => this.isLoading = false);
    }
  }
};
</script>
