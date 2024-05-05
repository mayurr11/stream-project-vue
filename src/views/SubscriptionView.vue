<!-- Subscription page  -->

<template>
  <div>
    <!-- Header component -->
    <HeaderComponent />

    <!-- Root container -->
    <div class="root">

      <!-- Subscription container -->
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
</style>
