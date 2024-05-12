<!-- Subscription page 

<template>
  <div>
    <HeaderComponent />

    <div class="root">

      <div class="subscription-container">
        <h1 class="subscription-title">Subscription</h1>
        <form @submit.prevent="subscribe" class="subscription-form">
          <input type="email" v-model="email" placeholder="Email" class="input-field">
          <button type="submit" class="submit-button">Subscribe</button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>

import HeaderComponent from "../components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent
  },
  
  // Initialize data properties
  data() {
    return {
      email: '',
    };
  },
  methods: {
     // Method to handle subscription
    subscribe() {
      // Handle subscription logic here
      console.log('Subscribing with email:', this.email);
      // You can add your subscription logic here, like sending a request to your backend API
    },
  },
};
</script>

<style scoped>

.root {
  display: flex;
  align-items: center;
  justify-content: center;
}


.subscription-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
}

.subscription-title {
  margin-bottom: 20px;
  font-size: 24px;
}

.subscription-form {
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
  .subscription-container {
    width: 100%;
  }
}
</style> -->


<!-- <template>
  <div>
    <HeaderComponent />

    <div class="root">

      <div class="subscription-container">
        <h1 class="subscription-title">Subscription</h1>
        <form @submit.prevent="subscribe" class="subscription-form">
          <input type="email" v-model="email" placeholder="Email" class="input-field">
          <label for="notification-time">Select notification time before flight:</label>
          <select id="notification-time" v-model="notificationTime" class="input-field">
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            </select>
          <button type="submit" class="submit-button">Subscribe</button>
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
      email: '',
      notificationTime: 1, // Default value of notification time is set to 1 hour
    };
  },
  methods: {
     // Method to handle subscription
    subscribe() {
      // Handle subscription logic here
      console.log('Subscribing with email:', this.email);
      console.log('Notification time before flight:', this.notificationTime, 'hour(s)');
      // You can add your subscription logic here, like sending a request to your backend API
    },
  },
};
</script>

<style scoped>

/* Styles for SubscriptionView.vue */
.root {
  display: flex;
  align-items: center;
  justify-content: center;
}


.subscription-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
}

.subscription-title {
  margin-bottom: 20px;
  font-size: 24px;
}

.subscription-form {
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
  .subscription-container {
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

      <!-- Subscription container -->
      <div class="subscription-container">
        <h1 class="subscription-title">Subscribe for Flight Notifications</h1>
        <form @submit.prevent="subscribe" class="subscription-form">
          <input type="email" v-model="email" placeholder="Enter your email" class="input-field" required>
          <label for="notification-time" class="label">Select notification time before flight:</label>
          <select id="notification-time" v-model="notificationTime" class="input-field">
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <!-- Add more options as needed -->
          </select>
          <button type="submit" class="submit-button">Subscribe</button>
        </form>
      </div>

      <!-- Subscription confirmation popup -->
      <div v-if="showPopup" class="popup">
        <div class="popup-content">
          <h2>Subscription Successful!</h2>
          <p>You have successfully subscribed for flight notifications.</p>
          <button @click="closePopup" class="close-button">Close</button>
        </div>
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
      email: '',
      notificationTime: 1, // Default value of notification time is set to 1 hour
      showPopup: false, // Flag to control the display of the subscription confirmation popup
    };
  },
  methods: {
     // Method to handle subscription
    subscribe() {
      // Handle subscription logic here
      console.log('Subscribing with email:', this.email);
      console.log('Notification time before flight:', this.notificationTime, 'hour(s)');
      // Show subscription confirmation popup
      this.showPopup = true;
      // You can add your subscription logic here, like sending a request to your backend API
      
      // Redirect to home view after a delay
      setTimeout(() => {
        this.$router.push({ name: 'home' });
      }, 1000); // Redirect after 3 seconds
    },
    // Method to close the subscription confirmation popup
    closePopup() {
      this.showPopup = false;
    }
  },
};
</script>

<style scoped>

/* Styles for SubscriptionView.vue
.root {
  display: flex;
  align-items: center;
  justify-content: center;
}


.subscription-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
}

.subscription-title {
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
}

.subscription-form {
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

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.close-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #0056b3;
}

@media screen and (max-width: 820px) {
  .subscription-container {
    width: 100%;
  } 
}*/


.root {
  display: flex;
  align-items: center;
  justify-content: center;
}

.subscription-container {
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

.subscription-title {
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.subscription-form {
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
  .subscription-container {
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
