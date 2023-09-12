<template>
   <div>
      <!-- После выполнения п.4 это будет выводиться на страницу -->
      <h2>{{ selfMessage }}</h2>
      <div class="calc-wrapper">
         <div class="calc">
            <input class="calcInput" type="text" v-model="result">
            <button @click="reset" class="reset">C</button>
            <button @click="$event => addButton(num)" v-for="num in  nums " :key="num.id" class="numbers">{{ num
            }}</button>
            <button @click="$event => addButton(tab)" v-for=" tab  in  tabs " :key="tab.id">{{ tab }}</button>
            <button @click="calcResult" class="result">=</button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'CalcComponent',

   data() {
      return {
         selfMessage: 'Это выводится из модуля CalcComponent.vue',
         nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
         tabs: ['+', '-', 'x', '/'],
         result: ''
      };
   },

   mounted() {

   },

   methods: {
      addButton(char) {
         this.result = this.result.toString();
         this.result += char;
      },
      calcResult() {
         this.result = eval(this.result);
      },
      reset() {
         this.result = '';
      }
   },

}
</script>

<style lang="css" scoped>
.calc-wrapper {
   padding-top: 20px;
   padding-bottom: 50px;
}

.calc {
   margin: 0 auto;
   width: fit-content;
   display: grid;
   grid-template-columns: repeat(3, 50px);
   border: 1px solid #000;
}

.calcInput {
   grid-column: span 3;
   text-align: right;
   background-color: green;
   color: #fff;
}

.result {
   grid-column: 2 / -1;
}

.reset {
   grid-column: span 2;

}

/* .numbers:last-child {
   grid-column: span 2;
} */
</style>

