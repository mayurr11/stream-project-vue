<!-- Header component -->
   
<template>
    <header class="header">
      <h1>{{ title }}</h1>

      <nav class="btn-container">
        <!-- Slot for flight schedule Button -->
        <slot name="flightschedule" class="btn"></slot>
        
        <!-- Slot for Enquiry Button -->
        <slot name="enquiry" class="btn"></slot>

        <!-- Slot for Login Button -->
        <slot name="login" class="btn"></slot>
      </nav>
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    }

    .btn-container {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      /* height: 100%; */
    }

  </style>
  