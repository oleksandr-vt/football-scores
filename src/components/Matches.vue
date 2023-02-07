<script setup>
import { ref } from 'vue';
import { useTableStore } from '../stores/TableStore'

const tableStore = useTableStore()

const inputs = ref([])
const error = ref(false)
</script>

<template>
    <div class="matches">
        <p class="text">Please fill in the results of the matches:</p>

        <div class="matches-block">
            <div class="matches-row" v-for="(match, index) in tableStore.matches" :id="index">
                <div class="matches-item">
                    <span class="matches-name">{{ match[0] }}</span>

                    <div class="input-wrapper">
                        <input :id="inputs[index]" :class="{ error: inputs[index] < 0 }" type="number" min="0"
                            :value="0">
                        <span>*</span>
                    </div>
                </div>

                <span>-</span>

                <div class="matches-item">
                    <span class="matches-name">{{ match[1] }}</span>

                    <div class="input-wrapper">
                        <input :id="inputs[index]" :class="{ error: inputs[index] < 0 }" type="number" min="0"
                            :value="0">
                        <span>*</span>
                    </div>
                </div>
            </div>
        </div>

        <button class="button button-large" :disabled="error">
            Generate table
        </button>
    </div>
</template>

<style scoped>
.matches {
    width: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
}

.matches-block {
    background-color: #ffffff;
    padding: 24px;
    border-radius: 16px;
    margin-top: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.matches-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 20px;
    border-bottom: 2px solid #8197AA;
}

.matches-row:last-child {
    padding-bottom: 0;
    border-bottom: none;
}

.matches-item {
    width: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.matches-name {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 22px;
}

.input-wrapper {
    position: relative;
    padding-left: 16px;
    margin-left: -16px;
}

.input-wrapper input {
    width: 80px;
}

.input-wrapper span {
    position: absolute;
    top: 0;
    left: 0;
    color: #FF0000;
    display: none;
}

.input-wrapper input.error {
    border: 2px solid #FF0000;
}

.input-wrapper input.error:focus {
    border: 2px solid #FF0000;
}

.input-wrapper input.error+span {
    display: inline-block;
}
</style>