<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <h2>Subscribe to Upcoming Flight</h2>
      <!-- Your subscription form UI here -->
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
