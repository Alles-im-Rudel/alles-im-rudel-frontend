<script>
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export default {
  filters: {
    boolIcon: function (bool) {
      return bool ? 'fa-check' : 'fa-times';
    },
  }
};
</script>
