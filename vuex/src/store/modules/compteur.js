import {
  COMPTEUR_INCREMENT_VALEUR,
  COMPTEUR_DECREMENT_VALEUR,
  COMPTEUR_RESET_VALEUR
} from '../mutation-types'

const state = {
  valeur: 0
}

function incrementValeur () {
  return { type: COMPTEUR_INCREMENT_VALEUR }
}

function decrementValeur () {
  return { type: COMPTEUR_DECREMENT_VALEUR }
}

function resetValeur () {
  return { type: COMPTEUR_RESET_VALEUR }
}
// methodes de lancement des mutations

const getters = {
  valeur: state => state.valeur
}

const actions = {
  incrementValeur ({ commit }) {
    commit(incrementValeur())
  },
  decrementValeur ({ commit }) {
    commit(decrementValeur())
  },
  resetValeur ({ commit }) {
    commit(resetValeur())
  }
}

const mutations = {
  [COMPTEUR_INCREMENT_VALEUR] (state, payload) {
    state.valeur++
  },
  [COMPTEUR_DECREMENT_VALEUR] (state, payload) {
    if (state.valeur > 0) {
      state.valeur--
    }
  },
  [COMPTEUR_RESET_VALEUR] (state, payload) {
    state.valeur = 0
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
