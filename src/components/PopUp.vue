<script setup>
import IconClose from './icons/IconClose.vue'
const emit = defineEmits(['close'])
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: '900',
  },
})
const close = () => emit('close')
const defaultClass = `absolute left-1/2 top-1/2 bg-white rounded-lg w-[${props.width}px] border border-gray-300 transition-all p-5 cursor-default z-10`
</script>

<template>
  <div
    @click="close"
    class="fixed top-0 left-0 w-full h-full bg-[#18294326] transition-all z-40 cursor-pointer"
    :class="props.open ? 'opacity-100 visible' : 'opacity-0 invisible'"
  >
    <div
      @click.stop=""
      :class="[
        defaultClass,
        props.open
          ? 'opacity-100 visible -translate-x-1/2 -translate-y-1/2'
          : 'opacity-0 invisible -translate-x-1/2 -translate-y-1/3',
      ]"
    >
      <div @click="close" class="absolute right-2 top-2 cursor-pointer z-20">
        <IconClose class="w-8 h-8 hover:text-gray-200 transition-all" />
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
