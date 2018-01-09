<template>
  <v-container class="mt-0">

    <!--Alert message-->
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <!--My component from shared/Alert registered in main.js
        :text it is a property of Alert.vue-->
        <app-alert
          v-on:dismissed="onDismissed"
          :text="error.message"
        ></app-alert>
      </v-flex>
    </v-layout>

    <!--Authentication form-->
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>

              <form v-on:submit.prevent="onSignUp">

                <!--Email-->
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>

                <!--Password-->
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>

                <!--Confirm Password-->
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[comparePasswords]"
                      required
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>

                <!--Sign up button-->
                <v-layout row>
                  <v-flex xs12>
                    <v-btn
                      type="submit"
                      :disabled="loading"
                      :loading="loading"
                    >
                      <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                      </span>
                      Sign up
                    </v-btn>
                  </v-flex>
                </v-layout>

              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'signup',
    data: function () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords: function () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
      },
      user: function () {
        return this.$store.getters.user
      },
      error: function () {
        return this.$store.getters.error
      },
      loading: function () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user: function (value) {
        if (value !== null && value !== undefined) {
          this.$store.dispatch('loadMeetups')
          this.$router.push('/home')
        }
      }
    },
    methods: {
      onSignUp: function () {
        // Vuex
        console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
        // signUserUp - action who invokes mutation setUser
      },
      onDismissed: function () {
        console.log('Dismissed alert')
        this.$store.dispatch('clearError') // action
      }
    }
  }
</script>

<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }

  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
