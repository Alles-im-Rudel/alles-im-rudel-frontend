<script>
export default {
  methods: {
    pushRouteTo(name, params) {
      this.$router.push({
        name: name,
        params: params
      })
        .catch(() => {
          window.scrollTo(0, 0);
        });
    }
  }
};
</script>