<template>
  <div id="hero">
    <v-card max-width="90%" class="mx-auto">
      <v-layout>
        <v-app-bar>
          <v-app-bar-title>Agile Development Workshop - With Lego</v-app-bar-title>
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-app-bar>

        <v-main>
          <v-parallax
            dark
            height="750"
            src="assets/img/heroBg.jpg"
          >
            <v-row align="center" justify="center">
              <v-col cols="10">
                <v-row align="center" justify="center">
                  <v-col cols="12" md="6" xl="8">
                    <div class="d-flex flex-column fill-height justify-center align-center text-white">
                      <h1 class="text-h4 font-weight-thin mb-4">
                        Vuetify
                      </h1>
                      <h4 class="font-weight-light">
                        Build your application today!
                      </h4>
                    </div>
                    <div class="svg-border-waves text-white">
                      <v-img src="/assets/img/borderWaves.svg" />
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-parallax>
          <v-container fluid />
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<style>
.btn-play {
  transition: 0.2s;
}
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}
.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}
.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}
.card h1 {
  margin-bottom: 10px;
}
.zoom-efect {
  transform: scale(1.1);
}
.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
