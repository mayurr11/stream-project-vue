<!-- Enquiry page -->
<template>
  <div>
    <!-- Header component -->
    <HeaderComponent />

    <!-- Root container -->
    <div class="root">

      <!-- Enquiry container -->
      <div class="enquiry-container">
        <h1 class="enquiry-title">Enquiry</h1>
        <form @submit.prevent="submitEnquiry" class="enquiry-form">
          <input type="text" v-model="name" placeholder="Name" class="input-field">
          <textarea v-model="message" placeholder="Your Message" class="input-field"></textarea>
          <button type="submit" class="submit-button">Submit Enquiry</button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>

// Importing Header component and register it.
import HeaderComponent from "../components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent
  },
   // Initialize data properties
  data() {
    return {
      name: '',
      message: '',
    };
  },
  methods: {
    // Method to handle enquiry submission
    submitEnquiry() {
      // Handle enquiry submission logic here
      console.log('Submitting enquiry:', this.name, this.message);
      // You can add your enquiry submission logic here, like sending a request to your backend API
    },
  },
};
</script>

<style scoped>
 /* styles for EnquiryView.vue */
.root {
  display: flex;
  align-items: center;
  justify-content: center;
}

.enquiry-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
}

.enquiry-title {
  margin-bottom: 20px;
  font-size: 24px;
}

.enquiry-form {
  width: 100%;
  max-width: 400px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.back-link {
  margin-top: 20px;
  text-decoration: none;
  color: #007bff;
}

.back-link:hover {
  text-decoration: underline;
}

@media screen and (max-width: 820px) {
  .enquiry-container {
    width: 100%;
  }
}
</style>
