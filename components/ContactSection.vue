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
          <v-form ref="form" method="POST" class="contact-form text-body-1">
            <v-responsive
              class="mx-auto font-weight-light mb-8"
              max-width="820"
            >
              <span>
                We only have 20 places. To attend, send an email to:
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
            <v-responsive
              class="mx-auto mb-8"
              max-width="820"
            >
              <p>
                See you on the <b>21st of September</b> at <b>11-12:30pm</b>
                <br>in <b>Room 4.01</b>.
              </p>
              <p class="mt-2">
                Be there or be square &#128526;,<br>and the only good square, is a lego® block!
              </p>
            </v-responsive>
          </v-form>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-img :src="contactUrl" class="rounded-lg" height="40vh" />
        </v-col>
      </v-row>

      <v-responsive>
        <div class="py-12" />
        <a href="#home" style="text-decoration: none; color: inherit;">
          <v-btn
            color="#FFE330"
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
    </v-container>
    <div class="py-12" />
  </section>
</template>

<script>
import contactImage from '~/assets/img/agile.png'

export default {
  data: () => ({
    contactUrl: contactImage
  })
}
</script>
