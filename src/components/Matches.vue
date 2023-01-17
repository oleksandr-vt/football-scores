<script setup>
import { ref } from 'vue';
import { useTableStore } from '../stores/TableStore'

const tableStore = useTableStore()
</script>

<template>
    <div v-for="match in tableStore.matches">
        {{ match }}
    </div>
</template>

<style scoped>

</style>