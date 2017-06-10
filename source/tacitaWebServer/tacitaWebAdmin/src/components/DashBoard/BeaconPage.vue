<template>
<page title="Beacon">
  <div class='uk-flex--grow'>
    <div class="uk-text-center uk-margin-large-top" v-if="$store.state.beacons.data.length <= 0">
      <h6 class='uk-text-meta uk-text-large'>No Beacons</h6>
    </div>
    <resources-wrapper :data='$store.state.beacons'>
      <beacon :data="el" v-for="el in $store.state.beacons.data"></beacon>
    </resources-wrapper>
  </div>
  <v-btn floating primary @click.native="$store.state.showCreateDisplayModal = true" class='floating-btn'>
    <v-icon dark>add</v-icon>
  </v-btn>
  <transition name="fade">
    <div uk-modal="center: true" class="uk-modal uk-open uk-flex uk-flex-center uk-flex-middle" v-show="$store.state.showCreateDisplayModal">
      <div class="uk-modal-dialog uk-modal-body">
        <h4>Create a new beacon?</h4>
        <input v-model="newBeacon.beacon_id" class="uk-input uk-margin-bottom" type="text" placeholder="Beacon adress">
        <div>
          <v-btn default flat @click.native="$store.state.showCreateDisplayModal = false">Cancel</v-btn>
          <v-btn primary dark @click.native="$store.actions.createBeacon(newBeacon)">Yes</v-btn>
        </div>
      </div>
    </div>
  </transition>
</page>
</template>
<script>
import Page from '../Page/Page.vue'
import Beacon from '../Beacon/Beacon.vue'
import ResourcesWrapper from '../Resources/ResourcesWrapper.vue'

export default {
  name: "",
  components: {
    ResourcesWrapper,
    Beacon,
    Page
  },
  watch: {
    '$store.state.showCreateDisplayModal': function(from, to) {
      this.newBeacon = {}
    }
  },
  data: function data() {
    return {
      newBeacon: {
        beacon_id: null
      }
    }
  }
}
</script>
<style>
</style>
