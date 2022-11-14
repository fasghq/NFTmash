import {defineStore} from 'pinia'

export const useGameSession = defineStore('gameSession',{
    state:() =>{
        return{
            // rules
            rules: [
                "You will be presented with 5 pairs of NFTs",
                "One of the NFT is rare (valuable) than the other",
                "You need to choose the most valuable one",
                "After each round, you will see the result of your choice",
                "At the end of the game (i.e.) after 5 rounds, you will see your game summary",
                "Most important: Have Fun!!"
            ],
            rulesAccepted: false,
            // Game Play Information
            rounds: 5,
            round: 1,
            // create gamePlay
            gamePlay:[],
            // Selected Results
            result: [],
            gameOver: false,
        }
    },
    actions:{
        initializeGame(){
            console.log('Setting to Original States')
            const store = useGameSession()
            store.$reset()
            // creating Game
            this.createGame()
            console.log('Done')
            console.log('Initializing the Game!')

        },
        createGame(){
            
            const required = this.rounds * 2
            const totalNFT = 10000
            let ids: any[] = [];
            for(let i=1; i<=totalNFT;i++) {
                // const numb = Math.floor((Math.random() * totalNFT) + 1)
                ids.push(i)
            }
            const required_ids = ids.sort(() => Math.random() - 0.5).slice(0,required)
            // console.warn(required_ids)
            for(let i=0; i<required_ids.length;i += 2) {
                const gamePairs = {
                    first : 0,
                    second: 0,
                }
                gamePairs.first = required_ids[i]
                gamePairs.second = required_ids[i+1]
                this.gamePlay.push(gamePairs)

            }
            // this.gamePlay = this.gamePlay.sort(() => Math.random() - 0.5).slice(0,required)
            // console.log(this.gamePlay)
        },
        acceptRules(){
            this.rulesAccepted = true
        },
        // Game play functions
        SelectedNFT(id,selection){
            // Storing result in result array
            const resultObject = {
                round :0,
                selected: 0,
                result: null
            }
            // Inititializing
            resultObject.round = this.round
            resultObject.selected = id
            resultObject.result = selection

            // Adding result to array
            this.result.push(resultObject)
        },
        nextRound() {
            this.round++
            // Checking GameOver or not
            if (this.round > this.rounds) {
                this.gameOver = true
            }
        },
    }
})