<template>
  <div>
    <h2 class="text-h5 mb-6">
      Minecraft
    </h2>

    <p class="mb-8">
      Wir spielen gerne Minecraft. Trage hier deinen In-Game-Namen ein, um dich auf die Whitelist setzen zu
      lassen. Du kannst na klar auch gerne deine Freunde mit hinzufügen, wir sind für alle neuen Spieler offen!<br><br>
      Die URL des Servers ist <strong>allesimrudel.de</strong>. Das Hinzufügen kann einen Moment dauern.
    </p>

    <div
      v-if="isLoading"
      class="text-center py-3"
    >
      <v-progress-circular indeterminate />
    </div>

    <v-simple-table v-else-if="minecraftPlayers.length > 0">
      <template v-slot:default>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Hinzugefügt am</th>
            <th>Aktion</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(player, index) in minecraftPlayers"
            :key="index"
          >
            <td>{{ player.id }}</td>
            <td>{{ player.name }}</td>
            <td>{{ player.createdAt | date }}</td>
            <td>
              <PlayerRemoveButton
                :player="player"
                @reload="getMinecraftPlayers"
              />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <p
      v-else
      class="py-3"
    >
      Du hast noch keine Spieler hinzugefügt.
    </p>

    <PlayerAddForm
      class="mt-6"
      @reload="getMinecraftPlayers"
    />
  </div>
</template>

<script>
import PlayerAddForm from '@/views/profile/parts/MinecraftPlayers/parts/PlayerAddForm';
import PlayerRemoveButton from '@/views/profile/parts/MinecraftPlayers/parts/PlayerRemoveButton';

export default {
  components: {PlayerRemoveButton, PlayerAddForm},
  data() {
    return {
      isLoading: true,
      minecraftPlayers: []
    };
  },
  created() {
    this.getMinecraftPlayers();
  },
  methods: {
    getMinecraftPlayers() {
      this.isLoading = true;
      window.axios.get('/minecraft/players')
        .then((response) => {
          this.minecraftPlayers = response.data.data;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>