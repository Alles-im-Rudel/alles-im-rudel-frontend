<template>
  <v-navigation-drawer
      v-model="showMenu"
      clipped
      app
      class="elevation-5"
  >
    <management v-if="showManagement" />
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from 'vuex';
import Permissions from '@/mixins/Permissions';
import Management from "@/components/navigation/navigationDrawerParts/Management";

export default {
  components: {
    Management,
  },
  mixins: [Permissions],
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      showMenu: this.value,
    };
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuth']),
    currentRouteGroup() {
      return this.$route.meta.group
    },
    showManagement() {
      return this.currentRouteGroup === 'management'
    },
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.showMenu = value;
      }
    },
    showMenu: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      },
    }
  }
};
</script>
