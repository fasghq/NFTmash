<template>
    <div class="container mx-auto h-screen flex flex-col justify-between font-arcade">

        <!-- Top Bar: Fixed -->
        <Header></Header>
        <!-- Page Description -->

        <!-- Search Option -->
        <div class="text-center mx-auto">
            <!-- ID Input -->
            <div class="p-[10px]">
                <input
                    class="border border-[#80ff72] h-max p-[10px] rounded-[12px] hover:border-[#80ff72] focus:outline-none focus:border-[#80ff72] text-center"
                    placeholder="Enter NFT Id" pattern="\d*" maxlength="5" v-model="id" required>
            </div>
            <!-- BAYC or MAYC -->
            <div class="p-[10px]">
                <select v-model="selected" class="border border-[#80ff72] h-max w-full p-[10px] rounded-[12px] hover:border-[#80ff72] focus:outline-none focus:border-[#80ff72] text-center">
                    <option disabled value="">Select NFT</option>
                    <option>BAYC</option>
                    <option>MAYC</option>
                </select>
            </div>

            <!-- Button -->
            <div class="p-[10px]">
                <div v-if="selected == 'BAYC'">
                    <router-link :to="`/NFT_Demo/BAYC/${id}`">
                        <Button :action="info" buttonText="Get" class="w-1/2"></Button>
                    </router-link>
                </div>

                <div v-if="selected == 'MAYC'">
                    <router-link :to="`/NFT_Demo/MAYC/${id}`">
                        <Button :action="info" buttonText="Get" class="w-1/2"></Button>
                    </router-link>
                </div>

                <div v-if="selected == ''">
                    <Button buttonText="Get" class="cursor-not-allowed bg-[#10a500] hover:bg-[#10a500] w-1/2"></Button>
                </div>
            </div>

        </div>
        <!-- Footer -->
        <Footer></Footer>
    </div>
</template>


<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// Import Button
import Button from '../components/button.vue'

// accessing Pinia
import { useNFTid } from '../stores/nft_Information'

// importing states
import {
    mapState,
    mapActions
} from 'pinia'

export default {

    name: 'NFT_Demo',
    components: {
        Header,
        Footer,
        Button
    },
    data() {
        return {
            id: '',
            selected: ''
        }
    },
    beforeMount() {
        this.initialize()
    },
    computed: {

    },
    methods: {
        ...mapActions(useNFTid, ['initialize']),
        info() {
            // Changing the id before sending
            this.id = ('00000' + this.id).slice(-5)

            this.error = [];
            if (this.id === null) {
                this.error.push('id')
            }

            if (this.error.length === 0) {
                console.log('data submitted')
            }

            // console.log('error', this.error)
        },
        selectedOption() {
            // console.log('--------')
            console.log(this.selected)
        }
    },
}

</script>
<style scoped>
* {
    /* border: 1px solid; */
}
</style>