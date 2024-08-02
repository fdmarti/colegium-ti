<template>
    <div>
        <input type="text" placeholder="Buscar" v-model="studentStore.studentFilter"
            class="p-3 bg-slate-50 sm:max-w-[400px] w-full sm:min-w-[400px] border-slate-500 border-[1px] rounded-lg">
    </div>
</template>

<script setup lang="ts">
import { useStudentStore } from '../store/studentsStore';

const studentStore = useStudentStore()

</script>
