<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test text="toto" :num="1" />
    <test text="tata" :num="2">
      <test text="titi"/>
      <h2>Hello</h2>
    </test>
    <display-text />
  </div>
</template>

<script>
import Test from '@/components/Test'
import DisplayText from '@/components/DisplayText'
export default {
  name: 'About',

  components: {
    Test,
    DisplayText
  }
}
</script>

