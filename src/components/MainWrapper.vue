<script setup>
import { useTableStore } from '../stores/TableStore'
import AddTeam from './AddTeam.vue';
import Breadcrumbs from './Breadcrumbs.vue';
import Matches from './Matches.vue';
import Logo from './icons/Logo.vue';

const tableStore = useTableStore()
</script>

<template>
    <div class="wrapper">
        <h1 class="title">Welcome to the football match stats generator!</h1>
        <Logo />
        <Breadcrumbs />

        <AddTeam v-if="tableStore.step === 1" />
        <Matches v-if="tableStore.step === 2" />
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
</style>