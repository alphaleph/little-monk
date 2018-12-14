<template>
  <md-toolbar class="md-primary">
    <div class="md-title">
      <md-button class="md-icon-button">
      <router-link :to="{ name: 'Welcome' }">
        <img class="icon-little-monk-small" src="../assets/little-monk-icon-32px.png" alt="Mini Little Monk Icon">
      </router-link>
      </md-button>
    </div>
    <div class="md-toolbar-section-start">
      <div class="toolbar-section-start-item toolbar-first-item">
        <md-button :to="{ name: 'PostsList' }">
          Stories
        </md-button>
      </div>
      <div class="toolbar-section-start-item">
        <md-button :to="{ name: 'PostsList' }">
          Quotes
        </md-button>
      </div>
    </div>
    <div class="md-toolbar-section-end">
      <div class="toolbar-section-end-item">
        <md-button @click="$emit('to-do')">
          Log In
        </md-button>
      </div>
      <div class="toolbar-section-end-item toolbar-last-item">
        <md-button class="md-raised md-accent" @click="$emit('to-do')">
          Sign Up
        </md-button>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style lang="scss">
.toolbar-section-start-item {
  padding: 0% 2.5% 0% 2.5%
}
.toolbar-section-end-item {
  padding: 0% 2.5% 0% 2.5%;
}
.toolbar-first-item {
  margin-left: 2em;
}
.toolbar-last-item {
  margin-right: 2em;
}
</style>
