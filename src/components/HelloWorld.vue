<template>
  <div class="container">
    <div class="row">
      Count: {{ $store.state.count }}, is {{ evenOrOdd }}.
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">Increment If Odd</button>
      <button @click="incrementAsync" :disabled="btnDisabled">Increment Async</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: mapGetters([
    'evenOrOdd',
    'btnDisabled'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
