<template>
<div class="card" style="width: 20rem;">
  <div class="card-block">
    <p> {{station.name}}</p>
  </div>
</div>
</template>
<script>
import stationCardInfo from './stationCardInfo/stationCardInfo.vue'
export default {
  name: 'stationCard',
  props: ['station'],
  components: {
    stationCardInfo,
  },
}
</script>
<style>

</style>
