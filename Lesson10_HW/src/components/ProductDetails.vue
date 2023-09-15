<template>
   <div>
      <h1>Название продукта: {{ product.name }}</h1>
      <h1>Цена продукта: <span :style="{ color: textColor }">{{ formattedPrice }}</span></h1>
      <h1 v-if="available" class="green">Продукт доступен</h1>
      <h1 v-else class="red">Продукта нет на складе</h1>
   </div>
</template>

<script>
export default {
   props: [''],
   data() {
      return {
         product: {
            name: 'Boots',
            price: 8200,
            numberProduct: 3,
         },
      };
   },
   computed: {
      formattedPrice() {
         return '$' + this.product.price;
      },
      available() {
         if (this.product.numberProduct > 0) {
            return true;
         } else {
            return false;
         }
      },
      textColor() {
         if (this.product.numberProduct > 0) {
            return 'green';
         } else {
            return 'red';
         }
      },
   },

}
</script>

<style lang="scss" scoped>
.red {
   color: red;
}

.green {
   color: green;
}
</style>