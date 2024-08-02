<template>
    <section :class="`${defineBlockColor} flex items-center gap-2`">
        <span :class="`py-1 px-2 rounded-full font-semibold text-white`">{{ text }}</span>
        <p class="font-semibold">{{ value }}</p>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';


interface Props {
    text: string;
    value: number | string;
}

const props = defineProps<Props>()

const defineBlockColor = computed(() => {
    switch (props.text) {
        case 'P':
            return '[&>span]:bg-green-700 [&>p]:text-green-700'
        case 'V':
            return '[&>span]:bg-sky-400 [&>p]:text-sky-400'
        case 'A':
            return '[&>span]:bg-red-500 [&>p]:text-red-500'
        case 'T':
            return '[&>span]:bg-yellow-400 [&>p]:text-yellow-400'
        default:
            return '[&>span]:bg-slate-700 [&>p]:text-slate-700'
    }
})

</script>