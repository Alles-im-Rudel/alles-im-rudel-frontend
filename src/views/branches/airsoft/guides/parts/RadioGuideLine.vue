<template>
  <div class="pb-3">
    <h3 class="text-h5">
      {{ title }}
    </h3>

    <p class="text-body-2 mt-2">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>