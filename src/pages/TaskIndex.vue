<template>
  <q-page padding>
    <!-- content -->
    <q-list highlight>
      <h3 align="center">Task List</h3>
    </q-list>
    <div class="q-mb-lg">
      <q-list highlight>
        <q-list-header>Tasks</q-list-header>
        <q-item>
          <q-item-main label="example task to do list" />
          <q-item-side color="primary" right icon="check" />
        </q-item>
        <q-item-separator />
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
</style>
