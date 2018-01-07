import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://www.tourprom.ru/site_media/images/upload/2016/11/8/countryimage/tailand.jpg',
        id: 'someIDfromFirebase1',
        title: 'Tailand',
        date: '2018-01-08'
      },
      {
        imageUrl: 'http://www.spiderworks.co.za/wp-content/uploads/2017/11/Egypt.jpg',
        id: 'someIDfromFirebase2',
        title: 'Egypt',
        date: '2018-03-13'
      },
      {
        imageUrl: 'http://www.kenyasafari.com/images/ol-tukai-elephants-kilimanjaro-kenya-fp.jpg',
        id: 'someIDfromFirebase3',
        title: 'Kenya',
        date: '2018-02-26'
      }
    ],
    user: {
      id: 'llldasd',
      registeredMeetups: ['someIDfromFirebase3', 'someIDfromFirebase2']
    }
  },
  mutations: { // to change state
    createMeetup: (state, payload) => {
      state.loadedMeetups.push(payload)
    }
  },
  actions: { // specify the mutation
    createMeetup: ({commit}, payload) => {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: new Date(),
        id: 'mokeid'
      }
      // Reach out to firebase and store it
      // invoke mutation method
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups: state => state.loadedMeetups.sort((a, b) => {
      return a.date > b.date
    }),
    loadedMeetup: state => (meetupId) => {
      return state.loadedMeetups.find((meetup) => {
        return meetup.id === meetupId
      })
    },
    feuturedMeetups: (state, getters) => getters.loadedMeetups.slice(0, 5)
  }
})
