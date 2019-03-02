<template>
  <q-page padding>
    <!-- content -->
    <div class="q-mb-lg">
      <q-input v-model="text" float-label="Title" />
      <!-- Multiple Line Input -->
      <q-input
        v-model="area"
        type="textarea"
        float-label="Input task"
        :max-height="100"
        rows="7"
      /><br/>
      <!-- max-height refers to pixels -->
      <q-btn icon="create" color="primary" label="Create" />
    </div>
  </q-page>
</template>
<script>
export default {
  // name: 'PageName',
  // data () {
  //   return {
  //     loading: false
  //   }
  // },
  // methods: {
  //   handler () {
  //     this.loading = true
  //     // we simulate a delay here:
  //     setTimeout(() => {
  //       this.loading = false
  //     }, 3000)
  //   }
  // }
}
</script>

<style>
</style>
