<template>
  <div>
    <BaseSectionTitle>
      Der Vorstand
    </BaseSectionTitle>
    <BaseContainer>
      <VueAnimation type="fade-in">
        <v-row class="justify-center mt-10">
          <v-col
            v-for="(leader, index) in leaders"
            :key="index"
            cols="12"
            sm="4"
          >
            <BaseLeaderCard :leader="leader" />
          </v-col>
        </v-row>
      </VueAnimation>
    </BaseContainer>

    <BaseSectionTitle class="mt-14">
      Unsere Partner
    </BaseSectionTitle>
    <div>
      <PartnerLogos class="mt-14" />
    </div>

    <BaseSectionTitle class="mt-14">
      Unsere Sparten
    </BaseSectionTitle>
    <div>
      <Branches />
    </div>
  </div>
</template>

<script>
import Branches from '@/views/home/parts/Branches';
import leaders from '@/constants/leaders';
import PartnerLogos from '@/components/partners/PartnerLogos';

export default {
  components: {
    PartnerLogos,
    Branches
  },
  data() {
    return {
      leaders: [
        leaders.SILAS_BECKMANN,
        leaders.TIMM_VOLLBORN,
        leaders.NICK_NICKELS
      ]
    };
  },
};
</script>