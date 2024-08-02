<template>
    <header class="flex flex-col items-center gap-3 justify-center p-2">
        <h4 class="font-semibold text-sm">Resumen del dia </h4>
        <div class="flex gap-6 sm:flex-row flex-col items-center" v-if="!studentStore.isLoading">
            <ItemNavbar text="P" :value="studentStore.amountStudentsP" />
            <ItemNavbar text="V" :value="studentStore.amountStudentsV" />
            <ItemNavbar text="A" :value="studentStore.amountStudentsA" />
            <ItemNavbar text="T" :value="studentStore.amountStudentsT" />
            <ItemNavbar text="Total" :value="studentStore.studentsAmount" />
        </div>
    </header>
</template>

<script setup lang="ts">
import { useStudentStore } from '@students/store/studentsStore';
import ItemNavbar from './Navbar/ItemNavbar.vue';

const studentStore = useStudentStore()
</script>