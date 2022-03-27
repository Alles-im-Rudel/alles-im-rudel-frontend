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

export default {
  components: {
    Branches
  },
  data() {
    return {
      activeTab: null,
      leaders: [
        leaders.SILAS_BECKMANN,
        leaders.TIMM_VOLLBORN,
        leaders.NICK_NICKELS
      ]
    };
  },
};
</script>

