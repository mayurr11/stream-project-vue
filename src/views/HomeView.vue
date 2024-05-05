<!-- Home page -->

<template>
  <div>
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Main Content -->
    <div class="main-content">
      <VideoComponent />

      <div class="top-right-buttons">
        <!-- Log in button -->
        <ButtonComponent destination="/login" class="login-btn">Login</ButtonComponent>

        <!-- Information box -->
        <p class="box-content">

          <!-- List of flight information -->
        <ul>
          <li> - Take off time: </li>
          <li> - Docking time: </li>
          <li> - Flight duration: </li>
          <li> - Location: </li>
        </ul>
        </p>

        <!-- Enquiry Button -->
        <ButtonComponent destination="/enquiry" class="enquiry-btn">Enquiry</ButtonComponent>
      </div>
      <br>
    </div>

    <!-- Bottom content section -->
    <div class="bottom-content">
      <div class="box-content">
        <!-- List of upcoming flight information -->
        <ul>
          <li>
            <h4>Upcoming Flight Information: </h4>
          </li>
          <li> - 13:50: </li>
          <li> - </li>
          <li> - </li>
          <li> - </li>
        </ul>

        <!-- Subscribe buttons -->
        <div class="button-container">
          <ButtonComponent destination="/subscription" class="subscribe-btn">Subscribe</ButtonComponent>
          <ButtonComponent destination="/subscription" class="subscribe-btn">Subscribe</ButtonComponent>
        </div>
      </div>

      <!-- Calender Component -->
      <CalendarComponent class="calender" />
    </div>
  </div>
</template>

<script>

// Importing required components
import HeaderComponent from "../components/HeaderComponent.vue";
import VideoComponent from "../components/VideoComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import CalendarComponent from "../components/CalendarComponent.vue";

export default {
  components: {

    // Register components
    HeaderComponent,
    VideoComponent,
    ButtonComponent,
    CalendarComponent
  }
}
</script>

<style>

/* styles for HomeView.vue */
.main-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.top-right-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.box-content {
  min-height: 360px;
  min-width: 370px;
  border: 1px solid black;
  text-align: left;
  border-radius: 10px;
  background-color: antiquewhite;
  box-shadow: 0 0 2px #111;
}

.box-content ul {
  list-style: none;
  padding: 0px 20px;
}

.box-content ul li {
  padding-bottom: 4px;
}

.login-btn {
  background-color: rgb(0, 0, 32);
  color: #fff;
}

.login-btn:hover {
  box-shadow: 0 0 10px rgb(0, 0, 32);
}

.enquiry-btn {
  background-color: rgb(240, 74, 74);
  color: #fff;
}

.enquiry-btn:hover {
  box-shadow: 0 0 10px rgb(240, 74, 74);
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