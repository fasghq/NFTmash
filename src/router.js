import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue';
import game from './pages/game.vue';

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
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

