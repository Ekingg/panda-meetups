<template>
  <!--persistent means on the top of the screen-->
  <!--If  v-model=true for dialog - it shows, else closed-->
  <v-dialog max-width="290" persistent v-model="registerDialog">

    <!--Dialog Activator-->
    <v-btn slot="activator" class="primary--text mr-3 mb-2">
      {{ isRegisteredUser ? 'Unregister' : 'Register' }}
    </v-btn>

    <v-card>
      <v-container>
        <!--Dialog-->
        <!--Title-->
        <v-layout row wrap justify-center>
          <v-flex xs12>
            <v-card-title>
              <h3 class="secondary--text" v-if="isRegisteredUser">Unregiter from Meetup?</h3>
              <h3 class="secondary--text" v-else>Register for Meetup?</h3>
            </v-card-title>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>You can always change your decision later on.</v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn class="error--text" flat v-on:click="registerDialog = false">Cancel</v-btn>
              <v-btn class="accept--text" flat v-on:click="onAgree">Confirm</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>

      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'registration-dialog',
    props: ['meetupId'],
    data: function () {
      return {
        registerDialog: false
      }
    },
    computed: {
      isRegisteredUser: function () {
        if (this.$store.getters.user) {
          return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
            return meetupId === this.meetupId
          }) >= 0
        }
      }
    },
    methods: {
      onAgree: function () {
        if (this.userIsRegistered) {
          this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
        } else {
          this.$store.dispatch('registerUserForMeetup', this.meetupId)
        }
      }
    }
  }
</script>

<style scoped>

</style>
