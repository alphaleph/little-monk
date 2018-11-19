<template>
  <div id="app">
    <img src="./assets/cabbage-header.jpg">
    <router-view/>
  </div>
</template>

<script>
/*
TODO:
- Implement more robust error handling and input checking (e.g. escaping for XSS; input validation - type, length, format, range; URL/HTML use sanitaize-html)
- Improve UI via SemanticUI and SweetAlert, Vuetify (doesn't use v-html for XSS safety)
*/

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
