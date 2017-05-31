<template >
<nav class="uk-navbar-container my-nav-bar uk-box-shadow" uk-navbar>
  <div class="uk-navbar-left">
    <ul class="uk-navbar-nav">
      <a class="uk-navbar-item uk-logo" @click="$router.push({name:'DashBoard'})">Tacita</a>
    </ul>
  </div>
  <div class="uk-navbar-right">
    <ul class="uk-navbar-nav">
      <a class="uk-navbar-toggle">
        <v-btn icon large class="uk-hidden@s uk-navbar-toggle-icon uk-icon white--text" uk-toggle="target: #my-sidenav">
          <v-icon>menu</v-icon>
        </v-btn>
      </a>
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
  /*position: absolute;*/
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
