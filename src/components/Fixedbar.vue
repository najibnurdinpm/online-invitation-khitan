<template lang="">
    <ul class="fixed bottom-0 flex justify-between max-w-sm w-full h-10 bg-indigo-400">
        <li class="flex justify-center border border=gray-400 p-1 w-full">
            <router-link to="/" class=" p-1 text-center rounded text-gray-100 w-full">Home</router-link>
        </li>
        <li class="flex justify-center border bordergray-400 p-1 w-full">
            <router-link to="/profile" class=" p-1 text-center rounded text-gray-100 w-full">Profile</router-link>
        </li>
        <li class="flex justify-center border border=gray-400 p-1 w-full">
            <router-link to="/invite" class=" p-1 rounded text-gray-100 w-full">Undangan</router-link>
        </li>
        <li class="flex justify-center border border=gray-400 p-1 w-full">
            <button class=" p-1 rounded text-gray-100 w-full">Lokasi</button>
        </li>
    </ul>
</template>