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
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
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
    data: function () {
      return {
        name: 'home',
        meetups: [
          {
            imageUrl: 'https://www.tourprom.ru/site_media/images/upload/2016/11/8/countryimage/tailand.jpg',
            id: 'someIDfromFirebase1',
            title: 'Tailand'
          },
          {
            imageUrl: 'http://www.spiderworks.co.za/wp-content/uploads/2017/11/Egypt.jpg',
            id: 'someIDfromFirebase2',
            title: 'Egypt'
          },
          {
            imageUrl: 'http://www.kenyasafari.com/images/ol-tukai-elephants-kilimanjaro-kenya-fp.jpg',
            id: 'someIDfromFirebase3',
            title: 'Kenya'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .imageTitle {
    position: absolute;
    bottom: 50px;
    color: white;
    background: rgba(0,0,0,0.5);
    font-size: 2em;
    padding: 15px 40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

</style>
