<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <h2>Task manager</h2>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        color="primary"
        icon="create"
      >Create a task</q-fab>
    </q-page-sticky>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
