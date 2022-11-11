<template>
    <div class="container mx-auto h-screen flex flex-col justify-between font-arcade">

        <!-- Top Bar: Fixed -->
        <Header></Header>
        <!-- Page Description -->

        <!-- Rules Page -->
        <div v-if="!rulesAccepted"
            class="sm:w-1/2 h-2/3 sm:mx-auto p-[20px] text-center flex flex-col sm:justify-around border">
            <!-- Text with Rules -->
            <Rules></Rules>
            <!-- Agree Button -->
            <div class="">
                <Button :action='acceptRules' buttonText="Let's Play!"></Button>
            </div>
        </div>
        <div v-if="rulesAccepted" class="text-center">
            <!-- Game -->
            <div v-for="i in rounds">
                <div v-if="i == round">
                    <PopularNFT></PopularNFT>
                </div>
            </div>
            <!-- Game Over -->
            <div v-if="gameOver">
               <gameOver></gameOver>
            </div>
        </div>
        <!-- Footer -->
        <Footer></Footer>
    </div>
</template>


<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Rules from '../components/gameComponents/Rules.vue'
import PopularNFT from '../components/gameComponents/PopularNFTs.vue'
import gameOver from '../components/gameComponents/gameOver.vue'

// Import Button
import Button from '../components/button.vue'

// accessing Pinia
import {useGameSession} from '../stores/gameSession'

// importing states
import {
    mapState,
    mapActions
} from 'pinia'

export default {
    
    name: 'Game',
    components: {
        Header,
        Footer,
        Rules,
        PopularNFT,
        gameOver,
        Button
    },
    data() {
        return {
            
        }
    },
    beforeMount() {
        this.initializeGame()
    },
    computed:{
        ...mapState(useGameSession,['rulesAccepted','rounds','round','gameOver','gamePlay'])
    },
    methods: {
        ...mapActions(useGameSession, ['sayHi','initializeGame','acceptRules','nextRound'])
    },
}

</script>
<style scoped>
* {
    /* border: 1px solid; */
}
</style>