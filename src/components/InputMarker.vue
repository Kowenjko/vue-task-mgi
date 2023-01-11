<script setup>
import DefaultButton from '../components/DefaultButton.vue'
const emit = defineEmits(['update:nameMarker', 'update:lat', 'update:lng', 'addMarker'])

const props = defineProps({
  nameMarker: { type: String, default: null },
  lat: { type: Number, default: null },
  lng: { type: Number, default: null },
})

const updateNameMarker = (event) => emit('update:nameMarker', event.target.value)
const updateLat = (event) => emit('update:lat', +event.target.value)
const updateLng = (event) => emit('update:lng', +event.target.value)
const addMarker = () => emit('addMarker')
</script>

<template>
  <div class="flex flex-col">
    <label class="text-sm font-bold" for="marker">Name marker</label>
    <input
      class="border border-gray-500 rounded-md h-10 pl-4 my-4"
      type="text"
      name="marker"
      @input="updateNameMarker"
      :value="nameMarker"
      placeholder="Enter name"
    />
    <div class="flex flex-col">
      <label class="text-sm font-bold" for="lat">Lat</label>
      <input
        class="border border-gray-500 rounded-md h-10 pl-4 my-4"
        type="text"
        name="lat"
        @input="updateLat"
        :value="lat"
        placeholder="Enter lat"
      />
      <label class="text-sm font-bold" for="lng">Lng</label>
      <input
        class="border border-gray-500 rounded-md h-10 pl-4 my-4"
        type="text"
        name="lng"
        @input="updateLng"
        :value="lng"
        placeholder="Enter lng"
      />
    </div>
    <DefaultButton class="mt-4" name="Create Marker" @click-button="addMarker" />
  </div>
</template>
