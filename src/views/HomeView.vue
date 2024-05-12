<!-- Home page -->

<template>
  <div>
    <!-- Header Component -->
    <!-- <HeaderComponent /> -->
    <HeaderComponent>
      <!-- Enquiry Button Slot -->
      <template #flightschedule>
        <ButtonComponent destination="/subscription" class="flight-schedule-btn">Flight Schedule</ButtonComponent>
      </template>

      <template #enquiry>
        <ButtonComponent destination="/enquiry" class="enquiry-btn">Enquiry</ButtonComponent>
      </template>

      <!-- Login Button Slot -->
      <!-- <template #login>
        <ButtonComponent destination="/login" class="login-btn">Login</ButtonComponent>
      </template> -->
      <template #login>
        <ButtonComponent
          v-if="!isLoggedIn"
          destination="/login"
          class="login-logout-btn"
        >
          Login
        </ButtonComponent>

        <ButtonComponent
          v-else
          class="login-logout-btn"
          @click="logout"
        >
          Logout
        </ButtonComponent>
      </template>


    </HeaderComponent>

    <!-- Main Content -->
    <div class="main-content">
      
      <VideoComponent />

      <div class="right-section">
        <!-- Log in button -->
        <!-- <ButtonComponent destination="/login" class="login-btn">Login</ButtonComponent> -->

        <!-- Information box -->
        <div class="box-content">

          <!-- List of flight information -->
          <ul>
            <li> - Flight Speed: </li>
            <li> - Take off time: </li>
            <li> - Docking time: </li>
            <li> - Flight duration: </li>
            <li> - Location: </li>
          </ul>
        </div>

        <!-- Enquiry Button -->
        <!-- <ButtonComponent destination="/enquiry" class="enquiry-btn">Enquiry</ButtonComponent> -->
      </div>
      <br>
    </div>

    <!-- Bottom content section -->
    <!-- <div class="bottom-content">
      <div class="box-content">
        <ul>
          <li>
            <h4>Upcoming Flight Information: </h4>
          </li>
          <li> - 13:50: </li>
          <li> - </li>
          <li> - </li>
          <li> - </li>
        </ul>

        <div class="button-container">
          <ButtonComponent destination="/subscription" class="subscribe-btn">Subscribe</ButtonComponent>
          <ButtonComponent destination="/subscription" class="subscribe-btn">Subscribe</ButtonComponent>
        </div>
      </div>

      Calender Component
      <CalendarComponent class="calender" />
    </div> -->
  </div>
</template>

<script>

// Importing required components
import HeaderComponent from "../components/HeaderComponent.vue";
import VideoComponent from "../components/VideoComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
// import LoginView from "./LoginView.vue"; // eslint-disable-next-line
// import CalendarComponent from "../components/CalendarComponent.vue";

export default {
  components: {

    // Register components
    HeaderComponent,
    VideoComponent,
    ButtonComponent,
    // LoginView,
    // CalendarComponent
  },

  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn; // Assuming isLoggedIn is stored in Vuex
    },
  },

  // data() {
  //   return {
  //     // isLoggedIn: false,
  //   };
  // },
   methods: {
    // Method to logout
    // logout() {
    //   this.isLoggedIn = false;
    //   // Redirect to login view
    //   this.$router.push({ name: 'login' });
    // },
    logout() {
      // Perform logout logic here
      this.$store.dispatch('logout');
      this.$router.push({ name: 'login' });
      
    },
  },
}
</script>

<style>

/* styles for HomeView.vue */
.main-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* gap: 2rem; */
  justify-content: space-between;
}

.right-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* height: 70vh; */
  margin-left: 2rem;
}

.box-content {
  height: 100%;
  min-width: 270px;
  min-width: 300px;
  /* border: 1px solid black; */
  text-align: left;
  border-radius: 10px;
  background-color: antiquewhite;
  box-shadow: 0 0 2px #111;
}

.box-content ul {
  list-style: none;
  padding: 2px 20px;
}

.box-content ul li {
  padding-bottom: 4px;
}

.login-logout-btn {
  /* background-color: #483D8B; */
  background-color: #9932CC;
  color: #fff;
}

.login-logout-btn:hover {
  box-shadow: 0 0 10px #483D8B;
}


.enquiry-btn {
  /* background-color: #DC143C; */
  background-color: #4169E1;
  color: #fff;
}

.enquiry-btn:hover {
  box-shadow: 0 0 10px #DC143C;
}

.flight-schedule-btn {
  /* background-color: #3F51B5; */
  background-color: #FF8C00;
  color: #fff;
}

.flight-schedule-btn:hover {
  box-shadow: 0 0 10px #3F51B5;
}

.subscribe-btn {
  background-color: rgb(18, 191, 2);
  color: #fff;
}

.subscribe-btn:hover {
  box-shadow: 0 0 10px rgb(18, 191, 2);
}

.bottom-content {
  width: 65%;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: space-between;
}

.bottom-content .box-content {
  min-height: 250px;
  width: 405px;
  border: 1px solid black;
  text-align: left;
  display: flex;
  flex-direction: row;
}

.bottom-content .box-content .button-container {
  height: 100%;
  display: flex;
  min-width: 50px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0.7rem;
}

.button-container button {
  min-height: 20px;
  min-width: 50px;
}

@media screen and (max-width: 820px) {
  .main-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .box-content {
    width: 100%;
  }

  .bottom-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .bottom-content .box-content {
    width: 100%;
    border: 1px solid black;
    text-align: left;
    display: flex;
    flex-direction: row;
  }

  .bottom-content .box-content ul {
    width: 50%;
  }

  .bottom-content .box-content .button-container {
    display: flex;
    min-width: 50px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .calender {
    margin: 0;
  }
}
</style>