<template>
  <div class="flex join w-full justify-center mt-4">
    <button class="join-item btn" @click="decrementPage">«</button>
    <button class="join-item btn">{{ currentPage }}</button>
    <button class="join-item btn" @click="incrementPage">»</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const currentPage = ref(1);
const emit = defineEmits(['page-change']);
// Emit page change event
watch(currentPage, () => {
  emit('page-change', currentPage.value);
});

const decrementPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const incrementPage = () => {
  currentPage.value++;
};
</script>
