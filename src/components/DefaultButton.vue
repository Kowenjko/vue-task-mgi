<script setup>
const emit = defineEmits(['clickButton'])
const props = defineProps({
  name: { type: String, default: 'Open' },
})
</script>

<template>
  <button
    class="bg-[#237BFF] text-white h-10 px-5 rounded-lg hover:bg-[#11305f] transition-all"
    @click="emit('clickButton')"
  >
    {{ props.name }}
  </button>
</template>
