<template>
  <!--Theme light (dark)-->
  <v-app light>
    <!--Navigation drawer-->
    <v-navigation-drawer absolute v-model="sideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>View Meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <!--Toolbar-->
    <v-toolbar dark class="light-blue accent-4">
      <v-toolbar-title>Meetup</v-toolbar-title>
      <v-toolbar-side-icon
        v-on:click="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items
        v-on:click="sideNav = !sideNav"
        class="hidden-xs-only">
        <v-btn flat>
          <!--
          Icon: just give name of icon from https://material.io/icons/
          and replace space with underscore! Haha =)
          -->
          <v-icon left>people</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <!--Main-->
    <main>

    </main>
  </v-app>
</template>

<script>
  export default {
    data: function () {
      return {
        sideNav: false
      }
    }
  }
</script>
