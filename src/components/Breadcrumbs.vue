<script setup>
import { ref } from 'vue';
import { useTableStore } from '../stores/TableStore'
import BreadcrumbIcon from './icons/BreadcrumbIcon.vue';

const tableStore = useTableStore()
</script>

<template>
    <ul class="breadcrumbs">
        <li class="breadcrumb">
            <span @click="tableStore.step = 1, tableStore.resetMatches">Step 1</span>
        </li>

        <li class="breadcrumb" v-if="tableStore.step === 2 || tableStore.step === 3">
            <BreadcrumbIcon />
            <span @click="tableStore.step = 2">Step 2</span>
        </li>

        <li class="breadcrumb" v-if="tableStore.step === 3">
            <BreadcrumbIcon />
            <span @click="tableStore.step = 3">Step 3</span>
        </li>
    </ul>
</template>

<style scoped>
.breadcrumbs {
    align-self: flex-start;
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
    padding-bottom: 12px;
    border-bottom: 2px solid #8197AA;
}

.breadcrumb {
    color: #656565;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
}

.breadcrumb span {
    cursor: pointer;
    transition: 0.3s all ease;
}

.breadcrumb span:hover {
    text-decoration: underline;
    color: #212B36;
}
</style>