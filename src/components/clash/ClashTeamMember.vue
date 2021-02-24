<template>
  <base-card>
    <v-card-title>{{ clashMember.user.username }}</v-card-title>
    <v-card-text>
      VOll nice und so
    </v-card-text>
  </base-card>
</template>

<script>

export default {
  components: {},
  props: {
    clashMember: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>