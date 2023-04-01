<template>
  <div class="mobile-navigation-button py-3">
    <a
      v-if="item.href"
      :class="classes"
      :href="item.href"
    >
      <span class="mobile-navigation-button__name">
        {{ item.name }}
      </span>
    </a>

    <router-link
      v-else
      :to="{name: item.route}"
      :class="classes"
    >
      <span class="mobile-navigation-button__name">
        {{ item.name }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      classes: 'text-body-1 text-decoration-none text-uppercase py-2 text-center'
    };
  },
  methods: {
    onClick() {
      if (this.item.href) {
        window.location.href = this.item.href;
        return;
      }

      this.pushRouteTo(this.item.route);
    }
  }
};
</script>

<style lang="scss">
.mobile-navigation-button {
  &__name {
    display: inline-block;
    width: 100%;
  }
}
</style>
