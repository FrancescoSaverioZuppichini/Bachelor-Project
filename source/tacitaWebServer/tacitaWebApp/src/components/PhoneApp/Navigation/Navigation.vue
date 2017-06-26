<template>
<div class='uk-card my-navigation__container uk-flex-center  uk-flex flex--center'>
    <div>
      <v-btn flat class="grey--text text--darken-2" @click.native="$router.push({name:'Home'})" >
        <v-icon  medium>home</v-icon>
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
  /*padding: 4px;*/
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  z-index: 1;
  background-color: white;
}

.my-navigation__home {
  border-radius: 50%;
  background-color: white;
  font-size: 54px;

}

.circle-icon {
    background: white;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    vertical-align: middle;
    padding: 30px;
}

.flex--center{
  align-items: center;
    justify-content: center;
}
</style>
