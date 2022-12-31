<template lang="">
    <section class="bg-[url('@/assets/bg-hero.jpg')] relative max-w-sm w-full  h-auto mx-auto pt-20">
        <div class="flex justify-between w-full h-full">
            <div class=" flex-1  absolute top-0 left-0 w-full h-full ">
                <div class="py-20 bg-yellow-900 px-7 flex flex-col h-[100%] w-[70%] relative">
                    
                    <p class="text-yellow-300 font-bold text-2xl leading-[20px]">Undangan</p>
                    <h2 class="text-yellow-300 font-bold text-5xl">Khitanan</h2>
                    <p class="text-yellow-300 font-bold text-sm leading-[20px]">Sabtu, 21 Januari 2023</p>

                    <div class="mt-12 max-w-[90%]">
                        <h3 class="text-yellow-300 font-small text-lg">M. Yusuf Azmi Najib</h3>
                        <p class= "text-center text-yellow-300 font-small text-lg">(Yusuf)</p>
                    </div>


                    <div class="absolute bottom-20 w-full left-14 h-40 z-10">
                        <div class="text-center   h-full">
                            <p class="text-yellow-300 font-bold mb-3">Kepada Yth</p>
                            <div class="w-full h-full opacity-75 bg-yellow-100 rounded flex justify-center items-center">
                                <div class="flex flex-col space-y-5 text-yellow-900 font-bold text-lg">
                                    <p>Aunty Tahira</p>
                                    <p>di</p>
                                    <p>Singapore</p>
                                </div>        
                            </div>
                        </div>
                    </div>

                </div>
            </div>
             <div class=" flex-1 w-full h-[600px] relative">
                <img class="shadow-xl w-auto h-auto absolute bottom-0 -right-5" :src="hero" />
            </div> 
        </div>
    </section>
</template>
<script setup>
    import {
        ref,
        onMounted
    } from 'vue'
    import WrapSection from '@/Layout/WrapSection.vue'
    import Fixedbar from '@/components/Fixedbar.vue'
    import hero from '@/assets/hero.png'
    import {
    useRouter,
    useRoute
  } from 'vue-router'
  const peopleInvite = ref('')
  const locationPeople = ref('')
  const router = useRouter()
  const route = useRoute()
     onMounted(() => {
         const queryName = route.query.name
         const queryLocation = route.query.location
         if(queryName) {
             localStorage.setItem("queryName", queryName.replaceAll("-", " "));
         }
        peopleInvite.value = localStorage.getItem("queryName");
         if(queryLocation) {
             localStorage.setItem("queryLocation", queryLocation.replaceAll("-", " "));
         }
        locationPeople.value = localStorage.getItem("queryLocation");
         console.log(localStorage.getItem("queryLocation"))
    })
</script>