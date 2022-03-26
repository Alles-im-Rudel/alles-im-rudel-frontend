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
import dayjs from 'dayjs';
import Branches from '@/views/home/parts/Branches';

export default {
  components: {
    Branches
  },
  data() {
    return {
      activeTab: null,
      leaders: [
        {
          fullName: 'Silas Beckmann',
          image: '/assets/leading/left.png',
          text: dayjs().diff('1998-04-20', 'years') + ' Jahre alt',
          socials: {
            instagram: 'silas098',
            snapchat: 'silas098',
            linkedin: 'silas-beckmann'
          }
        },
        {
          fullName: 'Timm Vollborn',
          image: '/assets/leading/center.png',
          text: dayjs().diff('1999-01-30', 'years') + ' Jahre alt',
          socials: {
            instagram: 't.vollborn',
            snapchat: 't.vollborn',
            linkedin: 'timm-vollborn'
          }
        },
        {
          fullName: 'Nick Nickels',
          image: '/assets/leading/right.png',
          text: dayjs().diff('1998-12-28', 'years') + ' Jahre alt',
          socials: {
            instagram: 'air_nj',
            snapchat: 'nickels_nick',
            linkedin: 'nick-nickels'
          }
        },
      ]
    };
  },
};
</script>

