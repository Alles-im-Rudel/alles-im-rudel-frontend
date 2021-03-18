<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <base-card>
          <v-card-title>
            {{ homeView.title }}
            <v-spacer />
            <view-edit-button :view-id="1" :label="homeView.title+' bearbeiten'" @reload="getHomeView" />
          </v-card-title>
          <v-divider />
          <div class="ql-snow">
            <div class="ql-editor" v-html="homeView.body" />
          </div>
          <vue-editor style="display:none"/>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ViewEditButton from "@/components/views/ViewEditButton";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Home',
  components: {
    ViewEditButton
  },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapGetters('view', ['homeView'])
  },
  created() {
    this.getHomeView();
  },
  methods: {
    ...mapActions('view', ['getHomeView']),
  }
};
</script>
