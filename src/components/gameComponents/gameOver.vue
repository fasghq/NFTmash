<template>
    <div>
        Thank you for playing

        <div class="text-[25px]">Your score: {{ correctCount }}/{{ result.length }}</div>

        <!-- Here will come the scroll bar -->
        Here is your game Summary:
        <div class="sm:h-5/6 overflow-auto border-[2px] text-center sm:p-[15px] m-[10px] sm:m-[20px]">
            <div v-for="i in result" class="p-[10px]">
                In Round {{ i.round }}, you selected {{ i.selected }} which is
                <span v-if="i.result == true" class="text-[#80ff72]">Right</span>
                <span v-if="i.result == false" class="text-red-500">Wrong</span>
            </div>
        </div>
    </div>

    <div class="mx-auto">
        <!-- <Button :action='goBack' buttonText="Go Main Page"></Button> -->
        <!-- <router-link to="/smashIt"> -->
        <Button :action="playAgain" buttonText="Play Again" class="w-max"></Button>
        <!-- </router-link> -->
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

// Import Button
import Button from '../button.vue'

export default {
    name: 'GameResult',
    components: {
        Button
    },
    data() {
        return {
            correctCount: 0
        }
    },
    beforeMount() {
        // console.log(this.result)
        for (var i = 0; i < this.result.length; ++i) {
            if (this.result[i].result == true)
                this.correctCount++;
        }
    },
    computed: {
        ...mapState(useGameSession, ['result'])
    },
    methods: {
        ...mapActions(useGameSession, []),
        playAgain() {
            window.location.reload();
        }
    },
}
</script>

<style>
* {
    border: 1px solid;
}
</style>