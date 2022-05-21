<script>
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export default {
  filters: {
    date: function (date, defaultVal = '-') {
      return date ? dayjs(date).format('DD.MM.YYYY') : defaultVal;
    },
    time: function (date, defaultVal = '-') {
      return date ? dayjs(date).format('HH:mm') : defaultVal;
    },
    dateTime: function (date, defaultVal = '-') {
      return date ? dayjs(date).format('DD.MM.YYYY, HH:mm') : defaultVal;
    },
    dateTimeSek: function (date, defaultVal = '-') {
      return date ? dayjs(date).format('DD.MM.YYYY HH:mm:ss') : defaultVal;
    },
    monthYear: function (date, defaultVal = '-') {
      return date ? dayjs(date).format('MMMM YYYYY') : defaultVal;
    },
    toHHMMSS: function (milli) {
      let time = new Date(milli);
      let hours = time.getUTCHours();
      let minutes = time.getUTCMinutes();
      let seconds = time.getUTCSeconds();
      return hours + ':' + minutes + ':' + seconds;
    },
  },
  methods: {
    parseDate(date, defaultVal = null) {
      return date ? dayjs(date).format('DD.MM.YYYY') : defaultVal;
    },
    today() {
      return dayjs();
    },
    addWorkingDays(date, workingDays) {
      date = dayjs(date);

      while (workingDays > 0) {
        date = date.add(1, 'day');
        if (date.day() !== 0 && date.day() !== 6) {
          workingDays--;
        }
      }

      return date;
    }
  }
};
</script>
