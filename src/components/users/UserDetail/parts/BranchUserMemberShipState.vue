<template>
  <div>
    {{ getState }}
  </div>
</template>

<script>


export default {
  props: {
    branchUserMemberShip: {
      type: Object,
      required: true
    }
  },
  computed: {
    getState() {
      if (this.branchUserMemberShip.state === 'wantsToLeave') {
        return 'Möchte die Sparte verlassen';
      }
      if (this.branchUserMemberShip.state === 'wantsToJoin') {
        return 'Möchte der Sparte beitreten';
      }
        return 'Ist Mitglied';
    }
  }
};
</script>