<template>
    <section class="flex gap-3 relative">
        <StateButton text="P" :active="active" @click="changeStudentState(State.P)" />
        <StateButton text="V" :active="active" @click="changeStudentState(State.V)" />
        <StateButton text="A" :active="active" @click="changeStudentState(State.A)" />
        <StateButton text="T" :active="active" @click="changeStudentState(State.T)" />

        <div class="absolute w-full flex justify-center items-center bg-slate-500 h-full opacity-25 rounded-lg"
            v-if="isUpdating">
            <LoadingComponent :size="30" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import StateButton from '@students/components/StateButton.vue';
import { useStudentStore } from '@students/store/studentsStore';
import { State } from '@students/interfaces/Students'
import { Toast } from '@/utils/Toast'
import LoadingComponent from '@/modules/common/components/LoadingComponent.vue';

const studentStore = useStudentStore()

const isUpdating = ref(false)

interface Props {
    active: string
    studentId: number;
}

const props = defineProps<Props>()


const changeStudentState = async (newState: State) => {
    isUpdating.value = true
    const result = await studentStore.changeStudentStatus(props.studentId, newState)


    if (result) {
        Toast.success('Estado Modificado')
        isUpdating.value = false
        return
    }

    isUpdating.value = false
    Toast.error('Ha ocurrido un error')
}
</script>