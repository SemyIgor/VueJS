<template>
   <div>
      <input type="text" v-model="operand1">
      <input type="text" v-model="operand2">
      <div>
         {{ result }}
      </div>
      <div>
         <button @click="calcAllOps(operation)" v-for="operation in operations" :key="operation.id">
            {{ operation }}
         </button>
         <div v-show="error">
            {{ error }}
         </div>
         <div>
            <template v-if="result < 0">Получилось отрицательное число</template>
            <template v-if="result >= 0 && result <= 100">Получилось нормальное число</template>
            <template v-if="result > 100">Получилось большое число</template>
         </div>
         <div>
            <div>
               Число Фибоначчи от первого поля ввода {{ fib1 }} <br>
               Число Фибоначчи от второго поля ввода {{ fib2 }} <br>
            </div>
            <h3>История операций <span>{{ logsLength }} записей</span></h3>
            <div v-for="log in logs" :key="log.id">{{ log }}</div>
         </div>
      </div>
   </div>
</template>

<script>
import Vue from "vue";
export default {
   name: 'CalcFunc',
   data() {
      return {
         operand1: null,
         operand2: null,
         result: 0,
         operations: ['+', '-', '*', '/'],
         error: '',
         logs: {},
         logsLength: 0
      };
   },
   computed: {
      fib1() {
         return this.fib(this.operand1);
      },
      fib2() {
         return this.fib(this.operand2);
      }
   },
   methods: {
      add() {
         this.result = Number(this.operand1) + Number(this.operand2);
      },
      sub() {
         this.result = Number(this.operand1) - Number(this.operand2);
      },
      mul() {
         this.result = Number(this.operand1) * Number(this.operand2);
      },
      div() {
         const { operand1, operand2 } = this;
         if (operand2 == 0) {
            this.error = 'Ошибка! На ноль делить нельзя!';
            this.result = Infinity;
         } else {
            this.result = operand1 / operand2;
         }
         // this.result = Number(this.operand1) / Number(this.operand2);
      },
      fib(n) {
         return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
      },

      calcAllOps(operation = '+') {
         this.error = '';
         switch (operation) {
            case '+':
               this.add();
               break;
            case '-':
               this.sub();
               break;
            case '*':
               this.mul();
               break;
            case '/':
               this.div();
               break;

            default:
               break;
         }

         // Создаём реактивность объекта logs с использованием Vue.set
         // (для этого импортируем объект Vue: import Vue from "vue"; в начале скрипта):
         const key = Date.now()
         const value = `${this.operand1}${operation}${this.operand2}=${this.result}`
         // this.logs[Date.now()] = `${this.operand1}${operation}${this.operand2}=${this.result}`;
         Vue.set(this.logs, key, value);

         this.logsLength = Object.keys(this.logs).length;
      }
   }
}
</script>

<style lang="scss" scoped></style>