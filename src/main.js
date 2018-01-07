import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import App from './App'
import router from './router'
import {store} from './store'
import DateFilter from './filters/data'
import * as firebase from 'firebase'

// register global filter
Vue.filter('date', DateFilter)

Vue.use(Vuetify, {
  theme: {
    primary: '#0091ea',
    secondary: '#707b82',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created: function () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDTRENbX9HUKYYLVGJnGU7A9C1rPAsqnZg',
      authDomain: 'nicetome-panda.firebaseapp.com',
      databaseURL: 'https://nicetome-panda.firebaseio.com',
      projectId: 'nicetome-panda',
      storageBucket: 'nicetome-panda.appspot.com'
    })
  }
})
