<template>
    <!-- Main modal -->
    <div class="w-full mx-auto sm:w-max font-arcade">
        <div class="w-full flex flex-col justify-center md:inset-0 h-modal md:h-screen ">
            <div class=" p-4 border-[1px] w-full max-w-4xl h-full md:h-auto">
                <!-- Modal content -->
                <div class=" bg-white rounded-lg">
                    <!-- Modal header -->
                    <div class="flex justify-around items-start p-5 rounded-t border-b">
                        <h3 class="text-3xl lg:text-2xl ">
                            Ape id: {{id}}
                        </h3>
                    </div>
                    <!-- Modal body -->
                    <img class="rounded-[15px]" :src="'/src/data/BAYC/jpg/' + `${pic_id}` + '.jpg'" :alt="id">
                    <!-- <div v-if="!NFTExist" class="p-[20px] sm:flex ">
    
                        <div class="w-3/5 sm:w-2/5 mx-auto">
                            <img class="rounded-[15px]" src="../assets/Images/Modal/error/NoBird.jpeg" alt="Bird Not Hatched">
                        </div>
    
                        <div class='sm:flex sm:justify-around sm:w-3/5 mt-[15px] sm:mt-0'>
                            <div class="grid place-content-center text-center sm:text-[20px]">
                                Opps! The NFT not found.
                            </div>
                        </div>
                    </div> -->
                    <!-- Modal footer -->
                    <div class="p-6 rounded-b border-t ">
                        <div class="flex items-center w-max mx-auto ">
                            <Button :action='goBack' buttonText="Go back!"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useRoute } from 'vue-router'

import {useNFTid} from '../../stores/nft_Information'

// Import Data
// import birdData from '../assets/data/data.json'
import Button from '../button.vue'

export default {
    name: 'NFT_Info',
    components: {
        Button
    },
    props: {

    },
    data() {
        return {
            id: 0,
            pic_id: 0,
            NFTExist: true
        }
    },
    beforeMount() {
        const route = useRoute();
        const temp = route.params.id;
        this.id = temp
        this.pic_id = Number(this.id)
        try {
           

        } catch {
            console.log("Bird Does Not Exist")
        }
    },
    methods: {
            goBack(){
                history.back()
            }
    },
}
</script>

<style>

</style>
