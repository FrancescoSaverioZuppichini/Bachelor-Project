<template>
<page>
  <div class='f-h'>
    <choice-color :colors='colors' radius='10em' @updateColor='updateColor'></choice-color>
  </div>
</page>
</template>
<script>
import Vue from 'vue'
import Page from '../Page.vue'

import {
  choiceColor
} from 'vue-circle-choice'
// import {materialColors} from './colors.js'

const colors = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#FFEB3B',
  '#FF9800',
  '#795548',
  '#607D8B',
];

export default {
  name: "",
  components: {
    choiceColor,
    Page
  },
  data() {
    return {
      colors,
      index: 0,
      color: colors[0],
    }
  },
  methods: {
    updateColor({
      index,
      color
    }) {
      this.index = index;
      this.color = color;
    }
  }
}
</script>
<style>
</style>
