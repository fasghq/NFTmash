<template>
    <div>
        Thank you for playing

        <div class="text-[25px]">Your score: {{ correctCount }}/{{ result.length }}</div>

        <!-- Here will come the scroll bar -->
        Here is your game Summary:

        <div class="h-5/6 overflow-auto border-[2px] text-center sm:p-[15px] m-[10px] sm:m-[20px]">
            <div class="underline m-[10px]">
                {{ title }}
            </div>
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
            correctCount: 0,
            Score_Title: [
                "Professor Xavier: seems you never judge somebody. Do you think all NFTs are the same?",
                "Thor: Mjölnir s'mashed one bad guy and seems to be broken somehow.",
                "Wolverine: each hand is for one bad guy. Are you stucked?",
                "Hulk s'mashes everything. Lucky to save more good guys this time.",
                "Fantastic 4 rescued. Bad guy is s'mashed!",
                "Hawkeye: s'mashed all the bad guys!"],
            title: ''
        }
    },
    beforeMount() {
        // console.log(this.result)
        for (var i = 0; i < this.result.length; ++i) {
            if (this.result[i].result == true)
                this.correctCount++;
        }
        this.title = this.Score_Title[this.correctCount]
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