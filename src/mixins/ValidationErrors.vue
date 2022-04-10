<script>
module.exports = {
  data() {
    return {
      errors: {}
    };
  },
  methods: {
    syncErrors(error) {
      if (typeof error !== undefined) {
        if (
            typeof error.response !== undefined &&
            // eslint-disable-next-line no-prototype-builtins
            error.hasOwnProperty('response') &&
            // eslint-disable-next-line no-prototype-builtins
            error.response.hasOwnProperty('data')
        ) {
          // eslint-disable-next-line no-prototype-builtins
          if (error.response.data.hasOwnProperty('errors')) {
            this.errors = this.normalizeArrayErrors(error.response.data.errors);
          }
        }
      }
    },
    /**
     * Uff, keine Ahnung wie man die Array Validationen aus dem Backend handeln soll z.B. name.de/name.en
     * Replaced den key sodass nur noch name und alles nach dem Punkt entfällt.
     * @param errors
     * @returns {*}
     */
    normalizeArrayErrors(errors) {
      Object.keys(errors).map(function (key) {
        let split = key.split('.');
        if (split.length > 1) {
          errors[split[0]] = errors[key];
          delete errors[key];
        }
      });
      return errors;
    },
    clearErrors() {
      this.errors = {};
    },
    hasErrors(field) {
      // eslint-disable-next-line no-prototype-builtins
      return this.errors.hasOwnProperty(field);
    },
    getError(field) {
      // eslint-disable-next-line no-prototype-builtins
      return this.errors.hasOwnProperty(field) ? this.errors[field][0] : true;
    },
    getErrors(field) {
      // eslint-disable-next-line no-prototype-builtins
      return this.errors.hasOwnProperty(field) ? this.errors[field] : [];
    },
    getErrorList() {
      let errors = Object.values(this.errors);
      return errors.flat();
    }
  }
};
</script>
