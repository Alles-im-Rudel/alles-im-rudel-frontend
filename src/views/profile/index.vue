<template>
  <div class="white pb-6">
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
        color="gaming"
        dark
        class="mt-10"
      >
        Falls du anderweitige Profilanpassungswünsche hast, melde dich bitte per Mail bei uns unter <a
          style="color: white"
          href="mailto:anfragen@allesimrudel.de"
        >anfragen@allesimrudel.de</a>.
      </v-alert>
      <v-divider class="mt-10 mb-6" />
      <ProfileBranches
        v-model="user"
        @reload="getUser"
      />
      <v-divider class="mt-10 mb-6" />
      <MinecraftPlayers class="mb-14" />
    </BaseContainer>
  </div>
</template>

<script>
import ProfileImage from '@/views/profile/parts/ProfileImage';
import ProfileInfo from '@/views/profile/parts/ProfileInfo';
import ProfileBranches from '@/views/profile/parts/ProfileBranches/ProfileBranches';
import MinecraftPlayers from '@/views/profile/parts/MinecraftPlayers/MinecraftPlayers';

export default {
  name: 'Profile',
  components: {MinecraftPlayers, ProfileBranches, ProfileImage, ProfileInfo},
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