<script>
export default {
  methods: {
    getNavigationGroupColor(group) {
      return this.$route.meta.group === group ? 'grey' : '';
    },
    getNavigationRouteColor(route) {
      return this.$route.name === route ? 'grey' : '';
    }
  }
};
</script>