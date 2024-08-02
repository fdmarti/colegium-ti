<template>
    <LoadingComponent v-if="studentStore.isLoading" />
    <div v-else>
        <SearchComponent />
        <section class="flex flex-wrap justify-center mt-5 gap-6 mb-5">
            <CardStudent v-for="student in studentStore.students" :key="student.id" :student="student" />
        </section>
    </div>

</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useStudentStore } from '@students/store/studentsStore';
import { CardStudent, SearchComponent } from '@students/components';
import LoadingComponent from '@/modules/common/components/LoadingComponent.vue';

const studentStore = useStudentStore()

onMounted(() => {
    studentStore.getStudents()
})

</script>