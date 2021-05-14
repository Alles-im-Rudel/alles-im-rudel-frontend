<template>
  <div>
    <v-banner
        style="background-color: #596571"
        elevation="9"
    >
      test
    </v-banner>
    <v-parallax :src="require('../../assets/background.png')">
      <h1>Alles Im Rudel</h1>
    </v-parallax>
  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      isLoading: true
    };
  },
  computed: {},
  created() {
  },
  methods: {}
};
</script>
