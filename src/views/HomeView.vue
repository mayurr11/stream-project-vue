<!-- Home page -->

<template>
  <div>
    <!-- Header Component -->
    <HeaderComponent>
      <template #flightschedule>
        <div class="dropdown" ref="dropdown">
          <button @click="toggleDropdown" class="flight-schedule-btn">Flight Schedule</button>
          <div v-show="isDropdownOpen" class="dropdown-content">
            <button @click="openFlightInfoModal">Subscribe to Upcoming Flights</button>
            <button @click="openCalendarModal">Calendar</button>
          </div>
        </div>

        <!-- Flight Info Modal -->
        <div v-if="isFlightInfoModalOpen" class="modal">
          <div class="modal-content">
            <span class="close" @click="closeFlightInfoModal">&times;</span>
            <h1>Upcoming Flight Information</h1>
            <ul>
              <li v-for="flight in upcomingFlights" :key="flight.id">
                {{ flight.time }}
                <button @click="openSubscriptionModal(flight, 'Today')">Subscribe</button>
              </li>
            </ul>
          </div>
        </div>
        <!-- Modal for Calendar -->
        <div v-if="isCalendarModalOpen" class="modal">
          <div class="modal-content">
            <span class="close" @click="closeCalendarModal">&times;</span>
            <h1>Calendar</h1>
            <div class="calendar-container" ref="calendarContainer"></div>
          </div>
        </div>

        <!-- Subscription Form Modal -->
        <div v-if="isSubscriptionModalOpen" class="modal">
          <div class="modal-content">
            <span class="close" @click="closeSubscriptionModal">&times;</span>
            <div class="subscription-container">
              <h1 class="subsciption-title">Subscribe for Flight Notifications</h1>
              <div>
                <p v-if="selectedDate === 'Today'">Flight Date: Today</p>
                <p v-else>Selected Date: {{ selectedDate }}</p>
              </div>
              <form @submit.prevent="submitSubscription" class="subscription-form">
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
          </div>
        </div>

      </template>

      <template #enquiry>
        <div>
          <button @click="openModal" class="enquiry-button">Enquiry</button>
          <!-- Modal -->
          <div v-if="isModalOpen" class="modal">
            <div class="modal-content">
              <span class="close" @click="closeModal">&times;</span>
              <div class="enquiry-container">
                <h1 class="enquiry-title">Enquiry</h1>
                <form @submit.prevent="submitEnquiry" class="enquiry-form">
                  <input type="text" v-model="name" placeholder="Name" class="input-field" required>
                  <textarea v-model="message" placeholder="Your Message" class="input-field" required></textarea>
                  <button type="submit" class="submit-button">Submit Enquiry</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </template>


      <!-- Login Button Slot -->
      <template #login>
        <ButtonComponent v-if="!isLoggedIn" destination="/login" class="login-logout-btn">
          Login
        </ButtonComponent>

        <ButtonComponent v-else class="login-logout-btn" @click="logout">
          Logout
        </ButtonComponent>
      </template>


    </HeaderComponent>

    <!-- Main Content -->
    <div class="main-content">
      <CalendarComponent />

      <VideoComponent />

      <div class="right-section">
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
      </div>
      <br>
    </div>
  </div>
</template>

<script>

// Importing required components
import HeaderComponent from "../components/HeaderComponent.vue";
import VideoComponent from "../components/VideoComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
  components: {

    HeaderComponent,
    VideoComponent,
    ButtonComponent,
  },

  data() {
    return {
      name: '',
      message: '',
      isModalOpen: false,
      isDropdownOpen: false,

      isFlightInfoModalOpen: false,
      upcomingFlights: [
        { id: 1, time: "10:00 AM", date: "14/5/2024" },
        { id: 2, time: "2:00 PM", date: "14/5/2024" },
        { id: 3, time: "6:00 PM", date: "14/5/2024" }
        // Add more flights as needed
      ],


      isCalendarModalOpen: false,
      calendar: null,
      events: [
        { title: 'Event 1', start: '2024-05-10' },
        { title: 'Event 2', start: '2024-05-15' },
        // Add more events as needed
      ],


      isSubscriptionModalOpen: false,
      email: '',
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn; // Assuming isLoggedIn is stored in Vuex
    },
  },

  methods: {
    logout() {
      //Perform logout logic here
      this.$store.dispatch('logout');
      // this.$router.push({ name: 'login' });
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitEnquiry() {
      this.closeModal();
    },
    
    toggleDropdown() {
      console.log("Dropdown button clicked");
      this.isDropdownOpen = !this.isDropdownOpen;
      console.log("Dropdown state:", this.isDropdownOpen);
    },



    openFlightInfoModal() {
      this.isFlightInfoModalOpen = true;
      console.log(this.isFlightInfoModalOpen);
    },

    closeFlightInfoModal() {
      this.isFlightInfoModalOpen = false;
      console.log(this.isFlightInfoModalOpen);
    },

    subscribeFlight(flightId) {
      // Logic to handle flight subscription
      console.log("Subscribed to flight with ID:", flightId);
    },

    openCalendarModal() {
      this.isCalendarModalOpen = true;
      // this.initCalendar();
      this.$nextTick(this.initCalendar);
    },

    closeCalendarModal() {
      this.isCalendarModalOpen = false;
      if (this.calendar) {
        this.calendar.destroy(); // Destroy the calendar when closing the modal
        this.calendar = null;
      }
    },

    
    initCalendar() {
      const calendarEl = this.$refs.calendarContainer;
      this.calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth', // Display the calendar in month view initially
        selectable: true, // Enable date selection
        select: this.handleDateSelect,
        
        events: [
          {
            title: 'Event 1',
            start: '2024-05-01'
          },
          {
            title: 'Event 2',
            start: '2024-05-05'
          }
        ]
      });
      this.calendar.render();
    },
    handleDateSelect(selectInfo) {
      const selectedDate = new Date(selectInfo.startStr);
      const formattedDate = selectedDate.toLocaleDateString('en-GB'); 
      console.log('Selected date:', formattedDate);
      this.openSubscriptionModal(null, formattedDate);
    },

    openSubscriptionModal(flight, selectedDate) {
      this.isSubscriptionModalOpen = true;
      if (flight && flight.date) {
        console.log(flight.date);
      }
      console.log(selectedDate);
      if (selectedDate === 'Today') {
        this.selectedDate = 'Today';
      } else {
        this.selectedDate = selectedDate;
      }
    },


    closeSubscriptionModal() {
      this.isSubscriptionModalOpen = false;
    },

    submitSubscription() {
      this.closeSubscriptionModal();
    },
  },
}
</script>

<style>
/* Upcoming Flight Info modal's styles */
.upcoming-flight-list {
  list-style-type: none;
}

.modal-content h1 {
  color: #07004D;
  text-align: center;
}

.modal-content ul {
  list-style-type: decimal;
  padding: 5px 10px;
}

.modal-content ul li {
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  border-bottom: 1px solid #c2c2c2;
  font-size: 1.1rem;
  color: #000;
}

.modal-content ul li button {
  padding: 8px 10px;
  outline: none;
  border: none;
  background-color: rgb(34, 142, 34);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 4px;
  box-shadow: 0 0 5px #00000073;
}

.modal-content ul li button:hover {
  background-color: rgb(1, 82, 1);
  color: #fff;
}

.subscription-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
}

.subscription-title {
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-align: center;
  color: #07004D;
}

.subscription-form {
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subscription-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 0px solid #ccc;
  font-size: 1.2rem;
  background-color: transparent;
  border-bottom: 1px solid #000;
}

.subscription-input:focus {
  border-left: 5px solid #0056b3;
  outline: none;
}

.subscription-label {
  padding: 10px 0;
}

.subscription-select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 0px solid #ccc;
  font-size: 1.2rem;
  background-color: transparent;
  border-bottom: 1px solid #000;
}

.subscription-button {
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

.subscription-button:hover {
  background-color: #0056b3;
}



.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  /* display: none; */
  position: absolute;
  margin-top: 0.3rem;
  background-color: #f9f9f9;
  min-width: 260px;
  z-index: 1;
  border-radius: 10px;
}

.dropdown-content button {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-weight: 500;
  width: 100%;
  border: none;
  outline: none
}

.dropdown-content button:first-child {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.dropdown-content button:last-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.dropdown-content button:hover {
  background-color: #07004D;
  color: #fff;
}


/* styles for HomeView.vue */
.main-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
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
  background-color: #620093;

}

.enquiry-button {
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin: 0.2rem;
}

.enquiry-button:hover {
  background-color: #4169E1;
}

.flight-schedule-btn {
  /* background-color: #3F51B5; */
  background-color: #FF8C00;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin: 0.2rem;
}

.flight-schedule-btn:hover {
  background-color: #864900;
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


/* Styles for Enquiry Modal */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.603);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

/* Modal content */
.modal-content {
  background-color: #DEDEE0;
  padding: 20px;
  border-radius: 5px;
  width: 500px;
}

/* Close button */
.close {
  position: relative;
  top: 0;
  left: 90%;
  right: 1px;
  cursor: pointer;
  background-color: #d10000;
  color: #fff;
  padding: 0 10px;
  font-size: 1.6rem;
  border-radius: 90%;
}

.enquiry-button {
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin: 0.2rem;
  background-color: #4169E1;
  color: #fff;
}

.enquiry-button:hover {
  background-color: #0056b3;
  /* Change color on hover */
}

.enquiry-title {
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-align: center;
  color: #07004D;
}

.enquiry-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.enquiry-form {
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 0px solid #ccc;
  font-size: 1.2rem;
  /* background-color: #fff; */
  background-color: transparent;
  border-bottom: 1px solid #000;

}

.input-field:focus {
  border-left: 5px solid #0056b3;
  outline: none;
}


textarea {
  resize: vertical
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