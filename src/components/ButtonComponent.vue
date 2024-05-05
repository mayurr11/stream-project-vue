<!-- Custom button component -->

<template>
    <button class="custom-button" @click="handleClick">
        <!-- Slot for button content -->
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
    font-weight: 600;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin: 0.2rem;
    min-width: 100%;
}
</style>