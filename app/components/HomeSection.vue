<template>
  <div id="home" class="white-box">
    <section id="hero" dark>
      <div>
        <v-parallax dark src="~/assets/img/bgHero.jpeg" max-height="1024px">
          <v-row align="center" justify="center">
            <v-col cols="10">
              <v-row align="center" justify="center">
                <v-col cols="12" md="6" xl="8">
                  <div class=" mt-md-16 pt-md-16 mt-6 pt-6">
                    <div
                      class="text-md-h1 text-h4 font-weight-black transition-swing text-left banner"
                    >
                      Agile
                    </div>
                    <div
                      class="text-md-h1 text-h4 font-weight-black transition-swing text-left banner"
                    >
                      Development
                    </div>
                    <div
                      class="text-md-h1 text-h4 font-weight-black transition-swing text-left banner"
                    >
                      Workshop
                    </div>
                    <div
                      style="z-index: 10;"
                      class="text-md-h1 text-h4 font-weight-black transition-swing text-left text-decoration-underline mt-md-10 mt-4 mb-6 banner"
                    >
                      With LEGO!
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down" />
              </v-row>
            </v-col>
          </v-row>

          <div class="svg-border-waves mx-0 px-0">
            <img src="~/assets/img/wave2.svg">
          </div>
        </v-parallax>
      </div>
    </section>
    <section id="features" class=" ">
      <div class="py-12" />

      <v-container class="text-center">
        <div class="text-h5 font-weight-bold mb-3">
          An Agile Development Training
        </div>

        <v-responsive class="mx-auto mb-8" width="150">
          <v-divider class="mb-1" />
        </v-responsive>

        <v-row align="center" justify="center">
          <v-col
            cols="12"
            md="6"
          >
            <v-form ref="form" method="POST" class="contact-form">
              <v-responsive
                class="mx-auto mb-8"
                max-width="620"
              >
                Coaching Agile Development in a safe simulation with Lego gamification, is a modern method for ingraining <b>capacity planning</b>,
                <b>iterative execution</b>, and <b>self-organizataton principles</b> within a squad of professionals, these being a mix of engineering,
                sales, graphics, business and product.
                The challenge in this training is to build the best city possible with Lego™ building blocks, that meets the requirements of the "Product Owner”.
              </v-responsive>
              <v-responsive
                class="mx-auto mb-8"
                max-width="620"
              >
                This culture and work principles drive Blackrock's Alphagen Platform Engineering today.
              </v-responsive>
              <v-responsive
                class="mx-auto mb-8"
                max-width="620"
              >
                The workshop is set for up to 20 participants and has a run time of 1hour and 30 minutes max.
              </v-responsive>
            </v-form>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-img src="~/assets/img/scrum.jpeg" height="450px" />
          </v-col>
        </v-row>

        <div class="py-12" />

        <div class="svg-border-waves mx-0 px-0">
          <img src="~/assets/img/wave.svg">
        </div>
      </v-container>
    </section>
  </div>
</template>

<style scoped>
.banner{
  color: #FFE330;
}
</style>
