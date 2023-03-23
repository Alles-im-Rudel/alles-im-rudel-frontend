<template>
  <div class="home-branches">
    <div
      v-for="(branch, index) in branches"
      :key="index"
      class="branch-container"
    >
      <div class="branch-content">
        <BaseContainer>
          <h3 class="text-h2 text-md-h1">
            {{ branch.title }}
          </h3>
          <p
            class="text-h5 mt-6"
            v-html="branch.text"
          />
          <v-btn
            color="primary"
            class="mt-4"
            @click="pushRouteTo(branch.branch)"
          >
            Mehr erfahren
          </v-btn>
        </BaseContainer>
      </div>
      <div class="branch-background">
        <img
          :src="branch.img"
          :alt="branch.title"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      branches: [
        {
          branch: 'airsoft',
          img: '/assets/home/airsoft.jpg',
          title: 'Airsoft',
          text: 'Wir spielen gerne Airsoft. Und wir würden uns freuen, wenn wir dich auch dafür begeistern könnten.<br>Schau doch mal bei unserer Sparte Airsoft vorbei!'
        },
        {
          branch: 'gaming',
          img: '/assets/home/gaming.jpg',
          title: 'Gaming',
          text: 'Wir zocken gerne, sowohl casual als auch kompetitiv. Und wir würden uns freuen, wenn wir dich auch dafür begeistern könnten.<br>Schau doch mal bei unserer Sparte Gaming vorbei!'
        },
      ]
    };
  }
};
</script>

<style lang="scss">
.home-branches {
  overflow: hidden;

  .branch-container {
    position: relative;
    height: 600px;

    .branch-background {
      overflow: hidden;

      img {
        min-width: calc(100% + 24px);
        min-height: calc(100% + 24px);
        margin: -12px 0 0 -12px;
        filter: blur(12px);
      }
    }

    .branch-content {
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      color: #ccc;
      text-align: left;

      .branch-title {
        color: #fff;
      }
    }
  }
}
</style>
