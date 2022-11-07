<template>
    <div>
        Thank you for playing <br>
        Here is your game Summary:
        <div v-for="i in result" class="p-[10px]">
            Round: {{i.round}}; You selected: {{i.selected}}
        </div>
    </div>
    
    <div>
        <Button :action='goBack' buttonText="Go Main Page"></Button>
        <!-- <button onclick="" class=" border-[2px] m-2">Go Main Page</button> -->
    </div>
</template>

<script>
// accessing Pinia
import {useGameSession} from '../../stores/gameSession'

// importing states
import {
    mapState,
    mapActions
} from 'pinia'

// Import Button
import Button from '../button.vue'

export default {
    name: 'GameResult',
    components:{
        Button
    },
    data() {
        return {
            
        }
    },
    beforeMount() {
        
    },
    computed:{
        ...mapState(useGameSession,['result'])
    },
    methods: {
        ...mapActions(useGameSession, []),
        goBack(){
            history.back()
        }
    },
}
</script>