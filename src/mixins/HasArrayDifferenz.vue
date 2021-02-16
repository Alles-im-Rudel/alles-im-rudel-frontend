<script>
export default {
  methods: {
    /**
     * Prüft ob ein zwei Arrays Verschiedend sind
     * @returns boolean
     * @param arrayOne
     * @param arrayTwo
     */
    checkArrays(arrayOne, arrayTwo) {

      return arrayOne.some(
          (itemOne) => !arrayTwo.some((itemTwo) => itemTwo.id === itemOne.id)
      ) || arrayTwo.some(
          (arrayTwo) => !arrayOne.some((itemOne) => itemOne.id === arrayTwo.id)
      );
    }
  }
};
</script>
