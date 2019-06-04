<template>
  <div class="guessNumber">
    <h4>Exercice 1 - Devine le nombre</h4>
    <p>Ecrivez un chiffre entre 0 et 10</p>
    <div>
      <input type="text" v-model="numPlayer">
      <button @click="play">Jouer</button>
      <button @click="reset">Reset</button>
    </div>
    <div>
      <p>Le gagnant est {{ winner }}</p>
      <p>Nombre d'essai = {{ nbEssai }}</p>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuessNumber',

  data () {
    let numOrdi = Math.random()*10
    return {
      numPlayer: "",
      nbOrdi: Math.round(numOrdi),
      winner: "",
      nbEssai: 0,
      msg: ""
    }
  },

  methods: {
    play() {

      this.nbEssai++

      if(this.numPlayer < this.nbOrdi){
        this.winner = 'ordi'
        this.msg = 'Le nombre saisie est plus petit'
      }
      else if(this.numPlayer > this.nbOrdi){
        this.winner = 'ordi'
        this.msg = 'le nombre saisie est plus grand'
      }
      else if(this.numPlayer == this.nbOrdi){
          this.winner = 'player'
          this.msg = 'Vous avez gagné !'
      }
    },

    reset() {
      this.nbEssai = 0
      this.numPlayer = ""
      let numOrdi = Math.random()*10
      this.nbOrdi = Math.round(numOrdi)
      this.winner = ""
      this.msg = ""
    }
  }

}
</script>

<style lang="scss" scoped>
  .guessNumber {
    background-color: $light-grey;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
</style>

