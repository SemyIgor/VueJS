<template>
   <div>
      Крутой счётчик
      <button @click="upCounter">Значение счётчика равно {{ counter }}</button>
   </div>
</template>

<script>
export default {
   name: 'AddCount',

   data() {
      return {
         counter: 0,
      };
   },
   methods: {
      upCounter() {
         this.counter++;
      },
   },
   beforeCreate() {
      this.counter = 1;
   },
   created() {
      this.counter = 2;
   },
   beforeMount() {
      console.log('Before Mount');
   },
   mounted() {
      console.log('Mounted');
   },
   updated() {
      console.log('Updated');
   }
}
</script>

<style lang="scss" scoped></style>