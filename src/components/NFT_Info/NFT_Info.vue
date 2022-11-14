<template>
    <!-- Main modal -->
    <div v-if="NFTExist" class="w-full mx-auto sm:w-max font-arcade">
        <div class="w-full flex flex-col justify-center md:inset-0 h-modal md:h-screen ">
            <div class=" p-4 border-[1px] w-full max-w-4xl h-full md:h-auto">
                <!-- Modal content -->
                <div class=" bg-white rounded-lg">
                    <!-- Modal header -->
                    <div class="flex justify-around items-start p-5 rounded-t border-b">
                        <h3 class="text-3xl lg:text-2xl text-center">
                            {{ NFT }} id: {{ id }}
                        </h3>
                    </div>

                    <img class="rounded-[15px] mx-auto w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]" :src="link" :alt="id">

                    <br>
                    <div class="text-center">
                        <div class="m-[10px]">
                            Rank: {{ rank }}
                        </div>
                        <div class="m-[10px]">
                            Score: {{ score }}
                        </div>
                    </div>

                    <div class="p-6 rounded-b border-t ">
                        <div class="flex items-center w-max mx-auto ">
                            <Button :action='goBack' buttonText="Go back!"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="!NFTExist">
        
        <div class="font-arcade grid place-items-center h-screen text-[30px]">
        <div class="text-center">
            Opps! Something went wrong <br>
            Enter Correct NFT ID. <br>
            <router-link to="/NFT_Demo"><Button class="mt-[20px]" buttonText="Go Back"></Button></router-link>
        </div>
    </div>
    </div>
</template>

<script>

import { useRoute } from 'vue-router'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Import Data
import BAYC_Info from '../../data_scores/BAYC/BAYC_Scores.json'
import MAYC_Info from '../../data_scores/MAYC/MAYC_Scores.json'

import Button from '../button.vue'

export default {
    name: 'NFT_Info',
    components: {
        Button
    },
    props: {
        NFT: String
    },
    data() {
        return {
            id: 0,
            pic_id: 0,
            NFTExist: true,
            link: '',
            score: 0,
            rank: 0

        }
    },
    async beforeMount() {
        const route = useRoute();
        const temp = route.params.id;
        this.id = temp
        this.pic_id = Number(this.id)

        const storage = getStorage();
        await getDownloadURL(ref(storage, `${this.NFT}` + '/' + `${this.pic_id}.jpg`))
            .then((url) => {
                this.link = url
            })
            .catch((error) => {
                // Handle any errors
                this.NFTExist = false
                console.log("NFT Does Not Exist")
                
            });

        // Getting Score value
        if (this.NFT == 'BAYC') {
            // Getting Score
            this.score = BAYC_Info[this.pic_id]['Score']
            this.rank = BAYC_Info[this.pic_id]['Rank']
        } else {
            this.score = MAYC_Info[this.pic_id]['Score']
            this.rank = MAYC_Info[this.pic_id]['Rank']
        }
    },
    methods: {
        goBack() {
            history.back()
        }
    },
}
</script>

<style>

</style>
