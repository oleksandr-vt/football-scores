<script setup>
import { ref } from 'vue';
import { useTableStore } from '../stores/TableStore'
import ErrorIcon from './icons/ErrorIcon.vue'
import DeleteIcon from './icons/DeleteIcon.vue'

const tableStore = useTableStore()

const inputValue = ref('')
const inputError = ref(false)

const addTeam = () => {
    if (inputValue.value) {
        inputError.value = false

        tableStore.teams.unshift({
            name: inputValue.value,
            games: 0,
            gamesWin: 0,
            gamesLost: 0,
            goalsScored: 0,
            goalsMissed: 0,
            points: 0,
        })

        inputValue.value = ''
    } else {
        inputError.value = true
    }
}
</script>

<template>
    <div class="add-team">
        <form class="form" @submit.prevent @submit="addTeam">
            <input class="input" v-model="inputValue" minlength="2" maxlength="45" type="text"
                placeholder="Enter a team">
            <button class="button" type="submit">Submit</button>

            <p class="error" v-if="inputError">
                <ErrorIcon />
                Please enter a team
            </p>
        </form>

        <ul class="list">
            <li class="list-item" v-for="(team, index) in tableStore.teams" :key="index">
                {{ team.name }}
                <DeleteIcon @click="tableStore.deleteTeam(index)" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.add-team {
    width: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.form {
    position: relative;
    padding-top: 32px;
    width: 100%;
    max-width: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.input {
    display: block;
    min-width: 280px;
    max-width: 400px;
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

.list {
    align-self: flex-start;
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
}

.list-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 12px;
    color: #FFFFFF;
    background-color: #2295FF;
    border-radius: 6px;
    font-size: 15px;
}

.list-item svg {
    cursor: pointer;
}
</style>