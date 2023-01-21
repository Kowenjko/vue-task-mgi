<script setup>
import PopUp from '../components/PopUp.vue'
import InputMarker from '../components/InputMarker.vue'
import DefaultButton from '../components/DefaultButton.vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LIcon, LTileLayer, LMarker, LTooltip } from '@vue-leaflet/vue-leaflet'
import { useActionsLeaflet } from '../composables/useActionsLeaflet'
import { COORDINATE_UKRAINE, LEAFLET_URL, ICON_MARKER } from '../services/CollectionNames'

const { openPopUpMarker, markers, addMarker, onMapClick, closePopUp, lat, lng, nameMarker } = useActionsLeaflet()
</script>

<template>
  <div>
    <DefaultButton class="mt-4 w-[15%]" name="Create Marker" @click-button="openPopUpMarker = true" />
    <l-map
      class="mt-4 z-0 w-full rounded-lg shadow-xl"
      :zoom="6"
      :minZoom="3"
      :maxZoom="18"
      :zoomAnimation="true"
      :center="COORDINATE_UKRAINE"
      style="height: 75vh"
      @click="onMapClick"
    >
      <l-tile-layer :url="LEAFLET_URL" />

      <l-marker v-for="(marker, index) in markers" :key="index" :lat-lng="[marker.lat, marker.lng]">
        <l-icon :icon-url="ICON_MARKER" />
        <l-tooltip> {{ marker.name }} </l-tooltip>
      </l-marker>
    </l-map>
    <PopUp @close="closePopUp" :open="openPopUpMarker" width="400px">
      <InputMarker v-model:nameMarker="nameMarker" v-model:lat="lat" v-model:lng="lng" @addMarker="addMarker" />
    </PopUp>
  </div>
</template>
