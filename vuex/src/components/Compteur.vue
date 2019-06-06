<template>
  <div class="compteur">
    <h3>Exercice 1 - COMPTEUR</h3>
    <p>{{ valeur }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Compteur',
  computed: {
    ...mapGetters({
      valeur: 'compteur/valeur'
    })
  },
  methods: {
    ...mapActions({
      increment: 'compteur/incrementValeur',
      decrement: 'compteur/decrementValeur',
      reset: 'compteur/resetValeur'
    })
  }
}
</script>

<style lang="scss" scoped>
  .compteur {
    background-color: #e9e9e9;
    padding: 30px 0 45px;
    margin-bottom: 30px;
  }
</style>
