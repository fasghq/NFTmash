<template>
    <!-- Place for 2 NFTs and the result -->
    <div v-if='!mashed' class="border-[2px]">
        <div class="sm:tracking-[3px] sm:text-[20px] p-[5px] underline">
            S'mash the popular NFT
        </div>
        <div class="p-[5px]">
            Round: {{ round }}/{{ rounds }}
        </div>

        <div class="sm:flex sm:justify-around p-[5px] sm:p-[10px]">
            <!-- 1st NFT -->
            <div v-on:click="selectNFT(first_id)"
                class="w-[250px] mx-auto sm:w-[400px] hover:border-[3px] hover:border-[#80ff72] hover:rounded-[15px] hover:cursor-pointer">
                <img :src="'/src/data/BAYC/jpg/' + `${first_id}` + '.jpg'" class='rounded-[15px]' :alt="first_id">
            </div>

            <!-- OR -->
            <!-- Or: Computer -->
            <div class="hidden sm:flex flex-col justify-center sm:text-[20px] p-[10px]">
                &lt;- Or -&gt;
            </div>
            <!-- Or: mobile -->
            <div class="sm:hidden p-[10px]">
                Or
            </div>

            <!-- 2nd NFT -->
            <div v-on:click="selectNFT(second_id)"
                class="w-[250px] mx-auto sm:w-[400px] hover:border-[3px] hover:border-[#80ff72] hover:rounded-[15px] hover:cursor-pointer">
                <img :src="'/src/data/BAYC/jpg/' + `${second_id}` + '.jpg'" class='rounded-[15px]' :alt="second_id">
            </div>
        </div>
    </div>

    <!-- Result -->
    <div v-else>
        <div class="sm:tracking-[3px] sm:text-[20px] underline">
            Round {{ round }} result
        </div>

        <div class="sm:flex sm:justify-center">

            <div class="w-[250px] sm:w-[300px] sm:m-[20px]">
                <img :src="'/src/data/BAYC/jpg/' + `${first_id}` + '.jpg'" class='rounded-[15px]' :alt="first_id">
            </div>

            <!-- 2nd NFT -->
            <div class="w-[250px] sm:w-[300px] sm:m-[20px]">
                <img :src="'/src/data/BAYC/jpg/' + `${second_id}` + '.jpg'" class='rounded-[15px]' :alt="second_id">
            </div>
        </div>

        <div class="p-[10px]">
            You seleceted {{ NFT_chosed }}
        </div>

        <!-- Agree Button -->
        <div v-if="round != rounds">
            <Button :action="nextRound" buttonText="Smash Next!"></Button>
        </div>
        <div v-else>
            <Button :action="nextRound" buttonText="Show Result!"></Button>
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

// Import Button
import Button from '../../components/button.vue'

export default {
    name: 'PopularNFT',
    components: {
        Button
    },
    data() {
        return {
            mashed: false,
            NFT_chosed: 0,
            first_id: 0,
            second_id: 0,
        }
    },
    beforeMount() {
        this.first_id = this.gamePlay[this.round - 1].first
        this.second_id = this.gamePlay[this.round - 1].second
    },
    computed: {
        ...mapState(useGameSession, ['rulesAccepted', 'rounds', 'round', 'gameOver', 'gamePlay'])
    },
    methods: {
        ...mapActions(useGameSession, ['nextRound', 'SelectNFT']),
        selectNFT(id) {
            console.warn('id', id)
            this.mashed = true
            this.NFT_chosed = id
            this.SelectNFT(id)
        }
    }
}

</script>

<style>
div {
    /* border: 1px solid black; */
}
</style>
