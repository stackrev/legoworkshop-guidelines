<template>
  <section id="about" class="gray-box">
    <v-container fluid class="mx-0 px-0">
      <div class="py-12" />
      <v-container class="text-center">
        <div class="text-md-h4 text-h5 font-weight-bold mb-3">
          Learn through Gamification
        </div>

        <v-responsive class="mx-auto mb-md-12 mb-5 mt-md-12 mt-5" width="70vw">
          <v-divider class="mb-1" />
        </v-responsive>


        <v-card class="mx-0 px-0" height="450px" flat>
          <v-parallax fluid class="mx-0 px-0" :src="bgHeroUrl" height="450px" />
        </v-card>

        <v-responsive class="mx-auto mb-md-12 mb-5 mt-md-12 mt-5" width="70vw">
          <v-divider class="mb-1" />
        </v-responsive>

        <v-responsive
          class="mx-auto font-weight-light mb-8"
          max-width="820"
        />

        <v-container>
          <v-row align="center" justify="center">
            <v-col
              cols="12"
              md="6"
            >
              <v-card class="py-12 px-4" :height="height" style="background-color: #8D8B8E; overflow: visible;">
                <v-card-title
                  class="justify-center  mb-12"
                  style="overflow: visible"
                >
                  Workshop Agenda
                </v-card-title>

                <v-card-text class="text-left">
                  <div class="ml-md-12 ml-3">
                    In the first 30 minutes:

                    <li>Organizing teams</li>
                    <li>Define process</li>
                    <li>Define roles</li>
                    <li>Project chartering</li>

                    <br>
                    The next 15mins is when the blocks come out, and here we will:

                    <li>Building backlog</li>
                    <li>Estimating</li>

                    <br>
                    Then the game start, we will iterate 3 times for 15mins, each time we will explore:

                    <li>Sprint Planning</li>
                    <li>Sprinting</li>
                    <li>Sprint Reviewing</li>

                    <br>
                    Finally, a debriefing and photos with the best solutions you have created!
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-card class="py-12 px-4" :height="height" style="background-color: #8D8B8E">
                <v-card-title
                  class="justify-center mb-12"
                  style="overflow: visible; overflow-wrap: break-word"
                >
                  You will Experience
                </v-card-title>

                <v-card-text class="text-left">
                  <div class="ml-md-12 ml-3">
                    <li>Understanding stakeholders needs in a clear and engaging way.</li>
                    <li>Write user stories to define valuable work to your product or service.</li>
                    <li>Communication within iterations and shared engagement wth our peers.</li>
                    <li>Interdependencies management as you build big things.</li>
                    <li>Transparency with information boards</li>
                    <br>
                    <li>Visualization of a Product Goal and its definition of completion.</li>
                    <li>Estimation of work and evaluation of its importance.</li>
                    <li>Backlog Refinement, Sprint Planning, Sprint Reviews and Sprint Retrospective.</li>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-responsive
          class="mx-auto font-weight-light mb-8"
          max-width="820"
        >
          <div class="svg-border-waves mx-0 px-0">
            <img src="~/assets/img/wave2.svg">
          </div>
        </v-responsive>
      </v-container>
    </v-container>
  </section>
</template>

<script>
import bgHeroImage from '~/assets/img/bgHero2.png'

export default {
  data: () => ({
    bgHeroUrl: bgHeroImage
  }),

  computed: {
      height () {
        switch (this.$vuetify.display.name) {
          case 'xs': return 1000
          case 'sm': return 900
          default: return 800
        }
      },
    },
}
</script>

<style scoped>

</style>
