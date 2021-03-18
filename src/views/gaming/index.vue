<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <base-card>
          <v-card-title>
            {{ gamingView.title }}
            <v-spacer />
            <view-edit-button :view-id="3" :label="gamingView.title+' bearbeiten'" @reload="getGamingView" />
          </v-card-title>
          <v-divider />
          <div class="ql-snow">
            <div class="ql-editor" v-html="gamingView.body" />
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
  name: 'Gaming',
  components: {
    ViewEditButton
  },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapGetters('view', ['gamingView'])
  },
  created() {
    this.getGamingView();
  },
  methods: {
    ...mapActions('view', ['getGamingView']),
  }
};
</script>
