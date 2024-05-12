// // Importing required functions and modules from Vue and Vue Router
// import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router';

// // Importing views from different routes
// import HomeView from './views/HomeView.vue';
// import LoginView from './views/LoginView.vue';
// import EnquiryView from './views/EnquiryView.vue';
// import SubscriptionView from './views/SubscriptionView.vue';

// // Importing auth module
// // import auth from './store/modules/auth';
// import store from './store';

// // routes for the application
// const routes = [
//   { path: '/', name: 'home', component: HomeView },
//   { path: '/login', component: LoginView },
//   { path: '/enquiry', component: EnquiryView },
//   { path: '/subscription', component: SubscriptionView },
// ];

// // a router instance
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// // Importing the root component of the Vue application
// import App from './App.vue'

// // Creating Vue app instance and mount it to the root element in the HTML
// createApp(App).use(router).use(store).mount('#app')

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Importing views from different routes
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import EnquiryView from './views/EnquiryView.vue';
import SubscriptionView from './views/SubscriptionView.vue';

// Importing the root component of the Vue application
import App from './App.vue';

// Importing store module
import store from './store';

// routes for the application
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/enquiry', component: EnquiryView },
  { path: '/subscription', component: SubscriptionView },
];

// create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// create Vue app instance and mount it to the root element in the HTML
createApp(App)
.use(store) // use the store
  .use(router)
  .mount('#app');
