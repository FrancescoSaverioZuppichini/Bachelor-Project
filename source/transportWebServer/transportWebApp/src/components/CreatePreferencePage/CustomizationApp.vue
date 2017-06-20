<template>
<div class='f-h'>
  <keep-alive>
    <router-view class='f-v'></router-view>
  </keep-alive>
  <preference-confirmationModal></preference-confirmationModal>
</div>
</template>
<script>
import PreferenceConfirmationModal from './PreferenceConfirmationModal/PreferenceConfirmationModal.vue'
export default {
  name: "CustomizationApp",
  components: {
    PreferenceConfirmationModal
  },
  mounted() {
    // this.$store.state.navigation.BASE_URL = this.$route.path
    this.$store.actions.getMeById(this.$route.params.userId)
    this.$store.actions.fetchNearbyLocations()

  },
  data() {
    return {

    }
  }
}
</script>
<style>

</style>
