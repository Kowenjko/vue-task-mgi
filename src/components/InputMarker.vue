<script setup>
import DefaultButton from '../components/DefaultButton.vue'
import DefaultInput from '../components/DefaultInput.vue'

const emit = defineEmits(['update:nameMarker', 'update:lat', 'update:lng', 'addMarker'])

const props = defineProps({
  nameMarker: { type: String, default: '' },
  lat: { type: Number, default: null },
  lng: { type: Number, default: null },
})

const updateNameMarker = (event) => emit('update:nameMarker', event)
const updateLat = (event) => emit('update:lat', +event)
const updateLng = (event) => emit('update:lng', +event)

const addMarker = () => emit('addMarker')
</script>

<template>
  <div class="flex flex-col gap-7">
    <h5 class="text-center font-bold">Create Marker</h5>
    <DefaultInput
      :modelValue="nameMarker"
      @update:modelValue="updateNameMarker"
      label="Name marker"
      name="marker"
      placeholder="Enter name"
    />
    <DefaultInput :modelValue="lat" @update:modelValue="updateLat" label="Lng" name="lng" placeholder="Enter lng" />
    <DefaultInput :modelValue="lng" @update:modelValue="updateLng" label="Lat" name="lat" placeholder="Enter lat" />
    <DefaultButton class="mt-4" name="Create Marker" @click-button="addMarker" />
  </div>
</template>
