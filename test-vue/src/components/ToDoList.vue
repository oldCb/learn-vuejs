<template>
  <div class="to-do-list">
    <h4>Exercice 2 - Création d'une liste de tâches</h4>
    <div>
      <input type="text" placeholder="Ajouter une tâche" v-model="newTask"/>
      <button @click="add">Ajouter</button>
    </div>
    <div>
      <p>Liste des tâches</p>
      <div class="to-do-list_check" v-for="task in list" :key="task.id">
        <p class="barré">{{ task }}</p>
        <input type="checkbox" name="check" v-model="isCheck">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoList",

  props: {

  },

  data () {
    return {
      list: [],
      newTask: "",
      isCheck: false
    }
  },

  methods: {
    add() {
      if(this.newTask){
        this.list.push(this.newTask)
        this.newTask = ""
      }
    },
    isCheck(e) {
      if(isCheck) {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .to-do-list {
    background-color: $light-grey;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 20px;

    &_check {
      border-bottom: 1px solid;
      width: 50%;
      margin: 0 auto;


      & p {
        display: inline-block;
        width: 30%;
      }
      & .barré {
        text-decoration: line-through;
      }
    }
  }
</style>
