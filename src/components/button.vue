<template>
    <button v-on:click=action class="border rounded-[15px] p-[10px] bg-[#80FF72] hover:bg-[#fff07c] text-[15px] tracking-[.15em] shadow-2xl">{{buttonText}}</button>
</template>

<script>
export default{
    props:{
        buttonText:String,
        action:Function
    }
}
</script>