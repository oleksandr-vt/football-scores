<script setup>
import AddTeam from './AddTeam.vue';
import Logo from './icons/Logo.vue';
</script>

<template>
    <div class="wrapper">
        <h1 class="title">Welcome to the football match stats generator!</h1>
        <Logo />
        <p class="text">Please enter at least two teams:</p>

        <AddTeam />
    </div>
</template>

<style scoped>
.wrapper {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.text {
    font-size: 18px;
}
</style>