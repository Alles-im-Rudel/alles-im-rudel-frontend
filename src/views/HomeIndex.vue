<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12">
                <base-card>
                    <v-card-title>Alles Im Rudel</v-card-title>
                    <v-card-text>
                       Voll Startseite und so
                      <div class="effects size-fade-in">Test</div>
                    </v-card-text>
                </base-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        isLoading: true
      };
    },
    methods: {}
  };
</script>
