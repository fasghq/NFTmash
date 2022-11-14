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
                            {{ NFT }} id: {{ id }}
                        </h3>
                    </div>
                    <!-- Modal body -->
                    <!-- <img class="rounded-[15px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
                        :src="'/src/data/' + `${NFT}/` + `${pic_id}` + '.jpg'" :alt="id"> -->

                        <img class="rounded-[15px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
                        :src="link" :alt="id">

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

import { useRoute } from 'vue-router'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Import Data
// import birdData from '../assets/data/data.json'
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
            link: ''
        }
    },
    async beforeMount() {
        const route = useRoute();
        const temp = route.params.id;
        this.id = temp
        this.pic_id = Number(this.id)
                
        try {
            const storage = getStorage();
            await getDownloadURL(ref(storage, `${this.NFT}` + '/'+`${this.pic_id}.jpg`))
                .then((url) => {
                    this.link = url
                })
                .catch((error) => {
                    // Handle any errors
                });
        } catch {
            console.log("NFT Does Not Exist")
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
