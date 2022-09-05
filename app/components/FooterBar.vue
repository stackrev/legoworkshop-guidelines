<template>
  <v-footer
    style="background-color: #FFE330;"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Adam Darmanin | Director | BlackRock</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>
