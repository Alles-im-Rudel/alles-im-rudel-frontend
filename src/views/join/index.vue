<template>
  <div class="join">
    <BaseSectionTitle>
      Interesse?
    </BaseSectionTitle>

    <BaseContainer class="my-12">
      <MembershipApplication/>
    </BaseContainer>
  </div>
</template>

<script>
import MembershipApplication from './parts/MembershipApplication/MembershipApplication';

export default {
  name: 'Join',
  metaInfo: {
    title: 'Alles im Rudel | Beitritt'
  },
  components: {
    MembershipApplication
  }
};
</script>