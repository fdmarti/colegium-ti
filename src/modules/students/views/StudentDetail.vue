<template>
    <div>
        <CardStudent :student="studentInformation" v-if="studentInformation" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import CardStudent from '@students/components/CardStudent.vue';
import { useStudentStore } from '@students/store/studentsStore';
import type { Student } from '@students/interfaces/Students';

const studentStore = useStudentStore()

const route = useRoute()
const router = useRouter()
const { id } = route.params

const studentInformation = ref<Student>()


onMounted(async () => {
    const student = await studentStore.getStudentById(Number(id))

    if (student.result) {
        studentInformation.value = student.student
        return
    }

    router.replace({ name: 'students-list' })

})

</script>
