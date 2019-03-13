<template>
  <q-page padding>
    <div class="row q-mb-lg">
        <q-input v-model="newTask" float-label="Add new task" class="col" @keyup.enter="addTask"/>
        <!-- max-height refers to pixels -->
        <q-btn icon="create" color="primary" label="Create"
        @click.native="addTask"/>
    </div>
    <div class="row q-mb-lg">
      <q-list highlight class="col">
        <q-list-header> Created tasks</q-list-header>
        <q-item v-for="(task, index) in tasks">
          <q-item-main :label="task" />
          <q-item-side color="primary" right icon="check"
                       @click.native="moveToDone(index)"/>
        </q-item>
        <q-item-separator />
      </q-list>
    </div>
    <div class="row q-mb-lg">
      <q-list highlight class="col">
        <q-list-header> Done tasks</q-list-header>
        <q-item v-for="(task, index) in done">
          <q-item-main :label="task" />
          <q-item-side color="red" right icon="close"
                       @click.native="deleteTask(index)"/>
        </q-item>
        <q-item-separator />
      </q-list>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex' ,
  data() {
    return {
      tasks: [],
      done: [],
      newTask: ''
    }
  },
  methods: {
    addTask(){
      this.tasks.push(this.newTask)
      this.newTask = ''
    },
    moveToDone(index) {
      this.done.push(this.tasks[index])
      this.tasks.splice(index, 1)
    },
    deleteTask(index){
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete',
        ok: 'Yes',
        cancel: 'No'
      }).then(() => {
        this.done.splice(index, 1)
        this.$q.notify('Deleted!')
      }).catch(() => {
      })
    }
  }

}
</script>
