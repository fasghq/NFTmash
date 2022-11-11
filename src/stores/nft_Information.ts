import {defineStore} from 'pinia'


export const useNFTid = defineStore('NFTid',{
    state:() =>{
        return{
           nft_id: 0
        }
    },
    actions:{
        initialize(){
            console.log('Setting to Original States')
            const store = useNFTid()
            store.$reset()
            console.log('Done')
            console.log('Search NFT!')
        },
    }
})