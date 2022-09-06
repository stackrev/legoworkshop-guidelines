<template>
  <section id="contact" class="white-box">
    <div class="py-12" />

    <v-container class="text-center">
      <div class="text-md-h4 text-h5 font-weight-bold mb-3">
        Register
      </div>

      <v-responsive class="mx-auto mb-12" width="70vw">
        <v-divider class="mb-1" />

        <v-divider />
      </v-responsive>

      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="6"
        >
          <v-form ref="form" method="POST" class="contact-form text-h5">
            <v-responsive
              class="mx-auto font-weight-light mb-8"
              max-width="820"
            >
              To register, send an email with your names to:
            </v-responsive>
            <v-responsive
              class="mx-auto mb-8 text-center"
              max-width="820"
            >
              <b><a href="mailto: adam.darmanin@blackrock.com">adam.darmanin@blackrock.com</a></b>
            </v-responsive>
          </v-form>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <nuxt-img src="/contact.png" sizes="sm:95vw md:45vw"  preset="gh"/>
        </v-col>
      </v-row>
    </v-container>
    <div class="py-12" />
  </section>
</template>
