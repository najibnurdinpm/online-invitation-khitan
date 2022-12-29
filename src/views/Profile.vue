<template lang="">
    <WrapSection>
        <div class="text-center space-y-10 px-5">
            <h2 class="text-indigo-900 text-3xl font-bold">Assalamu'alaikum Wr Wb</h2>
            <p class="text-gray-700 text-lg font-small">Dengan Rahmat Allah yang Maha Kuasa Insha Allah kami akan melangsungkan Syukuran Khitan</p>
            <div class="border border-gray-400 px-10 space-y-10 py-10 hover:bg-white hover:shadow-xl">
                <div class="flex justify-center">
                    <img class="w-20 h-20 flex justify-center object-cover object-center rounded-full" :src="hero" />
                </div>
                <h3 class="text-gray-500 text-2xl font-bold">Muhammad Yusuf Azmi Najib</h3>
                <p class="text-indigo-900 text-xl">Putra dari<span class="flex flex-col text-gray-500 font-bold"> Nurdin Najib dan Intan Yuniarti</span></p>
                <p class="text-gray-700 text-lg font-small">Muhammad Yusuf azmi merupakan anak pertama kami. Usianya menginjak 6 tahun. Dan akan sudah melaksanakan khitan pada tanggal 12 Desember 2022. Maka dari itu, kami ingin mengadakan syukuran atas acara tersebut dengan tujuan memanjatkan rasa terima kasih kami kepada yang maha kuasa serta berharap bahwa anak kami kelak menjadi anak yang bermanfaat bagi dirinya, agama, dan bangsa Indonesia.</p>
            </div>
        </div>
        <Fixedbar />
    </WrapSection>
</template>

<script setup>
    import WrapSection from '@/Layout/WrapSection.vue' 
    import Fixedbar from '@/components/Fixedbar.vue'
    import hero from '@/assets/hero.jpg'
</script>