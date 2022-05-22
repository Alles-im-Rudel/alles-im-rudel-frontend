<template>
  <v-card>
    <v-card-title>
      Team {{ value.name }}
      <v-spacer />
      <v-btn
        icon
        @click="$emit('close')"
      >
        <v-icon>fa-times</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
        >
          <v-text-field
            v-model="clashTeam.name"
            label="Teamname"
          />
        </v-col>
        <v-col
          v-for="clashMember in clashTeam.clashMembers"
          :key="clashMember.id"
          cols="12"
        >
          <BaseCard>
            <v-card-title>
              {{ clashMember.clashTeamRole.name }}:
              {{ clashMember.user.fullName }}
              <v-spacer />
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    color="error"
                    v-on="on"
                    @click="deleteMember(clashMember)"
                  >
                    <v-icon>fa-trash-alt</v-icon>
                  </v-btn>
                </template>
                <span>Member entfernen</span>
              </v-tooltip>
            </v-card-title>
          </BaseCard>
        </v-col>
      </v-row>
      <clash-add-member
        v-model="newClashMembers"
        :clash-team="clashTeam"
      />
      <v-row>
        <v-card-title v-if="newClashMembers.length > 0">
          Neue Member:
        </v-card-title>
        <v-col
          v-for="newClashMember in newClashMembers"
          :key="newClashMember.user.id"
          cols="12"
        >
          <BaseCard>
            <v-card-title>
              {{ newClashMember.clashTeamRole.name }}:
              {{ newClashMember.user.fullName }}
              <v-spacer />
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    color="error"
                    v-on="on"
                    @click="deleteNewMember(newClashMember)"
                  >
                    <v-icon>fa-trash-alt</v-icon>
                  </v-btn>
                </template>
                <span>Member entfernen</span>
              </v-tooltip>
            </v-card-title>
          </BaseCard>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider />
    <reset-save-action
      :can-submit="canSubmit"
      :is-loading="isLoading"
      :has-changes="hasChanges"
      @submit="submit"
      @clear="clear"
    />
  </v-card>
</template>
<script>
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';
import ClashAddMember from '@/components/clash/ClashAddMember';
import {cloneDeep} from 'lodash';

export default {
  components: {
    ResetSaveAction,
    ClashAddMember
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      clashTeam: cloneDeep(this.value),
      newClashMembers: [],
      deletedMembers: []
    };
  },
  computed: {
    canSubmit() {
      return !!this.clashTeam.name && this.hasChanges;
    },
    hasChanges() {
      return this.clashTeam.name !== this.value.name ||
          this.deletedMembers.length > 0 ||
          this.newClashMembers.length > 0;
    }
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.clashTeam = cloneDeep(value);
      }
    },
  },
  methods: {
    submit() {
      this.isLoading = true;
      const params = {
        deletedMemberIds: this.deletedMembers,
        name: this.clashTeam.name,
        leaderId: this.clashTeam.leaderId,
        newMembers: this.newClashMembers.map(member => ({
          role: member.clashTeamRole.name,
          userId: member.user.id
        }))
      };
      window.axios
          .put(`clash/${this.clashTeam.id}`, params)
          .then((response => {
            this.$root.$snackbar.open(response.data.message);
            this.clear();
            this.$emit('updated');
            this.$emit('close');
          }))
          .finally(() => this.isLoading = false);
    },
    deleteMember(clashMember) {
      this.deletedMembers.push(clashMember.id);
      this.clashTeam.clashMembers.splice(
          this.clashTeam.clashMembers.findIndex((m) => m.id === clashMember.id), 1
      );
    },
    deleteNewMember(clashMember) {
      this.newClashMembers.splice(
          this.newClashMembers.findIndex((m) => m.user.id === clashMember.user.id), 1
      );
    },
    clear() {
      this.clashTeam = cloneDeep(this.value);
      this.newClashMembers = [];
      this.deletedMembers = [];
    }
  }
};
</script>