<!-- <template>
  <div>
    <HeaderComponent />

    <div class="root">

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
</style> -->


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
          <input type="text" v-model="name" placeholder="Name" class="input-field" required>
          <textarea v-model="message" placeholder="Your Message" class="input-field" required></textarea>
          <button type="submit" class="submit-button">Submit Enquiry</button>
        </form>
      </div>

    </div>

    <!-- Popup message -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <span class="close" @click="closePopup">&times;</span>
        <p>Enquiry submitted successfully!</p>
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
      showPopup: false
    };
  },
  methods: {
    // Method to handle enquiry submission
    submitEnquiry() {
      // Simulating successful submission
      this.showPopup = true;
      // Reset name and message fields
      this.name = '';
      this.message = '';
      // Close the popup after 2 seconds
      setTimeout(() => {
        this.closePopup();
        this.$router.push({ name: 'home' });
      }, 2000);
    },
    // Method to close popup
    closePopup() {
      this.showPopup = false;
    }
  },
};
</script>

<style scoped>
/* styles for EnquiryView.vue */

/* .root {
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

.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
} */


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
  width: 40%;
  align-self: center;
}

.enquiry-title {
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.enquiry-form {
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
}

.label {
  padding: 10px 0;
}

.submit-button {
  width: 60%;
  align-self: center;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
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

/* Popup styles */
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  font-size: 1.4rem;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

@media screen and (max-width: 820px) {
  .enquiry-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  align-self: center;
}
}

</style>

