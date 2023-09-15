<template>
  <div id="app">
    <ProductDetails />
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue'

export default {
  name: 'App',
  components: {
    ProductDetails
  },
  data() {
    return {
      products: [
        { name: 'Boots', price: 8200, numberProduct: 3 },
        { name: 'Cap', price: 1600, numberProduct: 34 },
        { name: 'T-shirt', price: 2300, numberProduct: 23 },
        { name: 'Short', price: 4700, numberProduct: 12 },
        { name: 'Trousers', price: 5200, numberProduct: 7 },
      ],
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
