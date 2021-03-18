<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <base-card>
          <v-card-title>
            {{ airsoftView.title }}
            <v-spacer />
            <view-edit-button :view-id="2" :label="airsoftView.title+' bearbeiten'" @reload="getAirsoftView" />
          </v-card-title>
          <v-divider />
          <div class="ql-snow">
            <div class="ql-editor" v-html="airsoftView.body" />
          </div>
          <vue-editor style="display:none" />
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ViewEditButton from "@/components/views/ViewEditButton";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Airsoft',
  components: {
    ViewEditButton
  },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapGetters('view', ['airsoftView'])
  },
  created() {
    this.getAirsoftView();
  },
  methods: {
    ...mapActions('view', ['getAirsoftView']),
  }
};
</script>
