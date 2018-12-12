<template>
  <div id="app">
    <toolbar/>
    <router-view/>
    <div class=footer></div>
  </div>
</template>

<script>
import ToolBar from '@/components/TheToolBar.vue'

export default {
  name: 'App',
  components: {
    'toolbar': ToolBar
  }
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";
@include md-register-theme("default", (
  primary: #62757f,
  accent: #c30000
));
@import "~vue-material/dist/theme/all";

#app {
  background: url("../src/assets/papery-background.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.footer {
  background-color: #90a4ae;
  width: 100%;
  height: 1em;
}
</style>
