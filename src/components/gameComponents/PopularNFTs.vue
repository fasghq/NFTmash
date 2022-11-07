<template>

    <!-- Place for 2 NFTs and the result -->
    <div v-if='!mashed' class="border-[2px]">
        <div class="tracking-[3px] text-[20px] underline">
            Smash the popular NFT
        </div>
        <div class="p-[5px]">
            Round: {{ round }}/{{ rounds }}
        </div>
        <div class="sm:flex justify-around p-[10px]">

            <!-- 1st NFT -->
            <div v-on:click="selectNFT(1)"
                class="w-[300px] sm:w-[400px] hover:border-[3px] hover:border-[#80ff72] hover:rounded-[15px] hover:cursor-pointer">
                <img src="../../assets/images/temp_NFT_1.webp" class='rounded-[15px]' alt="">
            </div>
            <!-- Or -->
            <div class="flex flex-col justify-center text-[20px]">
                &lt;- Or -&gt;
            </div>

            <!-- 2nd NFT -->
            <div v-on:click="selectNFT(2)"
                class="w-[300px] sm:w-[400px] hover:border-[3px] hover:border-[#80ff72] hover:rounded-[15px] hover:cursor-pointer">
                <img src="../../assets/images/temp_NFT_2.jpeg" class='rounded-[15px]' alt="">
            </div>
        </div>
    </div>

    <div v-else>
        <div class="tracking-[3px] text-[20px] underline">
            Round {{ round }} result
        </div>

        <div class="sm:flex justify-around">
            Selected NFT is {{ NFT_chosed }}
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
    components:{
        Button
    },
    data() {
        return {
            mashed: false,
            NFT_chosed: 0
        }
    },
    computed: {
        ...mapState(useGameSession, ['rulesAccepted', 'rounds', 'round', 'gameOver'])
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
