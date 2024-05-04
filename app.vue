<script setup>


</script>

<template>
  <toast  />

  <nuxt-page />


</template>

<style>
  .toast-enter-active {
    transition: bottom .3s ease;
  }

  .toast-leave-active {
    transition: bottom .3s ease, opacity .2s ease;
  }

  .toast-enter-from {
    bottom: -50px;
  }

  .toast-leave-to {
    bottom: -50px;
    opacity: 0;
  }
</style>