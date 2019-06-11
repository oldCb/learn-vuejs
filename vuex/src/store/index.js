import Vue from 'vue'
import Vuex from 'vuex'
import compteur from './modules/compteur'
import toDoList from './modules/toDoList'
import kanye from './modules/kanye'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    compteur,
    toDoList,
    kanye
  }
})
