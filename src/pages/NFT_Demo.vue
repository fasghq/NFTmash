<template>
    <div class="container mx-auto h-screen flex flex-col justify-between font-arcade">

        <!-- Top Bar: Fixed -->
        <Header></Header>
        <!-- Page Description -->

        <!-- Search Option -->
        <div class="flex justify-center">
            <input
                class="border border-[#80ff72] h-max p-[10px] rounded-[12px] hover:border-[#80ff72] focus:outline-none focus:border-[#80ff72] text-center"
                placeholder="Enter NFT Id" pattern="\d*" maxlength="5" v-model="id" required>
            <router-link :to="`/NFT_Demo/${id}`">
                <Button :action="info" buttonText="Get"></Button>
            </router-link>
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
        }
    },
}

</script>
<style scoped>
* {
    /* border: 1px solid; */
}
</style>