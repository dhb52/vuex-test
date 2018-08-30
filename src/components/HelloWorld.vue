<template>
  <div class="container">
    <div class="row">
      Count: {{ $store.state.count }}, is {{ evenOrOdd }}.
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: mapGetters([
    'evenOrOdd'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
