<script setup>
const emit = defineEmits(['changePage'])

const props = defineProps({
  pageCount: { type: Number, default: 1 },
  numberPage: { type: Number, default: 1 },
})

const changePage = (count) => emit('changePage', count)
</script>

<template>
  <ul class="flex gap-4" v-if="pageCount > 1">
    <li
      class="p-2 cursor-pointer rounded-lg hover:bg-[#F0F6FF]"
      :class="numberPage === count ? 'bg-[#201F38] text-white font-bold' : ''"
      @click="changePage(count)"
      v-for="count in pageCount"
      :key="count"
    >
      {{ count }}
    </li>
  </ul>
</template>
