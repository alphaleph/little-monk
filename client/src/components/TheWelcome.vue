<template>
  <div class="container-main">
    <md-progress-bar class="md-primary" :md-value="100"></md-progress-bar>
    <div class="container-welcome-text">
      <p class="md-headline welcome-text">
        Welcome to Little Monk, a place for nameless wisdom sharing<br>
        and discussion for fellow wayfarers of life.
        <br>
        <br>
        Please log in or browse our collection!
      </p>
    </div>
    <div class="container-icon-and-buttons md-layout md-alignment-top-left">
      <div class="container-icon md-layout-item">
        <img
          class="icon-little-monk"
          src="../assets/little-monk-icon.png"
          alt="Little Monk Icon"
        >
      </div>
      <div class="container-button md-layout-item">
          <md-button
            class="button-sample md-raised md-accent"
            :to="{ name: 'PostsList' }"
          >
            View Sample Story
          </md-button>
          <md-button
            class="button-sample md-raised md-accent"
            :to="{ name: 'PostsList' }"
          >
            View Sample Quote
          </md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.icon-little-monk {
  width:60%;
  height:auto;
  float: right;
}
.container-icon {
  padding: 0% 5% 5% 6%;
}
.container-welcome-text {
  padding: 3% 2% 0% 30%;
}
.welcome-text {
  text-align: left;
  padding: 3% 10% 3% 3%;
  margin-right: 20%;
  border-radius: 5px;
  background-color: #90a4ae;
  box-shadow: 0px 4px 8px 0px #b3b3b3;
}
.container-button {
  padding-top: 1%;
  padding-right: 7%;
}
.button-sample {
  display: block;
  margin: 5% 0% 10% 0%;
  width: 65%;
  font-size: 1.5em;
}
</style>
