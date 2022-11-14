import {defineStore} from 'pinia'
import { transformWithEsbuild } from 'vite'

export const useGameSession = defineStore('gameSession',{
    state:() =>{
        return{
            // rules
            rules: [
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
                "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
                "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
                "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisivel augue.",
                "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
                "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus."
            ],
            rulesAccepted: true,
            // Game Play Information
            rounds: 3,
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
        SelectNFT(id,selection){
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