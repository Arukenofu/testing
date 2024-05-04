<script setup lang="ts">


</script>

<template>
    <div class="toast">
      <div class="toast-item">
        Группа телеграм &nbsp;<a href="https://t.me/infomlbb">t.me/infomlbb</a>
      </div>
    </div>
</template>

<style scoped lang="scss">
.toast {
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  background-color: #0a0a0a;
  border: 1px solid #1f1f1f;
  border-radius: 4px;

  .toast-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    min-width: 325px;
    height: 50px;
    text-align: center;
    background-color: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    font-size: .9em;
    font-weight: 600;
    backdrop-filter: hue-rotate(45deg);
  }
}




</style>