<template>
  <!-- The main container for the application -->
  <div id="app">
    <!-- Dynamically renders components based on the current route -->
    <router-view />
  </div>
</template>

<script>
export default {
  // Component name for internal reference and debugging
  name: "App",
};
</script>

<style>
/* global styles for App.vue here */
#app {
  width: 100%;
}
</style>
