<template>
    <div class="font-arcade grid place-items-center h-screen text-[30px]">
        <div class="text-center">
            Opps! Something went wrong <br>
            <router-link to="/"><Button class="mt-[20px]" buttonText="Go Home"></Button></router-link>
        </div>
    </div>
</template>

<script>
import Button from '../components/button.vue'

export default {
    name: 'PageNotFound',
    components: {
        Button
    }
}
</script>

<style>
div {
    /* border: 1px solid */
}
</style>