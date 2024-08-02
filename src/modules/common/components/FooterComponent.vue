<template>
    <footer
        class="bg-slate-100 md:fixed bottom-0 w-full flex p-2 md:justify-end gap-5 flex-col md:flex-row items-center">
        <ItemNavbar text="P" value="Presente" />
        <ItemNavbar text="V" value="Presente Virtual" />
        <ItemNavbar text="A" value="Ausente" />
        <ItemNavbar text="T" value="Tarde/Atraso" />
    </footer>
</template>

<script setup lang="ts">
import ItemNavbar from './Navbar/ItemNavbar.vue';

</script>
