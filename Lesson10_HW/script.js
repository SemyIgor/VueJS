Vue.component('product-details', {
	props: [''],
	data() {
		return {
			product: {
				name: 'Boots',
				price: 8200,
				numberProduct: 0,
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
	template: `
   <div>
      <h1>Название продукта: {{product.name}}</h1>
      <h1>Цена продукта: <span :style="{color: textColor}">{{formattedPrice}}</span></h1>
      <h1 v-if = "available" class="green">Продукт доступен</h1>
      <h1 v-else class="red">Продукта нет на складе</h1>
   </div>
      `,
});

const hw10 = new Vue({
	el: '#app',
	data: {
		products: [
			{ name: 'Boots', price: 8200, numberProduct: 3 },
			{ name: 'Cap', price: 1600, numberProduct: 34 },
			{ name: 'T-shirt', price: 2300, numberProduct: 23 },
			{ name: 'Short', price: 4700, numberProduct: 12 },
			{ name: 'Trousers', price: 5200, numberProduct: 7 },
		],
	},
	computed: {},
	methods: {},
});
