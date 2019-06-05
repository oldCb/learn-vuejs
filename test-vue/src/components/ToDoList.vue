<template>
  <div class="to-do-list">
    <h4>Exercice 2 - Création d'une liste de tâches</h4>
    <div>
      <input type="text" placeholder="Ajouter une tâche" v-model="newTask"/>
      <button @click="add">Ajouter</button>
    </div>
    <div>
      <p>Liste des tâches</p>
      <ul>
        <li v-for="task in list" :key="task.id" :class="{faite: task.completed}">
          <div class="to-do-list_check" > 
            <label class="to-do-list_style">{{ task.name }}</label>
            <input type="checkbox" name="check" v-model="task.completed">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoList",

  data () {
    return {
      list: [{
        name: 'tache',
        completed: false
      }],
      newTask: ""
    }
  },

  methods: {
    add() {
      if(this.newTask){
        this.list.push({
          name: this.newTask,
          completed: false
        })
        this.newTask = ""
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

    & ul {
      list-style: none;
      padding-left: 0px;
    }

    & .faite {
      text-decoration: line-through;
    }

    &_style {
      padding-right: 150px;
    }

    &_check {
      border-bottom: 1px solid;
      width: 50%;
      margin: 0 auto;
      padding: 15px 0px 15px 0px;
    }
  }
</style>
