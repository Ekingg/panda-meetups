<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="primary--text">{{ meetup.title }}</h3>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="400px">
          </v-card-media>
          <v-card-text class="pb-0">
            <div>
              <b class="secondary--text">{{ meetup.date }}</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non quam repellendus similique
                suscipit.
                Ducimus fugiat harum id illo nobis recusandae reiciendis tempora velit voluptatum. Consectetur dolore,
                odio.
                Officiis, pariatur.</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary mr-3 mb-2">Register</v-btn>
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
      }
    }
  }
</script>

<style scoped>

</style>
