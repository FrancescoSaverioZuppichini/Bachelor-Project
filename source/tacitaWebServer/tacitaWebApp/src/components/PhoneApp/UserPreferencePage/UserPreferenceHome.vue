<template>
<div class='uk-flex-column uk-flex' uk-grid>
  <div>
    <preference-dummy></preference-dummy>
    <div class='uk-card uk-card-default uk-card-body my-card__body'>
      <div>
        <h4 class='uk-margin-remove'>Your color</h4>
        <div class='user-color uk-width-1-3' :style="{ 'background-color': $store.state.user.color }" v-if="$store.state.user.color" @click="$router.push({name:'Color'})">
        </div>
        <div v-else>
          <h5 class='uk-text-muted uk-margin-remove'>You have no color !</h5>
          <v-btn primary light @click.native="$router.push({name:'Color'})">Select one</v-btn>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import PreferenceDummy from './PreferenceDummy.vue'
export default {
  name: "",
  components: {
    PreferenceDummy
  },
  data: function data() {
    return {

    }
  }
}
</script>
<style scoped>
.user-color {
  border-radius: 2rem;
  height: 24px;
}
</style>
