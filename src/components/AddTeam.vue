<script setup>
import { ref } from 'vue';
import ErrorIcon from './icons/ErrorIcon.vue'

const input = ref('')
const error = ref(false)

const addTeam = () => {
    if (input.value) {
        console.log(input.value)
        error.value = false
    } else {
        error.value = true
    }
}
</script>

<template>
    <form class="form" @submit.prevent @submit="addTeam">
        <input class="input" v-model="input" minlength="2" maxlength="30" type="text" placeholder="Enter team">
        <button class="button" type="submit">Submit</button>

        <p class="error" v-if="error">
            <ErrorIcon />
            Please enter a team
        </p>
    </form>
</template>

<style scoped>
.form {
    position: relative;
    padding-top: 32px;
    width: 100%;
    max-width: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.input {
    display: block;
    min-width: 280px;
    max-width: 500px;
    flex-grow: 1;
    height: 40px;
    padding: 5px 10px;
    font-family: 'Verdana', sans-serif;
    font-size: 16px;
    border: 2px solid #8197AA;
    border-radius: 4px;
}

.error {
    position: absolute;
    top: 4px;
    left: 0;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #FF0000;
}
</style>