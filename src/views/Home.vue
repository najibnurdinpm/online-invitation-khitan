<template lang="">

    <section class="bg-[url('@/assets/bg-hero.jpg')] relative max-w-sm w-full  h-auto mx-auto pt-20">
        
        <div class="flex justify-between w-full h-full">
            <div class=" flex-1  absolute top-0 left-0 w-full h-full ">
                <div id="heading"  class="py-20 bg-yellow-900 px-7 flex flex-col h-[100%] w-[70%] relative">
                    
                    <p class="text-yellow-300 font-small text-2xl leading-[40px]">Undangan</p>
                    <h2 class="text-yellow-300 font-bold text-5xl">Khitanan</h2>
                    <p class="text-yellow-300 font-small text-sm leading-[40px]">Sabtu, 21 Januari 2023</p>

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
                <img   class="shadow-xl w-auto h-auto absolute bottom-0 right-0" :src="hero" />
            </div> 
        </div>
    </section>
    <section class="bg-yellow-50 relative max-w-sm w-full  h-auto mx-auto py-10 px-10">
    <audio id="Test_Audio" controls  autoplay>
        <source :src="backsound" type="audio/mp3">
        Your browser does not support the audio element.
        </audio>
        <div class=" text-center text-yellow-900 py-5  space-y-5">
            <p class="font-medium text-lg sec-1">Assalaamu'alaikum wr, wb</p>
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
    <!-- <section class="bg-yellow-50 relative max-w-sm w-full  h-auto mx-auto py-10 ">
        <div class=" text-center text-yellow-900 py-5  space-y-10">
            <p class="font-medium text-2xl">Gallery</p>
            
            <marquee>
            
                <div class="flex ">
                    <div v-for="(gallery, index) in galleryImage" :key="gallery.id" :class="[index % 2 ? 'flex  items-start' : 'flex  items-end' , '  whitespace-nowrap w-24 h-48 shrink-0' ]">
                        <div class="flex w-full h-1/2 ">
                            <img :data-id="" class="rounded-full shadow-xl w-24 h-24 object-contain " :src="gallery.image" /> 
                        </div>
                    </div>
                </div>

            </marquee>

            
            
        </div>
    </section> -->
    <section class="bg-yellow-50 relative max-w-sm w-full  h-auto mx-auto py-10 px-5">
    <div class=" text-center text-yellow-900 py-5  space-y-10">
        <p class="font-medium text-lg mb-[20%]">Gallery</p>
        <ul role="list" class="grid grid-cols-1  gap-y-8 ">
            <li v-for="(gallery, index) in galleryImage" :key="gallery.id" class="relative">
            <div class="h-80 w-full">
                <img  :src="gallery.image" alt="" :class="[index % 2 ? 'img'+(Number(index) - 1) : 'img'+index  , 'pointer-events-none h-full w-full object-cover group-hover:opacity-75 opacity-0 img'] " />
            </div>
            </li>
        </ul>
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
//   const galleryImage = ref([_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15])
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
      {
          id:8,
          image:_9,
      },
      {
          id:9,
          image:_10,
      },
      {
          id:10,
          image:_11,
      },
      {
          id:11,
          image:_12,
      },
      {
          id:12,
          image:_13,
      },
      {
          id:13,
          image:_14,
      },
      {
          id:14,
          image:_15,
      },
  ])

  
    
    
  
     onMounted(() => {
         

        document.getElementById("Test_Audio").play();

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
         if(queryName) {
             localStorage.setItem("queryName", queryName.replaceAll("-", " "));
         }
        peopleInvite.value = localStorage.getItem("queryName");
         if(queryLocation) {
             localStorage.setItem("queryLocation", queryLocation.replaceAll("-", " "));
         }
        locationPeople.value = localStorage.getItem("queryLocation");
         console.log(localStorage.getItem("queryLocation"))


         gsap.to(".sec-1", { 
             scrollTrigger: ".sec-1", 
             duration: 2,
            opacity: 1,
            delay: 2,
            ease: "power3.inOut",
             duration: 3 
        });

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        });

        lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            console.log({ scroll, limit, velocity, direction, progress })
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
        const arrEl = ['.img0', '.img2', '.img4', '.img6', '.img8', '.img10', '.img12', '.img14'];
        arrEl.map((items)=>{
            var tl = gsap.timeline({
                scrollTrigger: items
            })
            .to(items, {
                stagger: .5,
                y: -10,
                scrub:true,
                opacity: 1,
                duration:2,
                ease: "power3.inOut",
            })
        })
        
        // .to(el, {
        //     x:-100,
        //     opacity: 0,
        // })


    })

   </script>