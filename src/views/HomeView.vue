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
                <input type="email" v-model="emailID" placeholder="Enter your email" class="input-field" required>
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

        <!-- Subscription Success Popup -->
        <div v-if="subscriptionSuccess" class="popup">
          <div class="popup-content">
            <span class="close" @click="closeSubscriptionSuccess">&times;</span>
            <h2>Subscription Successful!</h2>
            <p>Thank you for subscribing.</p>
          </div>
        </div>
      </template>

      <template #enquiry>
        <div>
          <button @click="openEnquiryModal" class="enquiry-button">Enquiry</button>
          <!-- Modal -->
          <div v-if="isModalOpen" class="modal">
            <div class="modal-content">
              <span class="close" @click="closeEnquiryModal">&times;</span>
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

        <!-- Enquiry Success Popup -->
        <div v-if="enquirySuccess" class="popup">
          <div class="popup-content">
            <span class="close" @click="closeEnquirySuccess">&times;</span>
            <h2>Enquiry Sent!</h2>
            <p>Your enquiry has been successfully submitted.</p>
          </div>
        </div>

        <!-- No Flight Available Popup -->
        <div v-if="noFlightPopup" class="popup">
          <div class="popup-content">
            <span class="close" @click="closeNoFlightPopup">&times;</span>
            <h2>No Flights Available</h2>
            <p>There are no flights available on the selected date.</p>
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
      emailID: '',
      notificationTime: '',
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
        { title: 'Event 1', start: '2024-05-16' },
        { title: 'Event 2', start: '2024-05-20' },
        { title: 'Event 3', start: '2024-06-01' },
        // Add more events as needed
      ],


      isSubscriptionModalOpen: false,
      subscriptionSuccess: false,
      enquirySuccess: false,
      noFlightPopup: false,
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
    },
    openEnquiryModal() {
      this.isModalOpen = true;
    },
    closeEnquiryModal() {
      this.isModalOpen = false;
    },
    submitEnquiry() {
      this.closeEnquiryModal();
      this.enquirySuccess = true;
      this.name = '';
      this.message = '';
      setTimeout(() => {
        this.enquirySuccess = false;
      }, 2000);
    },

    closeEnquirySucces() {
      this.enquirySuccess = false;
    },

    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
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
        initialView: 'dayGridMonth',
        selectable: true,
        select: this.handleDateSelect.bind(this, 'select'),
        dateClick: this.handleDateSelect.bind(this, 'dateClick'),
        events: this.events,
      });
      this.calendar.render();
    },

    handleDateSelect(eventType, selectInfo) {
      const selectedDate = new Date(selectInfo.date || selectInfo.startStr);
      const formattedDate = selectedDate.toLocaleDateString('en-GB');
      // this.openSubscriptionModal(eventType, formattedDate);

      const eventsOnDate = this.events.filter(event => {
        const eventDate = new Date(event.start).toLocaleDateString('en-GB');
        return eventDate === formattedDate;
      });

      if (eventsOnDate.length > 0) {
        this.openSubscriptionModal(null, formattedDate);
      } else {
        this.noFlightPopup = true;
        setTimeout(() => {
          this.noFlightPopup = false;
        }, 2000);
      }
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
      this.subscriptionSuccess = true;
      this.emailID = '';
      this.notificationTime = '';
      setTimeout(() => {
        this.subscriptionSuccess = false;
      }, 2000);
    },

    closeSubscriptionSuccess() {
      // Close the subscription success popup
      this.subscriptionSuccess = false;
    },
  },
}
</script>

<style scoped src="./home-view-styles.css"></style>