<template lang="">
    <WrapSection>
        <div class="text-center space-y-10">
            <h2 class="text-indigo-900 text-3xl font-bold">Undangan dan Acara</h2>
            <p class="text-gray-700 text-lg font-small">Bahagia rasanya apabila anda berkenan hadir dan memberikan doa
</p>
            <div class="border border-gray-400  space-y-1 py-10 px-10 hover:bg-white hover:shadow-xl">
                
                <h3 class="text-gray-500 text-2xl font-bold pb-5">Syukuran Khitanan</h3>
                <p class="text-gray-900 text-xl font-bold">09:00 - 14:00 WIB</p>
                <p class="text-gray-700 text-lg font-small pb-5">Sabtu, 21 januari 2023</p>
                <p class="text-gray-700 text-lg font-small">jalan Manunggal Bhakti No. 62, RT/RW. 009/011, Kel. Kalisari, Kec. Pasar Rebo, Jakarta Timur</p>
            </div>
        </div>
        <Fixedbar />
    </WrapSection>
</template>

<script setup>
    import WrapSection from '@/Layout/WrapSection.vue' 
    import Fixedbar from '@/components/Fixedbar.vue'
</script>