<template>
  <div>
    <BaseSectionTitle>
      <div class="text-body-1 pb-6">
        Alles im Rudel. Ein Team.
      </div>
      Das sind wir.
    </BaseSectionTitle>

    <BaseContainer class="my-14">
      <PlayerGallery
        :entries="airsoftMembers"
      />
    </BaseContainer>
  </div>
</template>

<script>
import PlayerGallery from '@/components/PlayerGallery/PlayerGallery.vue';
import airsoftMembers from '@/constants/airsoftMembers';

export default {
  components: {PlayerGallery},
  data() {
    return {
      airsoftMembers: airsoftMembers,
    };
  }
};
</script>