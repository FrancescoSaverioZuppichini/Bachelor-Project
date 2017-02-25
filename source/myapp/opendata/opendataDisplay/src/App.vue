<template>
<div id='App'>
  <around-me/>
</div>
</template>

<script>
import axios from 'axios'
import transportCard from './components/transportCard/transportCard.vue'
import stationCard from './components/stationCard/stationCard.vue'
import aroundMe from './components/aroundMe/aroundMe.vue'
import leavingSoon from './components/leavingSoon/leavingSoon.vue'
import usersContent from './components/usersContent/usersContent.vue'

export default {
  name: 'App',
  components: {
    transportCard,
    stationCard,
    aroundMe,
    leavingSoon,
    usersContent,
  }
}
</script>
<style></style>
