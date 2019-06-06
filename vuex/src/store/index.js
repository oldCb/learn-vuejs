import Vue from 'vue'
import Vuex from 'vuex'
import compteur from './modules/compteur'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    compteur
  }
})
