<template>
  <!--Theme light (dark)-->
  <v-app light>


    <!--Navigation drawer-->
    <v-navigation-drawer temporary absolute v-model="sideNav">
      <v-list>
        <!--:key="item.title for dynamic assigning-->
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <!--Toolbar-->
    <v-toolbar dark class="light-blue accent-4">
      <v-toolbar-title>
        <router-link to="/home" class="title">
          {{ mainTitle }}
        </router-link>
      </v-toolbar-title>
      <v-toolbar-side-icon
        v-on:click="sideNav = !sideNav"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <!--
          Icon: just give name of icon from https://material.io/icons/
          and replace space with underscore!
          -->
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <!--Main-->
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data: function () {
      return {
        sideNav: false,
        mainTitle: 'Panda`s Meetup',
        menuItems: [
          {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
          {icon: 'room', title: 'Organize meetup', link: '/meetup/new'},
          {icon: 'people', title: 'Profile', link: '/profile'},
          {icon: 'account_circle', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    cursor: pointer;
    color: white;
    text-decoration: none
  }
</style>
