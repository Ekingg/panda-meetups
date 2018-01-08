import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // State ---------------------------------------------------
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://www.tourprom.ru/site_media/images/upload/2016/11/8/countryimage/tailand.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur cumque cupiditate ea eos impedit, incidunt iste minus molestias praesentium quasi quia quidem, reiciendis rerum saepe sequi suscipit vel voluptatum.',
        id: 'someIDfromFirebase1',
        title: 'Tailand',
        location: 'Some Pretty place',
        creationDate: new Date(),
        date: '2018-01-08'
      },
      {
        imageUrl: 'http://www.spiderworks.co.za/wp-content/uploads/2017/11/Egypt.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur cumque cupiditate ea eos impedit, incidunt iste minus molestias praesentium quasi quia quidem, reiciendis rerum saepe sequi suscipit vel voluptatum.',
        id: 'someIDfromFirebase2',
        title: 'Egypt',
        location: 'Some Pretty place',
        creationDate: new Date(),
        date: '2018-03-13'
      },
      {
        imageUrl: 'http://www.kenyasafari.com/images/ol-tukai-elephants-kilimanjaro-kenya-fp.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur cumque cupiditate ea eos impedit, incidunt iste minus molestias praesentium quasi quia quidem, reiciendis rerum saepe sequi suscipit vel voluptatum.',
        id: 'someIDfromFirebase3',
        title: 'Kenya',
        location: 'Some Pretty place',
        creationDate: new Date(),
        date: '2018-02-26'
      }
    ],
    user: null, // new user creates only with firebase auth()
    loading: false,
    error: null
  },
  // Mutations ---------------------------------------------------
  mutations: { // to change state
    createMeetup: (state, payload) => {
      state.loadedMeetups.push(payload)
    },
    setUser: (state, payload) => {
      state.user = payload
    },
    setLoading: (state, payload) => {
      state.loading = payload
    },
    setError: (state, payload) => {
      state.error = payload
    },
    clearError: (state) => {
      state.error = null
    }
  },
  // Actions ---------------------------------------------------
  actions: { // specify the mutation
    createMeetup: ({commit}, payload) => {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'mokeid'
      }
      // Reach out to firebase and store it
      // invoke mutation method
      commit('createMeetup', meetup)
    },
    // Firebase authentication
    signUserUp: ({commit}, payload) => {
      commit('setLoading', true) // start loading process
      // return a Promise
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false) // we have user == loading complete
            commit('clearError')
            const newUser = {
              id: user.uid,
              registeredMeetups: [] // new user don't have registered meetups yet
            }
            commit('setUser', newUser) // setUser - invoke mutation
          }
        )
        .catch(
          error => {
            commit('setLoading', false) // we have error == loading complete
            commit('setError', error) // in this case it is the specific object from firebase with message property
            console.log(error)
          }
        )
    },
    signUserIn: ({commit}, payload) => {
      commit('setLoading', true)
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            commit('clearError')
            const registeredUser = {
              id: user.uid,
              registeredMeetups: [] // TODO: registered meetups
            }
            commit('setUser', registeredUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError: ({commit}) => {
      commit('clearError')
    }
  },
  // Getters  ---------------------------------------------------
  getters: {
    loadedMeetups: state => state.loadedMeetups.sort((a, b) => {
      return a.date > b.date
    }),
    loadedMeetup: state => (meetupId) => {
      return state.loadedMeetups.find((meetup) => {
        return meetup.id === meetupId
      })
    },
    feuturedMeetups: (state, getters) => getters.loadedMeetups.slice(0, 5),
    // -
    user: state => {
      return state.user
    },
    loading: state => {
      return state.loading
    },
    error: state => {
      return state.error
    }
  }
})
