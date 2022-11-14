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
            <div v-on:click="selectNFT(first_id, 1, 2)"
                class="w-[250px] mx-auto sm:w-[400px] hover:border-[3px] hover:border-[#80ff72] hover:rounded-[15px] hover:cursor-pointer">
                <!-- <img :src="'/src/data/BAYC/' + `${first_id}` + '.jpg'" class='rounded-[15px]' :alt="first_id"> -->
                <img :src="first_link" class='rounded-[15px]' :alt="first_id">

            </div>

            <!-- OR -->
            <!-- Or: Computer -->
            <div class="hidden sm:flex flex-col justify-center sm:text-[20px] p-[10px]">
                &lt;- Or -&gt;
            </div>
            <!-- Or: mobile -->
            <div class="sm:hidden">
                Or
            </div>

            <!-- 2nd NFT -->
            <div v-on:click="selectNFT(second_id, 2, 1)"
                class="w-[250px] mx-auto sm:w-[400px] hover:border-[3px] hover:border-[#80ff72] hover:rounded-[15px] hover:cursor-pointer">
                <!-- <img :src="'/src/data/BAYC/' + `${second_id}` + '.jpg'" class='rounded-[15px]' :alt="second_id"> -->
                <img :src="second_link" class='rounded-[15px]' :alt="second_link">
            </div>
        </div>
    </div>

    <!-- Result -->
    <div v-else>
        <div class="sm:tracking-[3px] sm:text-[20px] underline">
            Round {{ round }} result
        </div>

        <!-- Selection is correct -->
        <div class="sm:flex sm:justify-center">

            <!-- Highlighting Correct NFT withing this -->
            <!-- correct_NFT_index -->
            <div class="w-[250px] mx-auto sm:w-[300px] m-[10px] sm:m-[20px]"
                :class="{ correctBorder: correct_NFT_index == 1 && correctSelection == true, wrongBorder: correct_NFT_index == 2 && correctSelection == false }">
                <!-- <img :src="'/src/data/BAYC/jpg/' + `${first_id}` + '.jpg'" class='rounded-[15px]' :alt="first_id"> -->
                <img :src="first_link" class='rounded-[15px]' :alt="first_id">

            </div>

            <!-- 2nd NFT -->
            <div class="w-[250px] mx-auto sm:w-[300px] m-[10px] sm:m-[20px]"
                :class="{ correctBorder: correct_NFT_index == 2 && correctSelection == true, wrongBorder: correct_NFT_index == 1 && correctSelection == false }">
                <!-- <img :src="'/src/data/BAYC/jpg/' + `${second_id}` + '.jpg'" class='rounded-[15px]' :alt="second_id"> -->
                <img :src="second_link" class='rounded-[15px]' :alt="second_link">
            </div>
        </div>

        <div class="p-[10px]">
            <div v-if='correctSelection'>
                The choice is <span class="text-[#80ff72]">Correct</span>
            </div>

            <div v-if='!correctSelection'>
                The choice is <span class="text-red-500">Wrong</span>
            </div>
            You seleceted ID:{{ NFT_chosed }} 
        </div>

        <!-- Agree Button -->
        <div class="m-[10px]">
            <div v-if="round != rounds">
                <Button :action="nextRound" buttonText="Smash Next!"></Button>
            </div>
            <div v-else>
                <Button :action="nextRound" buttonText="Show Result!"></Button>
            </div>
        </div>
    </div>

</template>

<script>
// accessing Pinia
import { useGameSession } from '../../stores/gameSession'

import { getStorage, ref, getDownloadURL } from "firebase/storage";

// importing states
import {
    mapState,
    mapActions
} from 'pinia'

// Import Button
import Button from '../../components/button.vue'

import BAYC_Info from '../../data_scores/BAYC/BAYC_Scores.json'

export default {
    name: 'PopularNFT',
    components: {
        Button
    },
    data() {
        return {
            mashed: false,
            NFT_chosed: 0,
            NFT_not_chosed: 0,
            correct_NFT_index: 0,
            not_correct_NFT_index: 0,
            correctSelection: null,
            first_id: 0,
            first_rank: 0,
            first_link: '',
            second_id: 0,
            second_rank: 0,
            second_link: ''
        }
    },
    async beforeMount() {
        this.first_id = this.gamePlay[this.round - 1].first
        this.second_id = this.gamePlay[this.round - 1].second

        // Computing the ranks
        this.first_rank = BAYC_Info[this.first_id]['Rank']
        this.second_rank = BAYC_Info[this.second_id]['Rank']


        // console.warn(this.first_id, this.second_id)
        // console.warn(this.first_rank,this.second_rank)
        

        try {
            const storage = getStorage();
            await getDownloadURL(ref(storage, `BAYC` + '/' + `${this.first_id}.jpg`))
                .then((url) => {
                    this.first_link = url
                })
                .catch((error) => {
                    // Handle any errors
                });

            await getDownloadURL(ref(storage, `BAYC` + '/' + `${this.second_id}.jpg`))
                .then((url) => {
                    this.second_link = url
                })
                .catch((error) => {
                    // Handle any errors
                });
                // console.warn('--->',this.first_link)
                // console.warn('--->',this.second_link)


        } catch {
            console.log("NFT Does Not Exist")
        }

    },
    computed: {
        ...mapState(useGameSession, ['rulesAccepted', 'rounds', 'round', 'gameOver', 'gamePlay'])
    },
    methods: {
        ...mapActions(useGameSession, ['nextRound', 'SelectedNFT']),
        selectNFT(id, correctIndex, nonCorrectIndex) {
            this.mashed = true

            // Sorting Choosen and Not Choosen
            if (id != this.first_id) {
                this.NFT_chosed = this.second_id
                this.NFT_not_chosed = this.first_id
            } else {
                this.NFT_chosed = this.first_id
                this.NFT_not_chosed = this.second_id
            }
            // console.warn('NFT Choosen:', this.NFT_chosed)
            // console.warn('NFT Not Choosen:', this.NFT_not_chosed)

            // Now checking if the choise was correct or not
            if (BAYC_Info[this.NFT_chosed ]['Rank']< BAYC_Info[this.NFT_not_chosed]['Rank']) {
                this.correctSelection = true

            } else {
                this.correctSelection = false
            }

            // Checking the correct Index:
            if (this.correctSelection) {
                this.correct_NFT_index = correctIndex
                this.not_correct_NFT_index = nonCorrectIndex
            } else {
                this.correct_NFT_index = nonCorrectIndex
                this.not_correct_NFT_index = correctIndex
            }

            // console.warn(this.correct_NFT_index)
            // console.warn('correctSelection', this.correctSelection)
            // console.warn('Correct', this.correct_NFT_index, 'Non Correct', this.not_correct_NFT_index)

            this.SelectedNFT(id, this.correctSelection)
        }
    }
}

</script>

<style>
div {
    /* border: 1px solid black; */
}

.correctBorder {
    border: 3px solid #80ff72;
    border-radius: 15px;
}

.wrongBorder {
    border: 3px solid red;
    border-radius: 15px;
}
</style>
