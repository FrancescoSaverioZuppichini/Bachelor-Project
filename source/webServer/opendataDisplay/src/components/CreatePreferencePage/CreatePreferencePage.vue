<template>
<router-view>
</router-view>
</template>
<script>
import ConfirmationModal from './ConfirmationModal/ConfirmationModal.vue'

export default {
  name: "CreatePreferencePage"
}
</script>
<style>
.navigation__actions {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
</style>
