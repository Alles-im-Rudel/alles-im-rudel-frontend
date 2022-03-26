<template>
  <BaseCard flat>
    <v-card-title class="justify-center py-16 greyBlue white--text">
      <h2 class="text-h2">
        <slot />
      </h2>
    </v-card-title>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/base/BaseCard';

export default {
  name: 'BaseSectionTitle',
  components: {BaseCard},
};
</script>
