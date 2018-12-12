<template>
  <md-toolbar class="md-primary">
    <div class="md-title">
      <md-button class="md-icon-button">
      <router-link to="/">
        <img class="icon-little-monk-small" src="../assets/little-monk-icon-32px.png" alt="Mini Little Monk Icon">
      </router-link>
      </md-button>
    </div>
    <div class="md-toolbar-section-start">
      <div class="toolbar-section-start-item">
        <md-button>
          Stories
        </md-button>
      </div>
      <div class="toolbar-section-start-item">
        <md-button>
          Quotes
        </md-button>
      </div>
    </div>
    <div class="md-toolbar-section-end">
      <div class="toolbar-section-end-item">
        <md-button>
          Log In
        </md-button>
      </div>
      <div class="toolbar-section-end-item">
        <md-button class="md-raised md-accent">
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
  padding: 0% 3% 0% 3%
}
.toolbar-section-end-item {
  margin-right: 2%;
  padding: 0% 2% 0% 2%;
}
</style>
