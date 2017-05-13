<template>
<div class='uk-container uk-section uk-flex uk-flex-column'>
  <confirmation-modal></confirmation-modal>
  <div class='uk-margin-bottom'>
    <h5 class='uk-margin-remove'>Your preferences
<br />
<small class='uk-text-meta'>{{$store.state.user.preferences.data.length}} entries</small></h5>
  </div>
  <div class="uk-flex-column uk-flex-item-1">
    <div class="preference-station__container">
      <div v-if="$store.state.user.preferences.loading">
        <user-preference-dummy v-for="index in [1,2]"></user-preference-dummy>
      </div>
      <div class="uk-text-center" v-else-if="$store.state.user.preferences.data.length <= 0">
        <h6 class="uk-text-meta uk-text-large" uk-cover>No preferences found.</h6>
      </div>
      <div class="uk-card uk-card-default uk-card-body uk-margin-bottom" v-for="pref in $store.state.user.preferences.data" v-else>
        <div class="uk-float-right uk-flex uk-grid-small">
          <div>
            <span uk-icon="icon: pencil; ratio: 1.2" @click="tooglePrefereceEdit(pref)"></span>
          </div>
          <div>
            <span uk-icon="icon: trash; ratio: 1.2" @click="$store.state.currentPreference = pref" uk-toggle="target: #preference-confirmation__modal"></span>
          </div>

        </div>
        <div v-if="pref.station">
          <h6> <span class="" uk-icon="icon: location;ratio: 1.3"></span>
  {{pref.station.name}}</h6>
          <div v-for="bus in pref.buses">
            <div class='uk-flex uk-flex-middle'>
              <h3 class='uk-margin-remove'>{{bus.number}}</h3>
              <small class="uk-margin-left">{{bus.to}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="uk-margin-top navigation__actions padding--zero">
    <button class="uk-button uk-button-primary uk-float-right uk-width-auto@m" @click="$router.push({name:'station'})">New
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
    this.$store.actions.getMe('zuppif')
    setTimeout(() => {
      this.$store.actions.fetchUserPreferences()
    }, 500)

  },
  watch: {
    '$route': function(newRoute) {
      if (newRoute.path == '/preference/') {
        this.$store.PreferenceStore.initializeCurrentPreference()
      }
    }
  },
  data: function data() {
    return {
      toogle: false
    }
  },
  methods: {
    tooglePrefereceEdit(preference) {
      this.$store.actions.toogleEditMode(preference)
      this.$router.push({
        name: 'edit'
      })
    }
  }
}
</script>
<style>

</style>
