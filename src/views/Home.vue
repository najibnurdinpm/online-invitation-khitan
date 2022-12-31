<template lang="">
    <section class="bg-[url('@/assets/bg-hero.jpg')] relative max-w-sm w-full  h-auto mx-auto pt-20">
        <div class="flex justify-between w-full h-full">
            <div class=" flex-1  absolute top-0 left-0 w-full h-full ">
                <div id="heading"  class="py-20 bg-yellow-900 px-7 flex flex-col h-[100%] w-[70%] relative">
                    
                    <p class="text-yellow-300 font-bold text-2xl leading-[20px]">Undangan</p>
                    <h2 class="text-yellow-300 font-bold text-5xl">Khitanan</h2>
                    <p class="text-yellow-300 font-bold text-sm leading-[20px]">Sabtu, 21 Januari 2023</p>

                    <div class="mt-12 max-w-[90%]">
                        <h3 class="text-yellow-300 font-small text-lg">M. Yusuf Azmi Najib</h3>
                        <p class= "text-center text-yellow-300 font-small text-lg">(Yusuf)</p>
                    </div>


                    <div class="absolute bottom-20 w-full left-14 h-40 z-10">
                        <div id="label-name" class="text-center   h-full">
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
             <div id="box-image-hero" class=" flex-1 w-full h-[600px] relative">
                <img  class="shadow-xl w-auto h-auto absolute bottom-0 right-0" :src="hero" />
            </div> 
        </div>
    </section>
    <section class="bg-yellow-50 relative max-w-sm w-full  h-auto mx-auto py-10 px-10">
        <div class=" text-center text-yellow-900 py-5  space-y-5">
            <p class="font-medium text-lg">Assalaamu'alaikum wr, wb</p>
            <p class="font-medium text-sm">Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara Syukuran khitan anak kami</p>
            <div class="w-full flex justify-center">
                <img class="rounded-full shadow-xl w-24 h-24 object-contain " :src="hero" />
            </div>
            <div class="">
                <p class="font-medium text-lg">Muhammad Yusuf Azmi Najib</p>
                <p class="font-medium text-sm mt-5">Putra Pertama dari Bpk. Nurdin Najib <span class="flex flex-col">&</span> Ibu Intan Yuniarti</p>

            </div>
        </div>
    </section>
    <section class="bg-yellow-900 relative max-w-sm w-full  h-auto mx-auto py-10 px-10">
        <div class=" text-center text-yellow-100 py-5  space-y-10">
            <p class="font-medium text-lg">Save The Date</p>
            <p class="font-medium text-sm">Merupakan suatu kehormatan dan kebahagian bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a kepada anak kami</p>
            <div class="border border-yellow-100 rounded-md py-5 px-5">
                <h2 class="font-medium text-2xl">Resepsi</h2>
                <p class="font-medium text-sm mt-5">Sabtu, 21 Januari 2023 <span class="flex flex-col space-y-5">pkl. 12:00 Wib s/d selesai</span> di jalan Manunggal Bhakti RT/RW. 009/011, Kel. Kalisari Kec. Pasar Rebo Jakarta timur</p>

            </div>
        </div>
    </section>
    <section class="bg-yellow-50 relative max-w-sm w-full  h-auto mx-auto py-10 px-10">
        <div class=" text-center text-yellow-900 py-5  space-y-10">
            <p class="font-medium text-2xl">Gallery</p>
            <div class="flex ">
                <div class="flex items-start  whitespace-nowrap w-24 h-48 ">
                    <div class="flex w-full h-1/2 ">
                        <img class="rounded-full shadow-xl w-24 h-24 object-contain " :src="hero" /> 
                    </div>
                </div>
                <div class="flex items-end  whitespace-nowrap w-24 h-48 ">
                    <div class="flex w-full h-1/2 ">
                        <img class="rounded-full shadow-xl w-24 h-24 object-contain " :src="hero" /> 
                    </div>
                </div>
                <div class="flex items-start  whitespace-nowrap w-24 h-48 ">
                    <div class="flex w-full h-1/2 ">
                        <img class="rounded-full shadow-xl w-24 h-24 object-contain " :src="hero" /> 
                    </div>
                </div>
                <div class="flex items-end  whitespace-nowrap w-24 h-48 ">
                    <div class="flex w-full h-1/2 ">
                        <img class="rounded-full shadow-xl w-24 h-24 object-contain " :src="hero" /> 
                    </div>
                </div>
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
    import gsap from 'gsap'

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

        gsap.fromTo(
            "#heading",
            {
            opacity: 0,
            },
            {
            duration: 1.5,
            opacity: 1,
            delay: 0.5,
            ease: "power3.inOut",
            }
        );

        gsap.fromTo(
            "#box-image-hero",
            {
            opacity: 0,
            x: "-20%",
            },
            {
            duration: 2,
            opacity: 1,
            x: 0,
            delay: 1,
            ease: "power3.inOut",
            }
        );
        gsap.fromTo(
            "#label-name",
            {
            opacity: 0,
            },
            {
            duration: 2,
            opacity: 1,
            delay: 1.5,
            ease: "power3.inOut",
            }
        );

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