// export default {
//     login(credentials) {
//       // Perform authentication logic here
//       if (credentials.username === 'Admin' && credentials.password === 'Admin@123') {
//         // Simulate successful login for demonstration purposes
//         localStorage.setItem('isLoggedIn', 'true');
//         return true;
//       } else {
//         // Handle incorrect credentials
//         console.error('Invalid username or password');
//         return false;
//       }
//     },
//     logout() {
//       // Perform logout logic here
//       localStorage.removeItem('isLoggedIn');
//     },
//   };
  

import { useRouter } from 'vue-router';

export default {
  login({ commit }, credentials) {
    const { username, password } = credentials;
    // Perform authentication logic here
    if (username === 'Admin' && password === 'Admin@123') {
      // Simulate successful login for demonstration purposes
      localStorage.setItem('isLoggedIn', 'true');
      commit('login');
      return true; // Return true to indicate successful login
    } else {
      // Handle incorrect credentials
      console.error('Invalid username or password');
      return false; // Return false to indicate failed login
    }
  },
  logout({ commit }) {
    // Perform logout logic here
    localStorage.removeItem('isLoggedIn');
    commit('logout');
    // Access router instance from within a Vue component
    const router = useRouter();
    router.push('/login');
  },
};
