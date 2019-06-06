<template>
  <div class="to-do-list">
    <h4>Exercice 3 - TODO LIST AVEC STORE</h4>
    <input type="text" placeholder="Ajouter une tâche" v-model="newTask" @keyup.enter="ajouter(newTask)">
    <button @click="ajouter(newTask)">Ajouter</button>
    <ul>
      <li v-for="(list, index) in list" :key="list.id" :class="{check: list.completed}">
        <div class="tache">
          <input type="checkbox" name="check" v-model="list.completed">
          <label for="check">{{ list.name }}</label>
        </div>
        <button class="supp" @click="supprimer(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ToDoList',
  data () {
    return {
      newTask: ''
    }
  },
  computed: {
    ...mapGetters({
      list: 'toDoList/list'
    })
  },
  methods: {
    ...mapActions({
      ajouterT: 'toDoList/ajouter',
      supprimer: 'toDoList/supprimer'
    }),
    ajouter(task){
      this.newTask = ''
      this.ajouterT(task)
    }
  }
}
</script>

<style lang="scss" scoped>
  .to-do-list {
    background-color: #e9e9e9;
    padding: 30px 0 45px;
    margin-bottom: 30px;

    & ul {
      list-style: none;
      padding-left: 0;
    }

    & li {
      border-bottom: 1px solid;
      width: 45%;
      margin: 0 auto;
      padding: 15px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & label {
        margin-left: 10px;
      }
    }

    & li:last-child {
      border-bottom: none;
    }

  }
  .check {
    text-decoration: line-through;
  }
  .supp {
    background-color: transparent;
    border: none;
  }
</style>


