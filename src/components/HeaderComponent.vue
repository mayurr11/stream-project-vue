<!-- Header component -->
   
<template>
    <header class="header">
      
      <!-- Display the title dynamically -->
      <h1>{{ title }}</h1>
      
    </header>
  </template>
  
  <script>
  export default {

    //prop 'title' of type String with a default value
    props: {
      title: {
        type: String,
        default: "Drone Video Streaming" // Default title if not provided
      }
    },
  }
  </script>
  
  <style scoped>
  /* styles for Header.vue */
  .header {
    background-color: #000500; 
    color: #473BF0; 
    padding: 20px; 
    margin-bottom: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px #111;
    }
  </style>
  