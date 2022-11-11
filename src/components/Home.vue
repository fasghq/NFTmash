<template>
  <div class="container mx-auto h-screen flex flex-col justify-between font-arcade">

    <!-- Top Bar: Fixed -->
    <Header></Header>
    <!-- Page Description -->
    <div class="text-center">
      <div>
        <router-link to="smashIt">
          <Button buttonText="S'mash It Now!"></Button>
        </router-link>
      </div>
      <br>
      <div>
        <router-link to="NFT_Demo">
          <Button buttonText="Search My NFT"></Button>
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

// Import Button
import Button from './button.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Button
  },
}
</script>

<style>

</style>
