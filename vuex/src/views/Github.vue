<template>
  <div class="github">
    <h3>Exercice API</h3>
    <div v-for="elem in tabResult" :key="elem.id" class="elem">
      <p>Langage : {{ elem.language }}</p>
      <p>Stars : {{ elem.stars }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Github',
  data () {
    return {
      tabResult: []
    }
  },
  created () {
    fetch('https://github-trending-api.now.sh/repositories?language=javascript&since=weekly')
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        console.log(myJson)
        this.tabResult = myJson
      })
  }
}
</script>

<style lang="scss" scoped>
  .elem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    margin: 0 auto;
    padding: 0 10px;
  }
  .elem:nth-child(2n+1){
    background-color:#efeded;
  }
</style>


