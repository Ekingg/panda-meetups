<template>
  <v-container>
    <!--"row" means in one line ( column - one column)
        "wrap" - element will jump in new line if not fit -->
    <!--Buttons-->
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" color="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" color="primary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <!--Images-->
    <v-layout>
      <v-flex xs12>
        <v-carousel style="cursor: pointer">
          <v-carousel-item
            v-for="meetup in meetups"
            @click="onLoadMeetup(meetup.id)"
            :src="meetup.imageUrl"
            :key="meetup.id"
          >
            <div class="imageTitle">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <!--Join us-->
    <v-layout class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join us for more amazing meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups: function () {
        return this.$store.getters.feuturedMeetups
      }
    },
    methods: {
      onLoadMeetup: function (id) {
        //  this.$router - global vue router object
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style scoped>
  .imageTitle {
    position: absolute;
    bottom: 50px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    font-size: 2em;
    padding: 15px 40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>
