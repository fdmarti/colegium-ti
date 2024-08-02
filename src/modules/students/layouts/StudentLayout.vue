<template>
    <TopNavbar />
    <div class="m-10 mx-auto max-w-7xl flex px-1">
        <RouterView />
    </div>
    <FooterComponent />
</template>

<script setup lang="ts">
import TopNavbar from '@/modules/common/components/TopNavbar.vue';
import FooterComponent from '@/modules/common/components/FooterComponent.vue';
</script>