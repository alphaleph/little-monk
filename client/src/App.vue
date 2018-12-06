<template>
  <div id="app">
    <img src="./assets/cabbage-header.jpg">
    <router-view/>
  </div>
</template>

<script>
/*
TODO:
- Implement connect-history-api-fallback and 404/catchall handling
- Implement more robust error handling and input checking (e.g. escaping for XSS; input validation - type, length, format, range; URL/HTML)
- For user passwords: clean up client before sending, hash key with once-off nonce, send via HTTPS, irreversibly hash with another unique salt before storing
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
}
</style>
