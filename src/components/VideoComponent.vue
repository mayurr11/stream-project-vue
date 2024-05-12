<!-- Video Component -->

<template>
    <div class="video-container">

      <!-- Video element with controls, autoplay, and loop -->
      <video controls autoplay muted loop style="min-width: 100%; height: auto;">
        <source src="your-video-source.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
     
    </div>
  </template>
  
  <script>
  export default {
    // Video component logic
  }
  </script>
  
  <style scoped>
  /* styles for VideoComponent.vue  */

  .video-container {
    width: 100%; 
    float: left;
    background: transparent;
  }
  
  @media screen and (max-width: 820px) {  
    .video-container {
    width: 100%; 
    } 
  }
  </style>
  