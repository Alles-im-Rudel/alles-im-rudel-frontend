<template>
    <v-img src="@/assets/errors/500.svg" height="100vh">
        <v-container fluid>
            <v-row justify="center" align="center">
                <v-col cols="12" lg="5">
                    <v-card color="rgb(255, 255, 255, 0.9)">
                        <v-card-title>
                            <v-icon color="error" left>fa-exclamation-triangle</v-icon>
                            503 - Error
                        </v-card-title>
                        <v-divider />
                        <v-card-text class="title">
                            <p>Error</p>
                            <p>
                                <q>{{ message }}</q>
                            </p>
                            <p>Error</p>
                        </v-card-text>
                        <v-divider />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-img>
</template>
<script>
    export default {
        props: {
            message: {
                type: String,
                default: ''
            }
        }
    };
</script>
