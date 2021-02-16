<script>
export default {
  data() {
    return {
      elements: []
    };
  },
  mounted() {
    this.applyScrollEffects();
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleEffects);
  },
  methods: {
    applyScrollEffects() {
      document.addEventListener('scroll', this.handleEffects);
      this.handleEffects();
    },
    effectElementIsVisible(el) {
      let rect = el.getBoundingClientRect();
      let elemTop = rect.top + 120;
      let elemBottom = rect.bottom;
      return elemTop < window.innerHeight && elemBottom >= 0;
    },
    handleEffects() {
      this.elements = Array.from(document.getElementsByClassName('effects'));

      for (let i = 0; i < this.elements.length; i++) {
        let elem = this.elements[i];
        if (!elem.classList.contains('applied') && this.effectElementIsVisible(elem)) {
          elem.classList.add('applied');
        }
      }
    }
  }
};
</script>