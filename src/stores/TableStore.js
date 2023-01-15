import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTableStore = defineStore('tableStore', () => {
    const teams = ref([])

    const teamsInLocalStorage = localStorage.getItem('teams')
    if (teamsInLocalStorage) {
        teams.value = JSON.parse(teamsInLocalStorage)
    }

    const deleteTeam = (index) => {
        teams.value != teams.value.splice(index, 1)
    }

    watch(teams, (team) => {
        localStorage.setItem('teams', JSON.stringify(team))
    }, { deep: true })

    return { teams, deleteTeam }
})