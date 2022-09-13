<template>
  <section id="about" class="gray-box">
    <v-container fluid class="mx-0 px-0 lego-yellow">
      <div class="py-12" />
      <v-container class="text-center">
        <div class="text-md-h4 text-h5 font-weight-bold mb-3 ">
          Learn with Gamification
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
              <v-card class="py-12 px-4" :height="height" style="background-color: #D3D3D3; overflow: visible;" flat>
                <v-card-title
                  class="justify-center  mb-12"
                  style="overflow: visible"
                >
                  <v-icon dark color="#131316" x-large>
                    mdi-toy-brick-plus
                  </v-icon> <span class="mx-auto font-weight-bold">Workshop Agenda</span>
                </v-card-title>

                <v-card-text class="text-left text-body-1">
                  <div class="ml-md-12 ml-3">
                    In the first 30 minutes:

                    <li>Organizing teams</li>
                    <li>Define process</li>
                    <li>Define roles</li>
                    <li>Project chartering</li>

                    <br>
                    The next 15mins is when we plan our building blocks, here we will:

                    <li>Create our city backlog</li>
                    <li>Estimate and prioritize the backlog</li>
                    <li>Create plans for our lego® blocks to deliver and integrate our city</li>

                    <br>
                    Then the game start and the blocks come out. We will iterate 3 times for 15mins, each time we will explore:

                    <li>Sprint Planning</li>
                    <li>Sprinting (building lego® stuff)</li>
                    <li>Sprint Reviewing</li>

                    <br>
                    Finally, a debriefing on what was learned, and photos with the best city you have created!
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-card class="py-12 px-4" :height="height" style="background-color: #D3D3D3" flat>
                <v-card-title
                  class="justify-center mb-12"
                  style="overflow: visible; overflow-wrap: break-word"
                >
                  <v-icon dark color="#131316" x-large>
                    mdi-toy-brick-plus
                  </v-icon> <span class="mx-auto font-weight-bold">You will Experience</span>
                </v-card-title>

                <v-card-text class="text-left text-body-1">
                  <div class="ml-md-12 ml-3">
                    <li>Understanding stakeholders needs in a clear and engaging way.</li>
                    <li>Write user stories to define valuable work for your product or service.</li>
                    <li>Communication within iterations and shared engagement with your teams.</li>
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

        <v-responsive>
          <div class="py-12" />
          <a href="#home" style="text-decoration: none; color: inherit;">
            <v-btn
              color="#D3D3D3"
              fab
              outlined
              class="rounded-circle"
              height="70px"
              width="70px"
            >
              <v-icon dark>mdi-chevron-double-up</v-icon>
            </v-btn>
          </a>
          <div class="py-12" />
        </v-responsive>

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
        case 'xs': return 800
        case 'sm': return 800
        default: return 650
      }
    }
  }
}
</script>

<style scoped>

</style>
