<template lang="">
<audio class="opacity-0 absolute" controls autoplay>
  <source :src="backsound" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
    <section class="bg-[url('@/assets/bg-hero.jpg')] relative max-w-sm w-full  h-auto mx-auto pt-20 overflow-hidden">
          
        <div class="flex justify-between w-full h-full">
         
            <div class=" flex-1  absolute top-0 left-0 w-full h-full ">
                <div id="heading"  class="py-20 bg-yellow-900 px-7 flex flex-col h-[100%] w-[70%] relative">
                    
                    <p class="text-yellow-300 font-small text-2xl leading-[40px]">Undangan</p>
                    <h2 class="text-yellow-300 font-bold text-5xl">Khitanan</h2>
                    <p class="text-yellow-300 font-small text-sm leading-[40px]">Sabtu, 21 Januari 2023</p>

                         
                    <div class="mt-12 max-w-[90%]">
                        <h3 class="text-yellow-300 font-small text-sm">M. Yusuf Azmi Najib</h3>
                        <p class= "text-center text-yellow-300 font-small text-sm">(Yusuf)</p>
                    </div>

                    

                    <div class="absolute bottom-20 w-full left-14 h-40 z-10">
                        
                        <div id="label-name" class="text-center   h-full ">
                        
                            <p class="text-yellow-300 font-bold mb-3">Kepada Yth</p>
                            <div class="w-full h-full opacity-75 bg-yellow-100 rounded flex justify-center items-center">
                            
                                <button @click="playAudio" type="button" :class="[buttonInvite ? 'hidden' : '' , 'absolute z-20 left-0 p-2 rounded font-bold h-full w-full  z-20 ']">Buka Undangan </button>
                                <div :class="[buttonInvite ? '' : 'hidden' , 'flex flex-col space-y-5 text-yellow-900 font-bold text-lg ']">
                                    <p class="capitalize ">{{peopleInvite}}</p>
                                    <p>di</p>
                                    <p class="capitalize">{{locationPeople}}</p>
                                </div>        
                            </div>
                        </div>
                    </div>

                </div>
            </div>
             <div id="box-image-hero" class=" flex-1 w-full h-[600px] relative">
                <img   class="shadow-xl w-auto h-auto absolute bottom-0 right-0" :src="hero" />
            </div> 
            
        </div>
    </section>
    <section class="bg-yellow-50 relative max-w-sm w-full  h-auto mx-auto py-10 px-10">
    
        <div class=" text-center text-yellow-900 py-5  space-y-5">
            <p class="font-medium text-lg sec-1 sec-opening-salam opacity-0">Assalaamu'alaikum wr, wb</p>
            <p class="font-medium text-sm sec-opening-desc opacity-0">Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara Syukuran khitan anak kami</p>
            <div class="w-full flex justify-center sec-opening-image opacity-0">
                <img class="rounded-full shadow-xl w-24 h-24 object-contain " :src="hero" />
            </div>
            <div class="sec-opening-name opacity-0">
                <p class="font-medium text-lg">Muhammad Yusuf Azmi Najib</p>
                <p class="font-medium text-sm mt-5">Putra Pertama dari Bpk. Nurdin Najib <span class="flex flex-col">&</span> Ibu Intan Yuniarti</p>

            </div>
        </div>
    </section>
    <section class="bg-yellow-900 relative max-w-sm w-full  h-auto mx-auto py-10 px-10">
        <div class=" text-center text-yellow-100 py-5  space-y-10">
            <p class="font-medium text-lg sec-date-label opacity-0">Save The Date</p>
            <p class="font-medium text-sm sec-date-desc opacity-0">Merupakan suatu kehormatan dan kebahagian bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a kepada anak kami</p>
            <div class="border border-yellow-100 rounded-md py-5 px-5 sec-date-content opacity-0">
               
                    <h2 class="font-medium text-2xl">Resepsi</h2>
                
                 <div class="mb-7 mt-5">
                        <p class="font-medium text-sm ">Sabtu, 21 Januari 2023 <span class="flex flex-col space-y-5  ">pkl. 12:00 Wib s/d selesai</span> di jalan Manunggal Bhakti RT/RW. 009/011, Kel. Kalisari Kec. Pasar Rebo Jakarta timur</p>
                 </div>
                 <div class="mb-5">
                    <a class="bg-orange-100 text-yellow-900 text-sm font-medium px-3 py-1 rounded shadow  " href="https://goo.gl/maps/1ftcZosXbBheR4Et9" target="_blank">Google Maps</a>
                 </div>
            </div>
        </div>
    </section>
    
    <section class="bg-yellow-50 relative max-w-sm w-full  h-auto mx-auto py-10 px-5 ">
        <div class=" text-center text-yellow-900 space-y-10">
            <p  class="font-medium text-lg ">Gallery</p>
            <ul role="list" class="grid grid-cols-2  gap-4 ">
                <li v-for="(gallery, index) in galleryImage" :key="gallery.id" class="relative">
                <div  class="h-40 w-full">
                    <img  :src="gallery.image" alt="" :class="[index % 2 ? 'img'+index : 'img'+index  , 'pointer-events-none h-full w-full object-cover rounded-lg group-hover:opacity-75 opacity-0 img'] " />
                </div>
                </li>
            </ul>
        </div>
    </section>
    <section class="bg-yellow-900 relative max-w-sm w-full  h-auto mx-auto py-10 px-10">
        <div class=" text-center text-yellow-50 py-5  space-y-5">
            <div class="w-full flex justify-center sec-close-image opacity-0">
                <img class="rounded-full shadow-xl w-24 h-24 object-contain bg-green-50" :src="hero" />
            </div>
            <div class="sec-close-desc opacity-0">
                <p class="font-medium text-lg">Muhammad Yusuf Azmi Najib</p>
                <p class="font-medium text-sm mt-5">Atas kehadirannya kami ucapkan terima kasih</p>

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
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import Lenis from '@studio-freight/lenis'
    import hero from '@/assets/hero.png'
    import backsound from '@/assets/backsound/backsound.mp3'
    import _1 from '@/assets/gallery/1.jpg'
    import _2 from '@/assets/gallery/2.jpg'
    import _3 from '@/assets/gallery/3.jpg'
    import _4 from '@/assets/gallery/4.jpg'
    import _5 from '@/assets/gallery/5.jpg'
    import _6 from '@/assets/gallery/6.jpg'
    import _7 from '@/assets/gallery/7.jpg'
    import _8 from '@/assets/gallery/8.jpg'
    import _9 from '@/assets/gallery/9.jpg'
    import _10 from '@/assets/gallery/10.jpg'
    import _11 from '@/assets/gallery/11.jpg'
    import _12 from '@/assets/gallery/12.jpg'
    import _13 from '@/assets/gallery/13.jpg'
    import _14 from '@/assets/gallery/14.jpg'
    import _15 from '@/assets/gallery/15.jpg'
    import {
    useRouter,
    useRoute
  } from 'vue-router'
  const peopleInvite = ref('')
  const locationPeople = ref('')
  const router = useRouter()
  const route = useRoute()
  const galleryImage = ref([
      {
          id:0,
          image:_1,
      },
      {
          id:1,
          image:_2,
      },
      {
          id:2,
          image:_3,
      },
      {
          id:3,
          image:_4,
      },
      {
          id:4,
          image:_5,
      },
      {
          id:5,
          image:_6,
      },
      {
          id:6,
          image:_7,
      },
      {
          id:7,
          image:_8,
      },
  ])

  const buttonInvite = ref(false);
  const elAfterClickButton = ref(false);

    
    
  
     onMounted(() => {

        // audio.play();
    gsap.registerPlugin(ScrollTrigger);
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
         console.log('queryName', queryName)
         if(queryName) {
             localStorage.setItem("queryName", queryName.replaceAll("-", " "));
         }
        peopleInvite.value = localStorage.getItem("queryName");
         if(queryLocation) {
             localStorage.setItem("queryLocation", queryLocation.replaceAll("-", " "));
         }
        locationPeople.value = localStorage.getItem("queryLocation");
         

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        });

        lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            // playAudio()
            
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
        cek()
        const arrSecOpenEl = ['.sec-opening-salam', '.sec-opening-desc','.sec-opening-image', '.sec-opening-name'];
        arrSecOpenEl.map((items)=>{
            var tl = gsap.timeline({
                scrollTrigger: items
            })
            .to(items, {
                stagger: 1,
                y: -10,
                opacity: 0,
                duration:0.5,
            }).to(items, {
                stagger: 1,
                opacity: 1,
                y: 0,
                duration:0.5,
            })
        })

        
        const arrSecDatenEl = ['.sec-date-label', '.sec-date-desc','.sec-date-content'];
        arrSecDatenEl.map((items)=>{
            var tl = gsap.timeline({
                scrollTrigger: items
            })
            .to(items, {
                stagger: 1,
                y: -10,
                opacity: 0,
                duration:0.5,
            }).to(items, {
                stagger: 1,
                opacity: 1,
                y: 0,
                duration:0.5,
            })
        })
        
        
        
        const arrSecClosenEl = ['.sec-close-image', '.sec-close-desc'];
        arrSecClosenEl.map((items)=>{
            var tl = gsap.timeline({
                scrollTrigger: items
            })
            .to(items, {
                stagger: 1,
                y: -10,
                opacity: 0,
                duration:0.5,
            }).to(items, {
                stagger: 1,
                opacity: 1,
                y: 0,
                duration:0.5,
            })
        })
    })

    const cek = () => {
        const arrEl = ['.img0', '.img1','.img2', '.img3', '.img4', '.img5', '.img6', '.img7', '.img8', '.img9', '.img10', '.img11', '.img12', '.img13', '.img14'];
        arrEl.map((items)=>{
            var tl = gsap.timeline({
                scrollTrigger: items
            })
            .to(items, {
                stagger: 1,
                y: -50,
                duration:.5,
            }).to(items, {
                stagger: 1,
                opacity: 1,
                y: 0,
                duration:.5,
            })
        })
    }

    
  const playAudio = () => {
      
        var audio = new Audio(backsound);
        audio.play();
        buttonInvite.value = true
  }

   </script>