<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <Greeting />
    <SubmitButton
      msg="Message from App.vue"
      :isAdmin=false
    />
    <FormSubmitter />
    <NumberRenderer :even="false"></NumberRenderer>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue'
import SubmitButton from './components/SubmitButton.vue'
import FormSubmitter from './components/FormSubmitter.vue'
import NumberRenderer from './components/NumberRenderer.vue'

export default {
  name: 'app',
  components: {
    Greeting,
    SubmitButton,
    FormSubmitter,
    NumberRenderer
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
