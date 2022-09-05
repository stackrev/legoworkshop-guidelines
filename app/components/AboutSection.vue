<template>
  <section id="about" class="gray-box">
    <v-container fluid class="mx-0 px-0">
      <div class="py-12" />
      <v-container class="text-center">
        <div class="text-h5 font-weight-bold mb-3">
          Taught via Gamification
        </div>

        <v-responsive class="mx-auto mb-8" width="150">
          <v-divider class="mb-1" />
        </v-responsive>

        <v-card class="mx-0 px-0" height="450px" flat>
          <v-parallax fluid class="mx-0 px-0" src="/bgHero2.jpg" height="450px" />
        </v-card>

        <v-responsive class="mx-auto mt-8" width="150">
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
              <v-card class="py-12 px-4" height="580" style="background-color: #8D8B8E">
                <v-card-subtitle
                  class="justify-center font-weight-medium text-h5"
                >
                  Workshop Agenda
                </v-card-subtitle>

                <v-card-text class="text-left">
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
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-card class="py-12 px-4" height="580" style="background-color: #8D8B8E">
                <v-card-subtitle
                  class="justify-center font-weight-medium text-h5"
                >
                  What you will Experience
                </v-card-subtitle>

                <v-card-text class="text-left">
                  <li>Understand the needs of the customer and the various stakeholders in a clear and engaging way</li>
                  <li>Keep the User Story Mapping up to date to ensure that you are guided by the value of product development</li>
                  <li>Communicate what needs to be done in a sprint to ensure shared engagement and responsibility within teams</li>
                  <li>Manage interdependencies between teams to properly identify the priority of elements in development and their continuous integration</li>
                  <li>Develop transparency with information boards</li>
                  <li>Keep track of progress and address problems identified in retrospective rituals</li>
                  <br>
                  <li>Quick and easy sharing of simulation specifications</li>
                  <li>Visualization of the Product Goal and the definition of a complete Product Backlog</li>
                  <li>Evaluation through the Planning Poker and the planning of the release of Items related to the User Stories</li>
                  <li>Complete simulation of ceremonies and other key steps suggested by scrum to improve the learning process between one building session and another: Backlog Refinement, Sprint Planning, Daily Scrum (Standup), Sprint Review and Sprint Retrospective.</li>
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

<style scoped>

</style>
