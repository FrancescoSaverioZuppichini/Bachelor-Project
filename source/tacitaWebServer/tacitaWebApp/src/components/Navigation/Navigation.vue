<template>
<div class='uk-card my-navigation__container uk-flex-center  uk-flex flex--center'>
    <div>
      <v-btn icon class="grey--text text--darken-2" @click.native="$router.push({name:'Home'})">
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn icon class="grey--text text--darken-2">
        <v-icon>settings</v-icon>
      </v-btn>
      <!-- <i class="material-icons uk-margin-right">home</i>
      <i class="material-icons">settings</i> -->
    </div>
</div>
</template>
<script>
export default {
  name: "Navigation",
  data: function data() {
    return {

    }
  }
}
</script>
<style>
.my-navigation__container {
  padding: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  z-index: 1;
  background-color: white;
}

.flex--center{
  align-items: center;
    justify-content: center;
}
</style>
