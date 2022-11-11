import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue';
import game from './pages/game.vue';
import NFT_Demo from './pages/NFT_Demo.vue';
import NFT_Info from './components/NFT_Info/NFT_Info.vue';

const routes=[
    {
        name:'Home',
        path:'/',
        component: Home
    },
    {
        name:'game',
        path:'/SmashIt',
        component: game,
    },
    {
        name:'NFT_Demo',
        path:'/NFT_Demo',
        component: NFT_Demo
    },
    {
        name:'NFT_Info',
        path:'/NFT_Demo/:id',
        component: NFT_Info,
        // beforeEnter: (to, from, next) => {
        //     // reject the navigation
        //     console.log('Entering User', to.params.id)
        //     to.params.myCustomizations = {
                
        //     }
        //     if(Number(to.params.id) === Number(to.params.id) && (to.params.id).length == 4){
        //         next()
        //     }
        //     else{
        //         alert('Invalid Input')
        //         next('/')
        //     }
        //   },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

