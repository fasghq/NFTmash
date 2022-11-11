<template>
    <div class="tracking-[3px] text-[20px] underline">
        Rules
    </div>

    <div class="sm:h-5/6 overflow-auto border-[2px] text-justify sm:p-[15px] m-[10px] sm:m-[20px]">
        <div v-for='(item, index) in rules' class="mt-[5px] mb-[5px] p-[10px]">
                {{ index + 1 }}. {{ item }}
        </div>
    </div>
</template>

<script>
// accessing Pinia
import { useGameSession } from '../../stores/gameSession'

// importing states
import {
    mapState,
    mapActions
} from 'pinia'

export default {
    name: 'Rules',
    computed: {
        ...mapState(useGameSession, ['rules'])
    },
}
</script>