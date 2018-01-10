<template>
  <v-container>

    <!--Loading circular-->
    <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          color="primary"
          :width="2"
          :size="70"
        >
        </v-progress-circular>
      </v-flex>
    </v-layout>

    <!--Meetup-->
    <v-layout row wrap v-else="!loading">
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <!--Title-->
            <h3 class="primary--text">{{ meetup.title }}</h3>
            <!--Edit meetup details dialog-->
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <!--:meetup - props from EditMeetupDetailsDialog.vue-->
              <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
            </template>
          </v-card-title>

          <!--Image-->
          <v-card-media
            :src="meetup.imageUrl"
            height="400px">
          </v-card-media>

          <!--Full description-->
          <v-card-text class="pb-0">
            <div>
              <b class="secondary--text">
                <p>{{ meetup.location }}</p>
                <p>
                  <v-icon>alarm_on</v-icon>
                  {{ meetup.date | date }}
                </p>

                <!--Edit Date Button-->
                <template v-if="userIsCreator">
                  <!--:meetup - props from EditMeetupDateDialog.vue-->
                  <app-edit-meetup-date-dialog :meetup="meetup"></app-edit-meetup-date-dialog>
                  <app-edit-meetup-time-dialog :meetup="meetup"></app-edit-meetup-time-dialog>
                </template>

              </b>
              <p>{{ meetup.description }}</p>
            </div>
          </v-card-text>

          <!--Register-->
          <v-card-actions>
            <v-spacer></v-spacer>
            <app-meetup-register-dialog
              :meetup-id="meetup.id"
              v-if="userIsAuthenticated && !userIsCreator"
            >
            </app-meetup-register-dialog>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'meetup',
    props: ['id'], // dynamic parameters from router/index.js meetups/:id
    computed: {
      meetup: function () {
        return this.$store.getters.loadedMeetup(this.id)
      },
      userIsAuthenticated: function () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator: function () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.$store.getters.user.id === this.meetup.creatorId
      },
      loading: function () {
        return this.$store.getters.loading
      }
    }
  }
</script>

<style scoped>

</style>
