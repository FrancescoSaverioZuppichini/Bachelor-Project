<template>
  <div class='uk-flex'>
    <h5 class='uk-margin-remove' v-if="$store.state.preference.type">{{$store.state.preference.type}}</h5>
    <div class="uk-margin-small-left icon--circle btn--toogle" v-if="$store.state.preference.year">
      {{$store.state.preference.year.yearNumber}}
    </div>
</div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {

    }
  }
}
</script>
<style>
</style>
