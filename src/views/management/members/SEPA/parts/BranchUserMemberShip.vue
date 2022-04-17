<template>
  <v-card
    flat
    :color="color"
  >
    <v-card-text>
      <div class="flexBox">
        <div>
          {{ branchUserMemberShip.branch.name }}
          {{ branchUserMemberShip.branch.price }}&nbsp;€
          {{ branchUserMemberShip.sepaDate | date }}
        </div>
        <set-exported-button
          :branch-user-member-ship="branchUserMemberShip"
          @reload="reload"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>

import SetExportedButton from '@/views/management/members/SEPA/parts/SetExportedButton';

export default {
  components: {SetExportedButton},
  props: {
    branchUserMemberShip: {
      type: Object,
      required: true,
      default: () => {
      },
    },
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    color() {
      if (this.branchUserMemberShip.state === 'isMember') {
        return 'success';
      }
      return 'warning';
    }
  },
  watch: {},
  created() {
  },
  methods: {
    reload() {
      this.$emit('reload');
    },
  }
};
</script>

<style>
.flexBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>