<template>
  <div id="app">
    <!-- <AddCount /> -->
    <PaymentsDisplay :items="paymentList" />
    <AddList @addNewPay="addNewPay" />
  </div>
</template>

<script>
// import AddCount from './components/AddCount.vue'
import AddList from './components/AddList.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'

export default {
  name: 'App',
  components: {
    // AddCount,
    PaymentsDisplay,
    AddList
  },
  data() {
    return {
      paymentList: [],
    }
  },
  methods: {
    fetchData() {
      return [
        {
          date: '14.09.2023',
          category: 'food',
          value: 145
        },
        {
          date: '24.08.2023',
          category: 'transport',
          value: 98
        },
        {
          date: '24.08.2023',
          category: 'food',
          value: 238
        },
      ]
    },
    addNewPay(data) {
      this.paymentList.push(data);
    }
  },
  created() {
    this.paymentList = this.fetchData();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
