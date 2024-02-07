<script setup>
import { ref } from 'vue'

const show = ref(true)

const close = () => {
    show.value = false
}
</script>

<template>
    <div class="top-0 fixed w-full h-full bg-black bg-opacity-[40%] mx-auto" v-if="show">
        <div class="w-[250px] bg-white fixed h-screen right-0 pl-8 py-8 pr-2">
            <div class="flex justify-end ">
                <button @click="close"><img src="../assets/images/icon-menu-close.svg" alt="close"></button>
            </div>
            <ul class="flex flex-col gap-5 cursor-pointer text-2xl mt-20 font-medium">
                <li class="hover:text-s-red">Home</li>
                <li class="hover:text-s-red">New</li>
                <li class="hover:text-s-red">Popular</li>
                <li class="hover:text-s-red">Trending</li>
                <li class="hover:text-s-red">Categories</li>
            </ul>
        </div>
    </div>
</template>
