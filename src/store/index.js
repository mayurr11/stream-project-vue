// // src/store/index.js

// import { createStore } from 'vuex';

// export default createStore({
//   state: {
//     isLoggedIn: false,
//   },
//   mutations: {
//     login(state) {
//       state.isLoggedIn = true;
//     },
//     logout(state) {
//       state.isLoggedIn = false;
//     },
//   },
//   actions: {
//     login({ commit }) {
//       // Perform authentication logic here
//       commit('login');
//     },
//     logout({ commit }) {
//       // Perform logout logic here
//       commit('logout');
//     },
//   },
//   getters: {
//     isLoggedIn: (state) => state.isLoggedIn,
//   },
// });


import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    // Add a mutation to update the isLoggedIn state to true
    login(state) {
      state.isLoggedIn = true;
    },
    // Add a mutation to update the isLoggedIn state to false
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    // Modify the login action to accept credentials and perform authentication logic
    login({ commit }, credentials) {
      // Simulate authentication logic (replace with actual logic)
      if (credentials.username === 'Admin' && credentials.password === 'Admin@123') {
        commit('login'); // Call the login mutation if authentication succeeds
        return true; // Return true to indicate successful login
      } else {
        return false; // Return false to indicate failed login
      }
    },
    // Add a logout action to commit the logout mutation
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    // Add a getter to get the isLoggedIn state
    isLoggedIn: (state) => state.isLoggedIn,
  },
});

