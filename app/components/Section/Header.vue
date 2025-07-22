<template>
  <header class="header" :class="headerClass">
    <div class="logo">
      <img src="/img/common/coffee_logo.svg" alt="logo" />
    </div>
    <div class="catch-copy" :class="catchCopyClass">
      <div
        v-for="(word, idx) in catchcopy"
        :key="idx"
        class="catchcopy-line"
        :class="{ 'catchcopy-secondary': idx > 0 }"
      >
        <span
            v-for="(char, i) in word.split('')"
            :key="i + '-' + char"
            class="letter"
            :class="{ lower: i % 2 === 1 }"
          >{{ char }}</span>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  catchcopy: { type: Array, default: () => ['WELCOME'] },
  headerClass: { type: String, default: '' },
  catchCopyClass: { type: String, default: '' }
});
</script>