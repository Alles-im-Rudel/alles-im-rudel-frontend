<template>
  <div class="join">
    <BaseSectionTitle>
      Interesse?
    </BaseSectionTitle>

    <BaseContainer class="py-8">
      <MembershipApplication />
    </BaseContainer>
  </div>
</template>

<script>
import MembershipApplication from './parts/MembershipApplication/MembershipApplication';

export default {
  name: 'Join',
  components: {
    MembershipApplication
  }
};
</script>