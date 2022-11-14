<template>
  <div class="container mx-auto h-screen flex flex-col justify-between font-arcade">
    <!-- Top Bar: Fixed -->
    <Header :mainPage = 'mainPage'></Header>
    <!-- Go To Main Page -->
    <div class="text-center mx-auto">
      <div>
        <router-link to="smashIt">
          <Button buttonText="s'Mash It Now!" class="w-full"></Button>
        </router-link>
      </div>
      <br>
      <div>
        <router-link to="NFT_Demo">
          <Button buttonText="Search My NFT" class="w-full"></Button>
        </router-link>
      </div>
    </div>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'

import { useRoute } from 'vue-router'

// Import Button
import Button from './button.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Button
  },
  data() {
    return {
      mainPage: false
    }
  },
  beforeMount() {
    const route = useRoute();
    const main = route.params.id;
    // console.warn(main)
    if(main == undefined){
      this.mainPage= true
    }
  },
}
</script>

<style>
* {
  border: 1px solid;
}
</style>
