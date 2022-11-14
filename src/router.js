import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue';
import game from './pages/game.vue';
import NFT_Demo from './pages/NFT_Demo.vue';
import InfoBAYC from './pages/InfoNFTs/InfoBAYC.vue'
import InfoMAYC from './pages/InfoNFTs/InfoMAYC.vue'

import PageNotFound from './pages/PageNotFound.vue';

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
        name:'404Error',
        path:'/:pathMatch(.*)*',
        component: PageNotFound
    },
    {
        name:'InfoBAYC',
        path:'/NFT_Demo/BAYC/:id',
        component: InfoBAYC,
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
    {
        name:'InfoMAYC',
        path:'/NFT_Demo/MAYC/:id',
        component: InfoMAYC,
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

