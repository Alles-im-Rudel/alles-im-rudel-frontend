<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters('auth', ['permissions']),
  methods: {
    /**
     * Prüft, ob der Nutzer über die übergebene Berechtigung verfügt.
     * @returns boolean
     * @param permission
     */
    can(permission) {
      return (
          permission === undefined ||
          this.permissions.some((p) => p.name === permission)
      );
    }
  }
};
</script>
