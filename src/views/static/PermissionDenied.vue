<template>
  <v-img
    v-once
    src="@/assets/errors/403.svg"
    height="100vh"
  >
    <v-container fluid>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          lg="5"
        >
          <BaseCard>
            <v-card-title>
              <v-icon
                color="error"
                left
              >
                fa-user-times
              </v-icon>
              403 - Error
            </v-card-title>
            <v-divider />
            <v-card-text class="title">
              <p>Keine Berechtigung</p>
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-btn
                color="primary"
                text
                block
                to="/"
              >
                Zurück zu Startseite
              </v-btn>
            </v-card-actions>
          </BaseCard>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>
