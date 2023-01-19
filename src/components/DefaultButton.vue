<script setup>
const emit = defineEmits(['clickButton'])
const props = defineProps({
  name: { type: String, default: 'Open' },
})
</script>

<template>
  <button
    class="bg-[#237BFF] text-white px-5 py-3 rounded-lg hover:bg-[#11305f] transition-all w-full"
    @click="emit('clickButton')"
  >
    {{ props.name }}
  </button>
</template>
