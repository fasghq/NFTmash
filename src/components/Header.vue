<template>
  <div class="sm:relative">
    <div class="flex justify-around flex-wrap sm:pt-[15px] sm:pb-[15px] border-b-[3px] border-[#80ff72]">
      <!-- Kramer Logo -->
      <div class=" text-[40px] tracking-[5px]">
        NFTMASH
      </div>
    </div>
    <div v-if="!mainPage" class="mx-auto w-[150px] sm:absolute right-[10px] m-[10px]">
      <router-link to="/">
        <Button buttonText="Home" class="w-full"></Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from './button.vue'

export default {
  name: 'Header',
  components: {
    Button
  },
  props:{
    mainPage:Boolean
  }
}
</script>