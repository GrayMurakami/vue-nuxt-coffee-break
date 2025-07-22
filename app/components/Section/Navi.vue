<template>
  <nav class="globalnav">
    <ul class="globalnav-list">
      <li>
        <NuxtLink to="/" :class="{ active: isActive('/') }">TOP</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/variety" :class="{ active: isActive('/variety') }">VARIETY</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/place" :class="{ active: isActive('/place') }">PLACE &</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" :class="{ active: isActive('/contact') }">CONTACT</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute();
const isActive = (path) => route.path === path;
</script>