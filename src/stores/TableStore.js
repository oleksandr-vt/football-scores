import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'

export const useTableStore = defineStore('tableStore', () => {
    const teams = ref([])
    const matches = ref([])
    const step = ref(1)

    const teamsInLocalStorage = localStorage.getItem('teams')
    if (teamsInLocalStorage) {
        teams.value = JSON.parse(teamsInLocalStorage)
    }

    const resetMatches = computed(() => {
        if (step.value === 1) matches.value = []
    })

    const deleteTeam = (index) => {
        teams.value != teams.value.splice(index, 1)
    }

    const generateMatches = () => {
        step.value = 2

        const filteredNames = ref([])

        filteredNames.value = teams.value.map(item => item.name)

        for (let firstTeam = 0; firstTeam < filteredNames.value.length; firstTeam++) {
            for (let secondTeam = firstTeam + 1; secondTeam < filteredNames.value.length; secondTeam++) {
                matches.value.push([filteredNames.value[firstTeam], filteredNames.value[secondTeam]])
            }
        }
    }

    watch(teams, (team) => {
        localStorage.setItem('teams', JSON.stringify(team))
    }, { deep: true })

    return { teams, matches, step, resetMatches, deleteTeam, generateMatches }
})