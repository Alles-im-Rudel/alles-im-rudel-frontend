<template>
  <v-container>
    <v-row dense justify="center">
      <v-col
          class="mt-0 pt-0"
          cols="12"
          lg="6"
          v-for="image in selectedImages"
          :key="image.id"
      >
        <v-card>
          <v-img
              v-if="onlyThumbnail"
              class="black--text align-end"
              :src="image.thumbnail"
          >
            <v-card-title style="background-color: rgba(255, 255, 255, 0.2)">
              {{ image.title }}
            </v-card-title>
          </v-img>
          <v-img
              v-else
              class="black--text align-end"
              :src="image.image"
          >
            <v-card-title style="background-color: rgba(255, 255, 255, 0.2)">
              {{ image.title }}
            </v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {cloneDeep} from "lodash";

export default {
  components: {},
  props: {
    images: {
      type: Array,
      required: true
    },
    onlyThumbnail: {
      type: Boolean,
      required: false,
      default: () => false
    },
    showOnly: {
      required: false,
      default: () => undefined
    }
  },
  computed: {
    selectedImages() {
      return cloneDeep(this.images).slice(0, this.showOnly);
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>