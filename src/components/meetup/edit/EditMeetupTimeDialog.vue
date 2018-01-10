<template>
  <!--persistent means on the top of the screen-->
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn accent slot="activator">
      Edit Time
    </v-btn>
    <v-card>
      <v-container>
        <!--Dialog-->
        <!--Title-->
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title><h3 class="secondary--text">Edit Meetup Time</h3></v-card-title>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <!--Date picker-->
        <v-layout row wrap>
          <v-flex xs12>
            <v-time-picker v-model="editableTime" style="width: 100%" action>
              <template slot-scope="{save, cancel}">
                <v-btn
                  flat
                  class="secondary--text"
                  v-on:click="editDialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                  flat
                  class="primary--text"
                  v-on:click="onSaveChanges"
                >
                  Save
                </v-btn>
              </template>
            </v-time-picker>
            <p>{{editableTime}}</p>
          </v-flex>
        </v-layout>

      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'edit-meetup-date-dialog',
    props: ['meetup'],
    data:
      function () {
        return {
          editDialog: false,
          editableTime: null
        }
      },
    methods: {
      onSaveChanges:
        function () {
          const newDate = new Date(this.meetup.date)
          newDate.setHours(this.editableTime.match(/^(\d+)/)[1])
          newDate.setMinutes(this.editableTime.match(/:(\d+)/)[1])
          this.$store.dispatch('updateMeetupData', {
            id: this.meetup.id,
            date: newDate
          })
        }
    },
    created:
      function () {
        const hours = new Date(this.meetup.date).getHours()
        const minutes = new Date(this.meetup.date).getMinutes()
        this.editableTime = hours + ':' + minutes
      }
  }
</script>

<style scoped>

</style>
