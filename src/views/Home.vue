<template lang="">
    <WrapSection>
        <div class="flex flex-col text-center justify-center space-y-7">
            <h1 class="text-indigo-900 text-3xl font-bold">Syukuran Khitanan</h1>
            <h4 class="text-indigo-900 text-lg font-medium">Muhammad yusuf Azmi Najib</h4>
            
            <div class="flex justify-center">
                <img class="w-40 h-50" :src="hero" />
            </div>
            <h2 class="text-indigo-900 text-xl font-bold">Sabtu, 21 Januari 2023</h2>
            <p class="text-indigo-900 text-sm font-small">untuk </p>
            <p class="text-indigo-900 text-xl font-bold capitalize ">{{peopleInvite}}</p>
            <p class="text-indigo-900 text-lg font-small ">di <span class="capitalize">{{ locationPeople }}</span> </p>
        </div>
        <Fixedbar />
    </WrapSection>
</template>
<script setup>
    import {
        ref,
        onMounted
    } from 'vue'
    import WrapSection from '@/Layout/WrapSection.vue'
    import Fixedbar from '@/components/Fixedbar.vue'
    import hero from '@/assets/hero.jpg'
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