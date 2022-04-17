<template>
  <div class="white">
    <BaseContainer v-if="user">
      <v-row
        class="mt-6"
        align="center"
      >
        <v-col cols="12">
          <h2 class="text-h5 mb-2">
            Mein Profil
          </h2>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <ProfileImage v-model="user" />
        </v-col>
        <v-col
          cols="12"
          md="9"
        >
          <ProfileInfo
            v-model="user"
            class="pl-md-3"
          />
        </v-col>
      </v-row>
      <v-alert
        border="top"
        color="eSports"
        dark
        class="mt-10"
      >
        Falls du anderweitige Profilanpassungswünsche hast, melde dich bitte per Mail bei uns unter <a
          style="color: white"
          href="mailto:allesimrudel@gmail.com"
        >allesimrudel@gmail.com</a>.
      </v-alert>
      <v-divider class="mt-3 mb-10" />
      <v-row class="mb-14">
        <v-col cols="12">
          <ProfileBranches
            v-model="user"
            @reload="getUser"
          />
        </v-col>
      </v-row>
    </BaseContainer>
  </div>
</template>

<script>
import ProfileImage from '@/views/profile/parts/ProfileImage';
import ProfileInfo from '@/views/profile/parts/ProfileInfo';
import ProfileBranches from '@/views/profile/parts/ProfileBranches/ProfileBranches';

export default {
  name: 'Profile',
  components: {ProfileBranches, ProfileImage, ProfileInfo},
  data() {
    return {
      user: null,
      isLoading: false
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      console.log('index.vue');
      this.isLoading = true;
      window.axios
          .get('profile')
          .then((response) => {
            this.user = response.data.data;
          })
          .finally(() => (this.isLoading = false));
    },
  }
};
</script>