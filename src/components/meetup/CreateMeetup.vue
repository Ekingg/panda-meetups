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
              <!--Just link variant-->
              <!--
                            <v-text-field
                              name="imageUrl"
                              label="Image URL"
                              id="image-url"
                              v-model="imageUrl"
                              required
                            >
                            </v-text-field>-->
              <v-btn raised class="primary" v-on:click="onPickFile">Upload Image</v-btn>
              <input
                type="file"
                style="display: none;"
                ref="fileInput"
                accept="image/*"
                v-on:change="onFilePicked"
              >
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

          <!--Create Meetup Button-->
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
        image: null, // it will be raw image file uploaded by user,
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
        const date = new Date(this.date)
        date.setHours(this.time.match(/^(\d+)/)[1])
        date.setMinutes(this.time.match(/:(\d+)/)[1])
        return date
      }
    },
    methods: {
      onCreateMeetup: function () {
        if (!this.formIsValid) {
          return
        }
        if (!this.image) {
          return
        }
        const meetUpData = {
          title: this.title,
          location: this.location,
          image: this.image,
          description: this.description,
          date: this.submittableDateTime
        }
        this.$store.dispatch('createMeetup', meetUpData)
        this.$router.push('/meetups')
      },
      onPickFile: function () {
        // this.$refs - gives for as all ref on this component
        this.$refs.fileInput.click()
      },
      onFilePicked: function (event) {
        const files = event.target.files // files[0] because it may be multiselect of files, take first
        const filename = files[0].name // name provided by native js
        if (filename.indexOf('.') <= 0) { // means what file have extension
          return alert('Please, pick a valid file')
        }
        const fileReader = new FileReader() // native js future for client file work
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      }
    }
  }
</script>

<style scoped>

</style>
