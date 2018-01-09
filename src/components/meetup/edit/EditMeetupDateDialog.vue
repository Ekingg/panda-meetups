<template>
  <!--persistent means on the top of the screen-->
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn accent slot="activator">
      Edit Date
    </v-btn>
    <v-card>
      <v-container>
        <!--Dialog-->
        <!--Title-->
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title><h3 class="secondary--text">Edit Meetup Date</h3></v-card-title>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <!--Date picker-->
        <v-layout row wrap>
          <v-flex xs12>
            <v-date-picker v-model="editableDate" style="width: 100%" action>
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
            </v-date-picker>
            <p>{{editableDate}}</p>
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
    data: function () {
      return {
        editDialog: false,
        editableDate: null
      }
    },
    methods: {
      onSaveChanges: function () {
        const prevDate = new Date(this.meetup.date)
        const newDate = new Date(this.editableDate)
        newDate.setHours(prevDate.getHours())
        newDate.setMinutes(prevDate.getMinutes())
        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
          date: newDate
        })
      }
    },
    created: function () {
      this.editableDate = new Date(this.meetup.date).toISOString().slice(0, 10)
    }
  }
</script>

<style scoped>

</style>
