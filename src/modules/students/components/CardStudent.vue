<template>
    <div class="shadow border-[1px] rounded-lg w-[300px] p-2 hover:bg-slate-50">
        <section class="flex justify-start items-center gap-3 mb-5">
            <img :src="student.avatar" :alt="`image of ${student.name}`" class="w-[80px] rounded-full shadow-xl"
                loading="lazy">
            <h2 @click="handleRedirection" class="font-semibold cursor-pointer hover:opacity-80">{{ student.name }}</h2>
        </section>
        <StateBlock :active="student.status" :studentId=Number(student.id) />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Student } from '../interfaces/Students';
import StateBlock from '@students/components/StateBlock.vue';

const router = useRouter()

interface Props {
    student: Student
}

const props = defineProps<Props>()

const handleRedirection = () => {
    router.push({ name: 'students-detail', params: { id: props.student.id } })
}

</script>