<template>
  <v-dialog
    v-model="isVisible"
    :max-width="options.width"
    @keydown.esc="close"
  >
    <v-card>
      <v-toolbar
        dark
        :color="color"
        dense
        flat
      >
        <v-toolbar-title class="title white--text">
          <span>{{ title }}</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text v-show="!!message">
        <p class="subtitle-2 mt-3">
          {{ message }}
        </p>
      </v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer />
        <v-btn
          :color="color"
          large
          @click.native="close"
        >
          {{ options.confirmText }}
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
    export default {
        data() {
            return {
                isVisible: false,
                resolve: null,
                message: null,
                title: null,
                color: 'primary',
                options: {
                    width: 450,
                    confirmText: 'Ok'
                }
            };
        },
        methods: {
            open(title, message, color = 'primary') {
                this.isVisible = true;
                this.title = title;
                this.message = message;
                this.color = color;

                return new Promise(resolve => {
                    this.resolve = resolve;
                });
            },
            close() {
                this.resolve(true);
                this.isVisible = false;
            }
        }
    };
</script>
<style scoped></style>
