<template>
  <div class="base-leader-card">
    <div class="leader-image">
      <img
        :src="leader.image"
        :alt="leader.fullName"
      >
    </div>
    <div class="text-h5 text-center mt-4">
      {{ leader.fullName }}
    </div>
    <div class="text-body-2 text--primary text-center mt-2 text-pre-line">
      {{ leader.text }}
    </div>
    <BaseSocials
      class="text-center mt-2"
      :instagram="leader.socials.instagram"
      :snapchat="leader.socials.snapchat"
      :linkedin="leader.socials.linkedin"
    />
  </div>
</template>

<script>
export default {
  props: {
    leader: {
      type: Object,
      required: true,
      default: () => ({
        fullName: null,
        image: null,
        text: null,
        socials: {
          instagram: null,
          snapchat: null,
          linkedin: null,
        }
      })
    }
  }
};
</script>

<style lang="scss">
.base-leader-card {
  .leader-image {
    img {
      width: 100%;
    }
  }
}
</style>