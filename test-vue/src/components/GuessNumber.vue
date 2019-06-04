<template>
  <div class="guessNumber">
    <h4>Exercice 1 - Devine le nombre</h4>
    <p>Ecrivez un chiffre entre 0 et 5</p>
    <div>
      <input type="text" v-model="numPlayer">
      <button @click="play">Jouer</button>
      <button @click="reset">Reset</button>
    </div>
    <div>
      <p>Le gagnant est {{ winner }}</p>
      <p>Nombre d'essai = {{ nbEssai }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuessNumber',

  data () {
    let numOrdi = Math.random()*5
    return {
      numPlayer: "",
      nbOrdi: Math.round(numOrdi),
      winner: "",
      nbEssai: 0
    }
  },

  methods: {
    play() {

      this.nbEssai++

      if(this.numPlayer < this.nbOrdi){
        this.winner = 'ordi'
        console.log("perdu")
      }
      else if(this.numPlayer > this.nbOrdi){
        this.winner = 'ordi'
          console.log("perdu")
      }
      else if(this.numPlayer == this.nbOrdi){
          this.winner = 'player'
          console.log("gagné");
      }
    },

    reset() {
      this.nbEssai = 0
      this.numPlayer = ""
      let numOrdi = Math.random()*5
      this.nbOrdi = Math.round(numOrdi)
      this.winner = ""
    }
  }

}
</script>

<style lang="scss" scoped>

</style>

