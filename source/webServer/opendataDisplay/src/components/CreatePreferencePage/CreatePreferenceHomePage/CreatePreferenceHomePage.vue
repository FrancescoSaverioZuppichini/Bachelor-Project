<template>
<div class='uk-container uk-section uk-flex uk-flex-column'>
  <confirmation-modal></confirmation-modal>
  <h2 class='uk-margin-remove'>Your preferences</h2>
  <div class="uk-flex-column uk-flex-item-1">
    <div class="preference-station__container">
      <div v-if="$store.state.preferences.loading">
        <user-preference-dummy v-for="index in [1,2]"></user-preference-dummy>
      </div>
      <div class="uk-text-center" v-else-if="$store.state.preferences.data.length <= 0">
        <h6 class="uk-text-meta uk-text-large" uk-cover>No preferences found.</h6>
      </div>
      <div class="uk-card uk-card-default uk-card-body uk-margin-bottom" v-for="pref in $store.state.preferences.data" v-else>
        <div class="uk-float-right">
          <div>
            <span uk-icon="icon: close; ratio: 1.2" @click="$store.state.currentPreference = pref" uk-toggle="target: #preference-confirmation__modal"></span>
          </div>
        </div>
        <div v-if="pref.station">
          <h5> <span class="" uk-icon="icon: location;ratio: 1.3"></span>
  {{pref.station.name}}</h5>
          <div v-for="stationboard in pref.buses">
            <div class='uk-flex uk-flex-middle'>
              <h3 class='uk-margin-remove'>{{stationboard.bus.number}}</h3>
              <small class="uk-margin-left">{{stationboard.to}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions">
    <button class="uk-button uk-button-primary uk-float-right uk-width-auto@m" @click="$router.push({path:'/preference/station'})">New
</button>
  </div>
</div>
</template>
<script>
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal.vue'
import UserPreferenceDummy from '../UserPreference/UserPreferenceDummy.vue'

export default {
  name: "CreatePreferenceHomePage",
  components: {
    ConfirmationModal,
    UserPreferenceDummy
  },
  created() {
    this.$store.actions.fetchUserPreferences(1, false)
  },
  data: function data() {
    return {
      toogle: false
    }
  }
}
</script>
<style>

</style>
