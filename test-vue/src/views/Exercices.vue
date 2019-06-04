<template>
  <div>
    <guess-number />
    <to-do-list />
  </div>
</template>

<script>
import GuessNumber from '@/components/GuessNumber'
import ToDoList from '@/components/ToDoList'
export default {
  name: 'Exercices',
  components: {
    GuessNumber,
    ToDoList
  }
}
</script>

