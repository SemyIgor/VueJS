<template>
   <div>
      <div v-for="item in items" :key="item.id">{{ item.date }} {{ item.category }} = {{ item.value }} </div>
   </div>
</template>

<script>
export default {
   name: 'PaymentsDisplay',
   props: {
      items: {
         type: Array,
         default() {
            return [];
         }
      }
   },

   data() {
      return {

      }
   },

   methods: {

   }
}
</script>

<style lang="scss" scoped></style>