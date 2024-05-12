<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="close">&times;</span>
        <h2>Select Date</h2>
        <!-- Your calendar UI here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  