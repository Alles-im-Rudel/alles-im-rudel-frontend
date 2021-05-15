<template>
  <v-hover v-slot="{ hover }">
    <v-card height="100%" tile @mouseover="active = branch.id">
      <v-img
          class="align-end"
          max-height="400"
          :src="branch.img"
      >
        <v-expand-transition>
          <v-card
              tile
              v-if="hover"
              class="transition-in-out"
              color="greyBlue"
              style="color: white"
          >
            <v-card-title class="justify-center">
              <h4 class="text-h4">{{ branch.title }}</h4>
            </v-card-title>
            <v-card-text style="color: white">
              <h5 class="text-h5">{{ branch.user.fullName }}</h5>
              <div class="text-body-1">{{ branch.user.text }}</div>
            </v-card-text>
          </v-card>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>
<script>

export default {
  components: {},
  props: {
    value: {
      required: true,
      type: Number
    },
    branch: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      active: this.value
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.active = value
      }
    },
    active: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      },
    }
  },
  computed: {},
  created() {
  },
  methods: {}
};
</script>