<template>
<transition name="fade">
  <div class='uk-card uk-card-body'>
    <div class="uk-flex uk-flex-middle">
      <!-- <span class="" uk-icon="icon: location;ratio: 1.3"></span> -->
      <div class="dummy-preference__text dummy-preference--background-color" :style="{'width':'50%'}">
      </div>
    </div>
    <div>
      <div class='uk-flex uk-flex-column uk-flex-middle uk-margin-small-top'>
        <div class="uk-margin-small-bottom uk-flex uk-flex-middle" v-for="index in [1,2]" :style="{'width':'100%'}">
          <div class="dummy-preference__bus dummy-preference--background-color uk-margin-small-right"></div>
          <div class="dummy-preference__text--small dummy-preference--background-color" :style="{'width':'70%'}"></div>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: "UserPreferenceDummy"
}
</script>
<style scoped>
.dummy-preference__text {
  height: 16px;
  width: 100%;
}

.dummy-preference__text--small {
  height: 14px;
  width: 100%;
}

.dummy-preference__bus {
  width: 24px;
  height: 24px;
}

.dummy-preference--background-color {
  background-color: rgb(246, 246, 246) !important;
}
</style>
