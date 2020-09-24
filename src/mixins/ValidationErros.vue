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
            error.hasOwnProperty('response') &&
            error.response.hasOwnProperty('data')
        ) {
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
      return this.errors.hasOwnProperty(field);
    },
    getError(field) {
      return this.errors.hasOwnProperty(field) ? this.errors[field][0] : true;
    },
    getErrors(field) {
      return this.errors.hasOwnProperty(field) ? this.errors[field] : [];
    },
    getErrorList() {
      let errors = Object.values(this.errors);
      return errors.flat();
    }
  }
};
</script>
