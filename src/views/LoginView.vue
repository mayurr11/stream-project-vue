<!-- Login page -->

<template>
  <div>
    <!-- Header Component -->
    <HeaderComponent />

    <!-- root container -->
    <div class="root">

      <!-- Login-Form container -->
      <div class="login-container">
        <h1 class="login-title">Log in</h1>
        <form @submit.prevent="login" class="login-form">
          <input type="text" v-model="username" placeholder="Username" class="input-field">
          <input type="password" v-model="password" placeholder="Password" class="input-field">
          <button type="submit" class="login-button">Login</button>
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
      username: '',
      password: ''
    };
  },
  methods: {
     // Method to handle login
    login() {
      // Handle login logic here
      console.log('Logging in with:', this.username, this.password);
      // You can add your login logic here, like sending a request to your backend API
    }
  }
};
</script>

<style scoped>
/* styles for LoginView.vue */

.root {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
  align-self: center;
}

.login-title {
  margin-bottom: 20px;
  font-size: 24px;
}

.login-form {
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

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
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
  .login-container {
    width: 100%;
  }
}
</style>
