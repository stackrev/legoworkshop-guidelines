<template>
  <section id="contact" class="white-box">
    <div class="py-12" />

    <v-container class="text-center">
      <div class="text-md-h4 text-h5 font-weight-bold mb-3">
        Register
      </div>

      <v-responsive class="mx-auto mb-md-12 mb-5 mt-md-12 mt-5" width="70vw">
          <v-divider class="mb-1" />
        </v-responsive>


      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="6"
        >
          <v-form ref="form" method="POST" class="contact-form text-md-h5 text-h7">
            <v-responsive
              class="mx-auto font-weight-light mb-8"
              max-width="820"
            >
              <span>
              To register, send an email with your names to:
              </span>
            </v-responsive>
            <v-responsive
              class="mx-auto mb-8 text-center"
              max-width="820"
            >
              <span style="overflow: visible;">
               <b><a href="mailto: adam.darmanin@blackrock.com">adam.darmanin@blackrock.com</a></b>
              </span>
            </v-responsive>
          </v-form>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-img :src="contactUrl" class="rounded-lg" height="40vh"/>
        </v-col>
      </v-row>
    </v-container>
    <div class="py-12" />
  </section>
</template>

<script>
import contactImage from '~/assets/img/agile.png'

export default {
  data: () => ({
    contactUrl: contactImage,
  })
}
</script>