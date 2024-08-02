<template>
    <button :class="`text-xl font-semibold w-full p-3 border-[2px] rounded-xl ${defineBlockColor}`">
        <span> {{ text }} </span>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    text: string,
    active: string
}

const props = defineProps<Props>()

const defineBlockColor = computed(() => {
    switch (props.text) {
        case 'P':
            if (props.text === props.active) {
                return 'border-green-500 bg-green-500 text-white'
            }
            return 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
        case 'V':
            if (props.text === props.active) {
                return 'border-sky-500 bg-sky-500 text-white'
            }
            return 'border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white'
        case 'A':
            if (props.text === props.active) {
                return 'border-red-500 bg-red-500 text-white'
            }
            return 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
        case 'T':
            if (props.text === props.active) {
                return 'border-yellow-500 bg-yellow-500 text-white'
            }
            return 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white'
        default:
            return 'border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white'
    }
})


</script>