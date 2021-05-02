<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <base-card>
          <v-card-title>
            Mitglieder
            <v-spacer />
            <v-text-field
                append-icon="fa-search"
                v-model="search"
                label="Suche"
                clearable
                @keydown.enter="searchChanged"
                @click:append="searchChanged"
                @click:clear="searchChanged"
            />
          </v-card-title>
        </base-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4"
             v-for="member in members"
             :key="member.id"
      >
        <base-card height="100%">
          <v-card-title>
            {{ member.fullName }}
            <v-spacer />
            <user-profile-button :username="member.username" />
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" lg="4">
                <v-img
                    v-if="member.thumbnail"
                    class="black--text align-end"
                    :src="member.thumbnail.thumbnail"
                >
                </v-img>
              </v-col>
              <v-col cols="12" lg="8">
                <v-list-item>
                  <v-list-item-content class="text-left">
                    <v-list-item-subtitle class="text-h6">Benutzername: {{ member.username }}</v-list-item-subtitle>
                    <v-list-item-subtitle class="text-h6">Alter: {{ member.age }}</v-list-item-subtitle>
                    <v-list-item-subtitle class="text-h6">
                      Benutzergruppen:
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-chip
                    class="ma-1"
                    dark
                    v-for="userGroup in member.userGroups"
                    :key="userGroup.id"
                    :color="userGroup.color"
                >
                  {{ userGroup.displayName }}
                </v-chip>
              </v-col>
            </v-row>
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
    <infinite-loader
        :is-loading="isLoading"
        :end="allMembersLoaded"
        loaded-text="Alle Mitglieder geladen..."
        @load="startGetMembers"
    />
  </v-container>
</template>
<script>
import {debounce} from "lodash";
import InfiniteLoader from "@/components/infiniteLoader/InfiniteLoader";
import BaseCard from "@/components/base/BaseCard";
import UserProfileButton from "@/components/users/UserProfileButton";

export default {
  name: 'Members',
  components: {
    BaseCard,
    InfiniteLoader,
    UserProfileButton
  },
  data() {
    return {
      isLoading: false,
      members: [],
      page: 1,
      search: null,
      totalItems: null
    };
  },
  computed: {
    allMembersLoaded() {
      return this.totalItems === this.members.length
    }
  },
  created() {
    this.startGetMembers();
  },
  methods: {
    startGetMembers() {
      if (this.allMembersLoaded) {
        return;
      }
      this.isLoading = true;
      this.getMembers()
    },
    getMembers: debounce(function () {
      const params = {
        page: this.page,
        search: this.search
      };
      window.axios
          .get(`members`, {params})
          .then((response) => {
            if (response.data.data.length) {
              this.page += 1;
              this.members.push(...response.data.data)
              this.totalItems = response.data.meta.total
            }
          })
          .finally(() => (this.isLoading = false));
    }, 500),
    searchChanged() {
      this.page = 1;
      this.members = [];
      this.totalItems = null;
      this.startGetMembers();
    },
  }
};
</script>
