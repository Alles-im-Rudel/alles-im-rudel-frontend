<template>
  <v-container v-if="user">
    <v-card>
      <v-card-text>
        <v-alert
          border="top"
          color="info"
          dark
        >
          Alle Änderungen werden erst zum Ende des Folge Monats wirksam! <br>
          Wenn du dem Verein austreten möchtest wende dich bitte per Email an den Vorstand <a
            style="color: white;"
            href="mailto:allesimrudel@gmail.com"
          >allesimrudel@gmail.com</a>
        </v-alert>
      </v-card-text>
      <v-card-text>
        <BranchSelect
          v-model="user.memberShip"
        />
      </v-card-text>
      <v-card-actions class="px-10">
        <v-spacer />
        bisherige Monatliche: {{ monthlyCosts }}€
      </v-card-actions>
      <v-card-actions
        v-if="monthlyCosts !== newMonthlyCosts"
        class="px-10"
      >
        <v-spacer />
        <strong>neue Monatliche: {{ newMonthlyCosts }}€</strong>
      </v-card-actions>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="success"
          :loading="isLoading"
          :disabled="!canSubmit"
          @click="submit"
        >
          Speichern
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import HasArrayDifferenz from '@/mixins/HasArrayDifferenz';
import {cloneDeep} from 'lodash';
import BranchSelect from '@/components/branch/BranchSelect/BranchSelect';

export default {
  name: 'BranchesEdit',
  components: {
    BranchSelect
  },
  mixins: [HasArrayDifferenz],
  data() {
    return {
      user: {
        memberShip: {
          branches: []
        }
      },
      originalUser: {
        memberShip: {
          branches: []
        }
      },
      isLoading: false
    };
  },
  computed: {
    canSubmit() {
      return this.checkArrays(
          this.originalUser.memberShip.branches,
          this.user.memberShip.branches
      );
    },
    hasChanges() {
      return this.checkArrays(
          this.originalUser.memberShip.branches,
          this.user.memberShip.branches
      );
    },
    monthlyCosts() {
      return this.originalUser.memberShip.branches.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
    },
    newMonthlyCosts() {
      return this.user.memberShip.branches.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
    }
  },
  watch: {},
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.isLoading = true;
      window.axios
          .get('profile')
          .then((response) => {
            this.user = cloneDeep(response.data.data);
            this.originalUser = cloneDeep(response.data.data);
          })
          .finally(() => (this.isLoading = false));
    },
    submit() {
      this.isLoading = true;
      const branchIds = this.user.memberShip.branches.map(item => {
        return item.id;
      });
      const params = {branchIds};
      window.axios
          .put('profile/branches', params)
          .then((response) => {
            this.user = cloneDeep(response.data.data);
            this.originalUser = cloneDeep(response.data.data);
            this.$root.$snackbar.open(response.data.message);
          })
          .finally(() => (this.isLoading = false));
    },
    clear() {
      this.user = cloneDeep(this.originalUser);
    },

  }
};
</script>