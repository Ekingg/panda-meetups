import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/meetup/Meetups.vue'
import CreateMeetup from '@/components/meetup/CreateMeetup.vue'
import Profile from '@/components/user/Profile.vue'
import Signin from '@/components/user/Signin.vue'
import Signup from '@/components/user/Signup.vue'
// @ - means source folder
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home', // name is optional
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ],
  mode: 'history' // no # in url
})
