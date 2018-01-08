<template>
  <v-container class="mt-0">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>

              <form v-on:submit.prevent="onSignIn">

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

                <!--Sign in button-->
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Sign in</v-btn>
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
    name: 'signin',
    data: () => ({
      email: '',
      password: ''
    }),
    computed: {
      user: function () {
        return this.$store.getters.user
      }
    },
    watch: {
      user: function (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/home')
        }
      }
    },
    methods: {
      onSignIn: function () {
        // Vuex
        console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
        // signUserIn - action who invokes mutation setUser
      }
    }
  }
</script>

<style scoped>

</style>
