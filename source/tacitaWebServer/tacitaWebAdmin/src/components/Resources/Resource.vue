<template>
<div class='resource uk-width-1-1@s uk-width-1-2@m uk-width-1-3@l uk-width-1-4@xl'>
  <div class='uk-card uk-card-default uk-card-body'>
    <slot>
    </slot>
  </div>
</div>
</template>
<script>
export default {
  name: "Resource",
  data: function data() {
    return {

    }
  }
}
</script>
<style>
.resource {
  min-width: 200px;
}
</style>
