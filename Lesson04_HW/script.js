/* 
Вы разрабатываете приложение для отображения и сортировки списка товаров. 
У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. 
Вам необходимо отобразить список товаров 
и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию). 
*/

task01();
task02();
function task01() {
	new Vue({
		el: '#app',
		data: {
			products: [
				{ id: 1, name: 'Футболка1', price: 1200 },
				{ id: 2, name: 'Футболка2', price: 800 },
				{ id: 3, name: 'Футболка3', price: 1600 },
				{ id: 4, name: 'Футболка4', price: 2200 },
				{ id: 5, name: 'Футболка5', price: 3400 },
			],
			sortedArray: [],
			baseDisposition: true,
			ascending: true,
		},
		computed: {
			compSortedArray() {
				if (this.baseDisposition) {
					console.log('this.products: ', this.products);
					return this.products.slice();
				} else if (this.ascending) {
					return this.products.slice().sort((a, b) => a.price - b.price);
				} else {
					return this.products.slice().sort((a, b) => b.price - a.price);
				}
			},
		},
		methods: {
			getBaseDisposition() {
				this.baseDisposition = true;
			},
			getAscending() {
				this.ascending = !this.ascending;
				this.baseDisposition = false;
			},
		},
	});
}

function task02() {
	const newArray = [
		{ id: 1, name: 'Футболка1', price: 1200 },
		{ id: 2, name: 'Футболка2', price: 800 },
		{ id: 3, name: 'Футболка3', price: 1600 },
		{ id: 4, name: 'Футболка4', price: 2200 },
		{ id: 5, name: 'Футболка5', price: 3400 },
	];
	const sortByPrice = (a, b) => a.price - b.price;
	// const byPrice = newArray.sort(sortByPrice);
	const byPrice = newArray.sort((a, b) => a.price - b.price);
	console.log('byPrice: ', byPrice);

	// newArray.forEach((element) => {
	// 	console.log(element);
	// });

	// newArray.sort((a, b) => {
	// 	a.price > b.price ? 1 : -1;
	// });

	// console.log('newArray: ', newArray);

	// moreArray.forEach((element) => {
	// 	console.log(element);
	// });
	// console.log('moreArray: ', moreArray);
}
