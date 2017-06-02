<template>
<div class='f-h'>
  <keep-alive>
    <router-view class='f-v'></router-view>
  </keep-alive>
  <!-- <router-view></router-view> -->
  <preference-confirmationModal></preference-confirmationModal>
</div>
</template>
<script>
import PreferenceConfirmationModal from './PreferenceConfirmationModal.vue'
export default {
  name: "CustomizationApp",
  components: {
    PreferenceConfirmationModal
  },
  mounted() {
    // this.$store.state.navigation.BASE_URL = this.$route.path
    console.log(this.$route.params);
    this.$store.actions.getMeById(this.$route.params.userId)
    this.$store.actions.fetchFaculties()
    this.$store.actions.fetchYears()
  },
  data() {
    return {

    }
  }
}
</script>
<style>

</style>
