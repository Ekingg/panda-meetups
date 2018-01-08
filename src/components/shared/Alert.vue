<template>
  <v-alert error
           dismissible
           color="error"
           icon="error"
           :value="true"
           v-on:input="onClose">
    {{ text }}
  </v-alert>
</template>

<script>
  export default {
    name: 'alert',
    props: ['text'],
    methods: {
      onClose: function () {
        this.$emit('dismissed') // my custom event with name dismiss (see signUp app-alert element)
      }
    }
  }
</script>

<style scoped>

</style>
