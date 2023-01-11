<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const updateValue = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <div class="form-input w-80 mt-7">
    <input
      class="input-text outline-none border border-gray-500"
      type="text"
      name="title"
      placeholder="Search post"
      :value="modelValue"
      @input="updateValue"
    />
    <label for="title" class="input-label">Search post</label>
  </div>
</template>

<style lang="scss" scoped>
.form {
  &-input {
    margin-bottom: 30px;
    position: relative;
  }
}
.input {
  &-text {
    padding: 0 10px;
    height: 40px;
    border-radius: 7px;
    font-size: 15px;
    width: 100%;
    position: relative;
    z-index: 1;
    &:focus {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
    &:not(:placeholder-shown) {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
  }
  &-label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    opacity: 0;
    z-index: -1;
    transition: 0.3s;
    font-size: 13px;
    color: var(--primary);
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
