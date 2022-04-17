<template>
  <div>
    <h2 class="text-h5 mb-2">
      Meine Sparten
    </h2>
    <div class="profile-branches">
      <Branches
        v-model="user.branchUserMemberShips"
        @reload="reload"
      />
      <v-row
        class="mt-4"
        dense
      >
        <v-col
          cols="6"
          md="3"
        >
          Aktuelle monatliche Beiträge: <strong>{{ currentCost }} €</strong>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Branches from '@/views/profile/parts/ProfileBranches/parts/Branches';

export default {
  components: {Branches},
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.value
    };
  },
  computed: {
    currentCost() {
      return this.user.branchUserMemberShips.reduce((acc, branchUserMemberShip) => {
        if(branchUserMemberShip.state === 'isMember') {
          acc += branchUserMemberShip.branch.price;
        }
        return acc;
      }, 0);
    },
  },
  watch: {
    value: {
      handler(value) {
        this.user = value;
      },
      deep: true,
    },
  },
  methods: {
    reload() {
      this.$emit('reload');
    }
  },
};
</script>