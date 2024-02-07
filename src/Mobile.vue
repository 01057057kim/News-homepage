<script setup>
import MobileNav from './components/MobileNav.vue'
import { ref } from 'vue'

const show = ref(false)

function toggleNav() {
    show.value = !show.value
}

</script>
<template>
    <div v-if="show">
        <MobileNav />
    </div>
    <main class="px-2 pt-6 w-[450px] mx-auto">
        <nav class="flex justify-between items-center font-inter text-[14px] w-[450px]">
            <img src="./assets/images/logo.svg" alt="svg">
            <div class="hover:scale-125">
                <button @click="toggleNav"><img src="./assets/images/icon-menu.svg" alt="svg"></button>
            </div>
        </nav>
        <article>
            <div class="mt-8 mb-8">
                <img src="./assets/images/image-web-3-mobile.jpg" alt="mobile">
            </div>

            <h2 class="font-extrabold text-black text-6xl mb-4">The Bright Future of Web 3.0?</h2>
            <p class="text-xl text-opacity-[60%] text-black">We dive into the next evolution of the web that claims to put
                the power of the
                platforms
                back into the hands of
                the people. But is it really fulfilling its promise?</p>

            <button
                class="mb-10 border border-solid px-10 py-3 bg-s-red uppercase text-o-white font-semibold mt-7  hover:bg-opacity-[60%] hover:text-black"
                type="button">Read more</button>

            <div class="border border-solid bg-v-d-blue px-6 pt-8 text-white mb-10">
                <h1 class="text-s-orange font-bold text-5xl mb-6">New</h1>
                <div class="border-b-2 border-solid border-g-blue border-opacity-[60%] pb-6 mb-6 cursor-pointer">
                    <a href="#">
                        <p class="font-semibold text-o-white text-2xl mb-3 hover:text-s-orange">Hydrogen VS Electric Cars
                        </p>
                        <p class="text-o-white text-lg text-opacity-[70%]">Will hydrogen-fueled cars ever catch up to EVs?
                        </p>
                    </a>
                </div>
                <div class="border-b-2 border-solid border-g-blue border-opacity-[60%] pb-6 mb-6 cursor-pointer">
                    <a href="#">
                        <p class="font-semibold text-o-white text-2xl mb-3 hover:text-s-orange">The Downsides of AI Artistry
                        </p>
                        <p class="text-o-white text-lg text-opacity-[70%]">What are the possible adverse effects of
                            on-demand AI
                            image generation?</p>
                    </a>
                </div>
                <div class="pb-5 mb-5">
                    <a href="#">
                        <p class="font-semibold text-o-white text-2xl mb-3 hover:text-s-orange cursor-pointer">Is VC Funding
                            Drying Up?</p>
                        <p class="text-o-white text-[17px] text-opacity-[70%]">Private funding by VC firms is down 50% YOY.
                            We take
                            a
                            look at what that means.</p>
                    </a>
                </div>
            </div>
            <div class="col-span-1 row-span-1 mb-10">
                <section class="grid grid-cols-2">
                    <div class="col-span-1 row-span-1">
                        <img class="w-[140px] h-[160px]" src="./assets/images/image-retro-pcs.jpg" alt="retro">
                    </div>
                    <div class="col-span-1 row-span-1 -ml-10">
                        <h3 class="text-g-blue font-bold text-5xl mb-5">01</h3>
                        <p class="text-black font-bold text-xl mb-3 hover:text-s-red">Reviving Retro PCs</p>
                        <p class="text-black text-[16px] opacity-[80%]">What happens when old PCs are given modern upgrades?
                        </p>
                    </div>
                </section>
            </div>
            <div class="col-span-1 row-span-1 mb-10">
                <section class="grid grid-cols-2">
                    <div class="col-span-1 row-span-1">
                        <img class="w-[140px] h-[160px]" src="./assets/images//image-top-laptops.jpg" alt="laptops">
                    </div>
                    <div class="col-span-1 row-span-1 -ml-10">
                        <h4 class="text-g-blue font-bold text-5xl mb-5">02</h4>
                        <p class="text-black font-bold text-xl mb-3 hover:text-s-red">Top 10 Laptops of 2022</p>
                        <p class="text-black text-[16px] opacity-[80%]">Our best picks for various needs and budgets.</p>
                    </div>
                </section>
            </div>
            <div class="col-span-1 row-span-1 mb-10">
                <section class="grid grid-cols-2">
                    <div class="col-span-1 row-span-1 ">
                        <img class="w-[140px] h-[160px]" src="./assets/images/image-gaming-growth.jpg" alt="gaming">
                    </div>
                    <div class="col-span-1 row-span-1 -ml-10">
                        <h4 class="text-g-blue font-bold text-5xl mb-5">03</h4>
                        <p class="text-black font-bold text-xl mb-3 hover:text-s-red">The Growth of Gaming</p>
                        <p class="text-black text-[16px] opacity-[80%]">How the pandemic has sparked fresh opportunities.
                        </p>
                    </div>
                </section>
            </div>
        </article>
    </main>
</template>
