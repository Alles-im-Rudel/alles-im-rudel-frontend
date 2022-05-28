<template>
  <div class="image-slider">
    <div
      v-for="(slide, index) in images"
      v-show="imageIndex === index"
      :key="index"
      class="image-slider__slide"
    >
      <div class="image-slider__background">
        <img
          :src="slide"
          :alt="slide"
        >
      </div>

      <div class="image-slider__content">
        <div
          class="image-slider__control image-slider__left"
          @click="manualSlide(-1)"
        >
          <div />
        </div>

        <div class="image-slider__image">
          <img
            :src="slide"
            :alt="slide"
          >
        </div>

        <div
          class="image-slider__control image-slider__right"
          @click="manualSlide(1)"
        >
          <div />
        </div>
      </div>
    </div>

    <div class="image-slider__index">
      <div
        v-for="(slide, index) in images"
        :key="index"
        class="image-slider__dot"
        :class="index === imageIndex ? 'image-slider__dot--active' : ''"
        @click="manualToSlide(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    },
    auto: {
      type: Boolean,
      required: false,
      default: true
    },
    autoTimeout: {
      type: Number,
      required: false,
      default: 3000
    }
  },
  data() {
    return {
      imageIndex: 0,
      manualInteraction: false
    };
  },
  created() {
    if (this.auto) {
      setTimeout(this.doAutoSlide, this.autoTimeout);
    }
  },
  methods: {
    doAutoSlide() {
      if (this.manualInteraction) {
        return;
      }

      this.doSlide(1);
      if (this.auto) {
        setTimeout(this.doAutoSlide, this.autoTimeout);
      }
    },
    manualToSlide(slide) {
      this.manualInteraction = true;
      this.imageIndex = slide;
    },
    doSlide(add) {
      let newIndex = this.imageIndex + add;

      if (newIndex < 0) {
        newIndex = this.images.length - 1;
      } else if (newIndex > this.images.length - 1) {
        newIndex = 0;
      }

      this.imageIndex = newIndex;
    },
    manualSlide(add) {
      this.manualInteraction = true;
      this.doSlide(add);
    }
  }
};
</script>

<style lang="scss">
.image-slider {
  position: relative;
  width: 100%;

  .image-slider__index {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(0, -50%);
    z-index: 5;
    display: flex;

    .image-slider__dot {
      min-width: 16px;
      min-height: 16px;
      margin: 0 4px;
      background: #fff;
      border-radius: 50%;
      opacity: 0.3;
      cursor: pointer;

      &.image-slider__dot--active {
        opacity: 1;
      }
    }
  }

  .image-slider__slide {
    position: relative;
    width: 100%;
    background: #000;
    overflow: hidden;

    .image-slider__background {
      position: relative;
      width: 100%;
      height: 700px;
      overflow: hidden;
      filter: blur(15px);

      img {
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .image-slider__content {
      width: 95%;
      max-width: 800px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;

      .image-slider__image {
        img {
          width: 100%;
        }
      }

      .image-slider__control {
        min-width: 34px;
        min-height: 34px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.6);
        cursor: pointer;

        div {
          min-width: 12px;
          min-height: 12px;
          border-left: 3px solid #222;
          border-top: 3px solid #222;
        }

        &.image-slider__left {
          margin-right: 6px;

          div {
            transform: rotate(-45deg);
            margin-left: 4px;
          }
        }

        &.image-slider__right {
          margin-left: 6px;

          div {
            transform: rotate(135deg);
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>