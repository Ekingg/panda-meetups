<template>
  <v-container class="mt-0">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="secondary--text">Create a new meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form v-on:submit.prevent="onCreateMeetup">

          <!--Title-->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required
              >
              </v-text-field>
            </v-flex>
          </v-layout>

          <!--Location-->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required
              >
              </v-text-field>
            </v-flex>
          </v-layout>

          <!--Image Url-->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required
              >
              </v-text-field>
            </v-flex>
          </v-layout>

          <!--Image preview-->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" :height="imageHeight">
            </v-flex>
          </v-layout>

          <!--Description-->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                v-model="description"
                required
                multi-line
              >
              </v-text-field>
            </v-flex>
          </v-layout>

          <!--Date/Time picker-->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h2>Choose Data & Time</h2>
            </v-flex>
          </v-layout>
          <v-layout row class="mb-2">
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker v-model="date"></v-date-picker>
              <p>{{date}}</p>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker format="24hr" v-model="time"></v-time-picker>
              <p>{{time}}</p>
            </v-flex>
          </v-layout>
          <!---->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit"
              >
                Create Meetup
              </v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'create-meetup',
    data: function () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        creationDate: new Date(),
        date: new Date().toISOString().slice(0, 10), // default values
        time: new Date().toString().slice(16, 21)
      }
    },
    computed: {
      formIsValid: function () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imageUrl !== '' &&
          this.description !== ''
      },
      imageHeight: function () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return '150px'
          case 'sm':
            return '200px'
          case 'md':
            return '250px'
          case 'lg':
            return '300px'
          case 'xl':
            return '400px'
        }
      },
      submittableDateTime: function () {
        console.log(this.date)
        return new Date(
          this.date.slice(0, 4),
          parseInt(this.date.slice(5, 7)) - 1,
          parseInt(this.date.slice(8, 10)),
          this.time.slice(0, 2),
          this.time.slice(3, 5))
      }
    },
    methods: {
      onCreateMeetup: function () {
        if (!this.formIsValid) {
          return
        }
        const meetUpData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: this.submittableDateTime
        }
        console.log(meetUpData)
        this.$store.dispatch('createMeetup', meetUpData)
        this.$router.push('/meetups')
      }
    }
  }
</script>

<style scoped>

</style>
