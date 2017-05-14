<template >
<nav class="uk-navbar-container my-nav-bar uk-box-shadow" uk-navbar>
  <div class="uk-navbar-left">
    <ul class="uk-navbar-nav">
      <a href="#" class="uk-navbar-item uk-logo" v-if="$route.name == 'Home'">Tacita</a>
        <v-btn icon="icon" class="white--text uk-navbar-item" @click.native='$router.go(-1)' v-else>
          <v-icon>arrow_back</v-icon>
        </v-btn>
    </ul>
  </div>
  <div class="uk-navbar-right">
    <ul class="uk-navbar-nav">
      <li class="">
          <v-icon class='white--text uk-navbar-item' @click.native="$router.push({name:'UserPreference'})">settings</v-icon>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
  name: "navbar",
  data: function data() {
    return {

    }
  }
}
</script>
<style scoped>
.my-nav-bar {
  background-color: #1E88E5;
  position: absolute;
  width: 100%;
  z-index: 99;
  height: 60px !important;
  min-height: 60px !important;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.19), 0 1px 1px rgba(0, 0, 0, 0.23);
}

.uk-navbar-nav>a {
  color: white
}
</style>
