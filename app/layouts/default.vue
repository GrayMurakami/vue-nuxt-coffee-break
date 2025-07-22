<template>
  <SectionHeader :catchcopy="catchcopy" :headerClass="headerClass" :catchCopyClass="catchCopyClass" />
  <SectionNavi />
  <slot />
  <SectionFooter />
</template>

<script setup>
  const route = useRoute();
  const catchcopy = computed(() => route.meta.catchcopy || ['WELCOME']);
  const headerClass = computed(() => route.meta.headerClass || '');
  const catchCopyClass = computed(() => route.meta.catchCopyClass || '');
</script>