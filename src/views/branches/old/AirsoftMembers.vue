<template>
  <v-row class="justify-center">
    <v-col
      v-for="(member,index) in members"
      :key="index"
      class="person-container"
      cols="12"
      lg="2"
      md="3"
      sm="4"
    >
      <v-img :src="'/assets/airsoft/members/' + member.image" />
      <div class="person-overlay">
        <div class="name-container text-h5">
          {{ member.name }}
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },
        {
          name: 'Nick Nickels',
          image: '1.jpg'
        },

      ]
    };
  }
};
</script>

<style scoped lang="scss">
.person-container {
  position: relative;

  .person-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.3s ease;
    background: #fff6;
    display: flex;
    justify-content: center;
    align-items: center;

    //noinspection ALL
    .name-container {
      user-select: none;
      width: min-intrinsic;       /* old Chrome, Safari */
      width: -webkit-min-content; /* less old Chrome, Safari */
      width: -moz-min-content;    /* current Firefox */
      width: min-content;         /* current Chrome, Safari; not IE or Edge */
    }
  }

  &:hover .person-overlay {
    opacity: 1;
  }
}
</style>