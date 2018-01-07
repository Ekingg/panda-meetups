<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2 >
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <!--5/12 of the container length for extra small devices-->
              <!--4/12 of the container length for small devices-->
              <!--3/12 of the container length for medium devices-->
              <v-flex xs5 sm4 md3>
                <v-card-media
                  src="http://www.spiderworks.co.za/wp-content/uploads/2017/11/Egypt.jpg"
                  height="140px">
                  <!-- with "contain" image wouldn't cut-->
                </v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>

                <v-card-title primary-title>
                  <div>
                    <!-- "--text" works for all colors
                  without "--text" will changed background color-->
                    <h2 class="white--text">My meetup</h2>
                    <div>8th January 2018</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat light>
                    <v-icon left>arrow_forward</v-icon>
                    View meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'meetups'
  }
</script>

<style scoped>

</style>
