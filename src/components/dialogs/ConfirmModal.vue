<template>
    <v-dialog
            v-model="isVisible"
            :max-width="options.width"
            @keydown.esc="cancel"
    >
        <v-card>
            <v-toolbar dark :color="color" dense flat>
                <v-toolbar-title class="headline white--text">
                    {{ title }}
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text v-show="!!message">
                <p class="subtitle-2 mt-3">{{ message }}</p>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn @click.native="cancel">
                    {{ options.cancelText }}
                </v-btn>
                <v-btn :color="color" @click.native="confirm">
                    {{ options.confirmText }}
                </v-btn>
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
                reject: null,
                message: null,
                title: null,
                color: 'primary',
                options: {
                    width: 450,
                    confirmText: 'Ja',
                    cancelText: 'Abbrechen'
                }
            };
        },
        methods: {
            open(title, message, color = 'primary') {
                this.isVisible = true;
                this.title = title;
                this.message = message;
                this.color = color;

                return new Promise((resolve, reject) => {
                    this.resolve = resolve;
                    this.reject = reject;
                });
            },
            confirm() {
                this.resolve(true);
                this.isVisible = false;
            },
            cancel() {
                this.resolve(false);
                this.isVisible = false;
            }
        }
    };
</script>
