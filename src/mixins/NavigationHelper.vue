<script>
import {mapActions, mapGetters} from 'vuex';
import Permissions from '@/mixins/Permissions';

export default {
  mixins: [Permissions],
  data() {
    return {
      activeItem: null,
      allItems: []
    };
  },
  created() {
    this.setActiveItem();
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuth']),
    currentRouteName() {
      return this.$route.name
    },
    items() {
      return this.allItems.filter(item => {
        return this.can(item.permission) &&
            (item.auth && this.isAuth) ||
            !item.auth
      });
    }
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.showMenu = value;
      }
    },
    currentRouteName: {
      deep: true,
      immediate: true,
      handler() {
        this.setActiveItem();
      }
    },
  },
  mounted() {
    this.setActiveItem();
  },
  methods: {
    ...mapActions('auth', ['logout']),
    setActiveItem() {
      this.activeItem = null;
      this.items.forEach((item, index) => {
        if (item.action === this.currentRouteName) {
          this.activeItem = --index
        }
      })
    },
    switchView(name) {
      if (this.$route.name !== name) {
        this.$router.push({name: name});
      }
    }
  }
};
</script>
