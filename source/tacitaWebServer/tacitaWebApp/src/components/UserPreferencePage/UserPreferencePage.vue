<template>
<page>
  <div class='f-h uk-width-1-1 uk-container uk-background-muted uk-section-xsmall'>
    <div class='uk-flex-column uk-flex' uk-grid>
      <!-- <h4 class='' v-if='$store.state.user.email'>{{$store.state.user.email.split('@')[0]}}</h4> -->
      <!-- <div>
        <h5 class=''>How it's gonna look like on the display</h5>
        <preference-dummy></preference-dummy>
      </div> -->
      <div>
        <div class='uk-card uk-card-default uk-card-body my-card__body'>
          <div>
            <h4 class='uk-margin-remove'>Your color</h4>
            <div v-if="$store.state.user.color">
              <h5 class='uk-text-muted uk-margin-remove'>Click to modify</h5>
              <div class='user-color uk-width-1-3' :style="{ 'background-color': $store.state.user.color }" @click="$router.push({name:'Color'})">
              </div>
            </div>
            <div v-else>
              <h5 class='uk-text-muted uk-margin-remove'>You have no color !</h5>
              <v-btn primary light @click.native="$router.push({name:'Color'})">Select one</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</page>
</template>
<script>
import Vue from 'vue'
import Page from '../Page.vue'
import PreferenceDummy from './PreferenceDummy.vue'


export default {
  name: "",
  components: {
    PreferenceDummy,
    Page
  }
}
</script>
<style>
.user-color {
  border-radius: 2rem;
  min-height: 24px;
  min-width: 16px;
}
</style>
