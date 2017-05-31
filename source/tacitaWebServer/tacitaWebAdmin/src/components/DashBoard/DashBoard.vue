<template>
<page title="Display">
  <resources-wrapper :data='$store.state.displays'>
    <display :data="el" v-for="el in $store.state.displays.data"></display>
  </resources-wrapper>
  <transition name="fade">
    <div uk-modal="center: true" class="uk-modal uk-open uk-flex uk-flex-center uk-flex-middle" v-show="$store.state.showCreateDisplayModal">
      <div class="uk-modal-dialog uk-modal-body">
        <h4>Create a new display?</h4>
        <div>
          <v-btn default flat @click.native="$store.state.showCreateDisplayModal = false">Cancel</v-btn>
          <v-btn primary dark @click.native="$store.actions.createDisplay({})">Yes</v-btn>
        </div>
      </div>
    </div>
  </transition>
  <div class='uk-text-center'>
    <v-btn primary dark @click.native="$store.state.showCreateDisplayModal = true">Add</v-btn>
  </div>
  <div>
    Unliked Beacons
    <draggable v-model="beacons" class='display-beacon__container' :options="{group:'people'}">
      <div v-for="beacon in beacons" :key='beacon'>
        {{beacon.beacon_id}}
      </div>
    </draggable>
  </div>
</page>
</template>
<script>
import draggable from 'vuedraggable'
import ResourcesWrapper from '../Resources/ResourcesWrapper.vue'
import Display from '../Display/Display.vue'
import Page from '../Page/Page.vue'

export default {
  name: "DashBoard",
  components: {
    ResourcesWrapper,
    Display,
    Page,
    draggable
  },
  data: function data() {
    return {

    }
  },
  mounted() {
    this.$store.actions.fetchDisplays()
    this.$store.actions.fetchBeacons()
  },
  computed: {
    beacons: {
      get() {
        return this.$store.state.freeBeacons()
      },
      set(value) {
        if (value.length > 0) {
          console.log(value[0])

          const newBeacon = Object.assign({}, value[0])
          newBeacon.display_id = null

          this.$store.actions.editBeacon(newBeacon)
        }
      }
    }
  }
}
</script>
<style>
</style>
