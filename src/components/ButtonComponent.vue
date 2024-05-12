<!-- Custom button component

<template>
    <button class="custom-button" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    // Prop to specify the destination route for the button   
    props: {
        destination: {
            type: String,
            required: true
        }
    },
     // Method to handle button click
    methods: {
        handleClick() {
            // Redirect to the specified destination route upon button click
            this.$router.push(this.destination);
        }
    }
}
</script>

<style scoped>
/* styles for ButtonComponent.vue  */

.custom-button {
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin: 0.2rem;
}
</style> -->
<!-- 
<template>
    <button class="custom-button" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    // Prop to specify the destination route for the button   
    props: {
        destination: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const router = useRouter();

        // Method to handle button click
        const handleClick = () => {
            // Redirect to the specified destination route upon button click
            router.push(props.destination);
        };

        return { handleClick };
    }
}
</script>

<style scoped>
/* styles for ButtonComponent.vue  */

.custom-button {
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin: 0.2rem;
}
</style> -->


<template>
    <button class="custom-button" @click="handleClick">
        <!-- Slot for button content -->
        <slot></slot>
    </button>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'; // Import the useStore function from vuex

export default {
    // Prop to specify the destination route for the button   
    props: {
        destination: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const router = useRouter();
        const store = useStore(); // Access the Vuex store

        // const isLoggedIn = store.getters.isLoggedIn;


        // Method to handle button click
        const handleClick = () => {
            // Redirect to the specified destination route upon button click
            router.push(props.destination);
        };

        return { handleClick, store }; // Return the store along with other values
    }
}
</script>

<style scoped>
/* styles for ButtonComponent.vue  */

.custom-button {
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin: 0.2rem;
}
</style>
