/* // Задача 1
Создание простого счетчика: 
Создайте компонент счетчика, который имеет кнопку "+" и кнопку "-", 
и отображает текущее значение счетчика. 
При нажатии на кнопки счетчик должен увеличиваться или уменьшаться соответственно. 
*/
/* // Решение Задачи 1
Vue.component('counter-component', {
	data() {
		return {
			counter: 0,
		};
	},
	template: `
      <div>
         <h2>{{counter}}</h2>
         <button @click="counter++">+</button>
         <button @click="counter--">-</button>
      </div>
   `,
});

new Vue({
	el: '#app',
	data: {},
}); */

/* // Задача 2
Создайте компонент списка дел, в котором можно добавлять и удалять элементы. 
Каждый элемент списка должен иметь кнопку удаления, при нажатии на которую элемент списка будет удаляться.  
*/
/* // Решение Задачи 2 Вариант 1
Vue.component('todo-list', {
	data() {
		return {
			elements: [],
			newElement: '',
		};
	},
	methods: {
		addElement() {
			const newElemObj = {
				id: Date.now() % 10000, // Урезаем id до четырёх знаков (чисто для эстетики)
				title: this.newElement,
			};
			this.elements.push(newElemObj);
			this.newElement = ''; // Очищаем поле ввода input
		},
		removeElement(id) {
			this.elements = this.elements.filter((elem) => elem.id !== id);
		},
	},
	template: `
	<div>
	      <input  @keyup.enter="addElement" type="text" placeholder="Добавить элемент" v-model="newElement">
      	<button @click="addElement">Добавить</button>
	      <ul>
         	<li v-for="{id, title} in elements">{{id}}: {{title}}<button @click="removeElement(id)">X</button></li>
      	</ul>
	</div>			
	`,
});

new Vue({
	el: '#todo-list',
	data: {},
	methods: {},
}); */

/* // Решение Задачи 2 Вариант 2 (с двумя компонентами)
Vue.component('list-item', {
	props: ['itemData'],
	template: `
		<div>
	      <ul>
         	<li v-for="{id, title} in elements">{{id}}: {{title}}<button @click="removeElement(id)">X</button></li>
      	</ul>
	</div>
	`,
});
Vue.component('todo-list', {
	data() {
		return {
			elements: [],
			newElement: '',
		};
	},
	methods: {
		addElement() {
			const newElemObj = {
				id: Date.now() % 10000, // Урезаем id до четырёх знаков (чисто для эстетики)
				title: this.newElement,
			};
			this.elements.push(newElemObj);
			this.newElement = ''; // Очищаем поле ввода input
		},
		removeElement(id) {
			this.elements = this.elements.filter((elem) => elem.id !== id);
		},
	},
	template: `
	<div>
	      <input  @keyup.enter="addElement" type="text" placeholder="Добавить элемент" v-model="newElement">
      	<button @click="addElement">Добавить</button>
	      <ul>
         	<li v-for="{id, title} in elements">{{id}}: {{title}}<button @click="removeElement(id)">X</button></li>
      	</ul>
	</div>			
	`,
});

new Vue({
	el: '#todo-list',
	data: {},
	methods: {},
}); */

/* // Решение Задачи 2 Семинар Вариант 1
Vue.component('todo-list', {
	props: {},
	data() {
		return {
			items: [],
			newItem: '',
		};
	},
	methods: {
		add() {
			const newItem = {
				id: Date.now(),
				title: this.newItem,
			};
			this.items.push(newItem);
			console.log('this.items: ', this.items);
			this.newItem = '';
		},
		removeItem(id) {
			this.items = this.items.filter((item) => item.id !== id);
		},
	},

	template: `
	<div>
		<h2>ToDo List</h2>
		<input @keyup.enter="add" type="text" v-model="newItem">
		<button @click="add">Add</button>
		<p></p>
		<li v-for="{id, title} in items">{{id}} {{title}} <button @click="removeItem(id)">X</button></li>
	</div>
		`,
});

new Vue({
	el: '#app1',
	data: {},
}); */

/* // Решение Задачи 2 Семинар Вариант 2 (2 компонента и кастомное событие)
// 1. Переменная для связи с родительским компонентом todo-list (props)
Vue.component('list-item', {
	props: ['itemData'],
	methods: {
		// 3. Вызывая этот метод, мы эмиттируем его под именем removeIt и контекстом id, равным itemData.id
		removeItem(id) {
			// Генерирование кастомных событий
			// Здесь removeItem - название передаваемого события, id - его контекст
			this.$emit('removeIt', id);
		},
	},
	// 2. Клик на кнопку удаления [X] вызывает метод removeItem(id), где id = itemData.id
	template: `
			<li>{{itemData.title}} 
				<button @click="removeItem(itemData.id)">X</button>
			</li>
	`,
});
Vue.component('todo-list', {
	props: {},
	data() {
		return {
			items: [],
			newItem: '',
		};
	},
	methods: {
		add() {
			const newItem = {
				id: Date.now(),
				title: this.newItem,
			};
			this.items.push(newItem);
			this.newItem = '';
		},
		removeItem(id) {
			this.items = this.items.filter((item) => item.id !== id);
		},
	},

	// 4. @removeIt="removeItem" "подхватывает" брошенное в п.3 кастомное событие
	// 5. и выполняет свой метод removeItem с переданным окружением (id), который и удаляет элемент
	template: `
	<div>
		<h2>ToDo List</h2>
		<input @keyup.enter="add" type="text" v-model="newItem">
		<button @click="add">Add</button>
		<p></p>
		<list-item v-for="item in items" :item-data="item" @removeIt="removeItem" :key="item.id"></list-item>
	</div>
		`,
});

// Объекты Vue, общие для разных вариантов
new Vue({
	el: '#app1',
	data: {},
});

new Vue({
	el: '#app2',
	data: {},
}); */

/* // Задача 3 Моё решение
Vue.component('filtered-list', {
	data() {
		return {
			filterLine: '',
			listItems: ['list 1', 'list 2', 'list 3'],
			filteredList: [],
		};
	},
	computed: {
		filterList() {
			// Так короче
			return this.listItems.filter((item) => item.includes(this.filterLine));

			// А так наглядней
			// this.filteredList = this.listItems.filter((item) =>
			// 	item.includes(this.filterLine)
			// );
			// return this.filteredList;
		},
	},
	template: `
	<div>
		<input type="text" placeholder="Фильтр" v-model="filterLine">
		<ul>
			<li v-for="listItem in filterList" :key="listItem.id">{{listItem}}</li>
		</ul>
	</div>
	`,
});

new Vue({
	el: '#filteredlist',
	data: {},
}); */

/* // Задача 4
Вам необходимо создать компонент "Товар", который будет отображать 
информацию о товаре, включая название, описание и цену. 
Кроме того, вы должны реализовать фильтрацию товаров по цене (по возрастанию и убыванию)
1. Создайте компонент "Товар", который вы создавали в интернет-магазине BRAND
2. Создайте список товаров, используя компонент "Товар". Данные о товарах могут быть представлены в виде массива объектов.
3. Добавьте две кнопки сортировки (по убыванию, по возрастанию)
4. При нажатии на кнопки, обновите список отображаемых товаров, отфильтрованных по цене. 
*/
/* // Моё решение (2 компонента, требуется доработать)
Vue.component('goods-item', {
	props: [],
	data() {
		return {
			goodsItem: {
				id: 1,
				name: 'camera',
				description: 'Very Good camera Nicon',
				price: 12400,
			},
		};
	},
	template: `
	<div>
		<li v-for="item in items"></li>
	</div>
	`,
});

Vue.component('goods-list', {
	props: [],
	data() {
		return {
			items: [],
		};
	},
	template: `
	<div>
		<button>Ascending</button>
		<button>Descending</button>
		<li v-for="item in items"></li>
	</div>
	`,
});

new Vue({
	el: '#goodslist',
	data: {},
}); */

/* // Решение на семинаре (Наталья)
Vue.component('task-4', {
	data() {
		return {
			search: '',
			products: [
				{ name: 'Товар 1', price: 15 },
				{ name: 'Товар 2', price: 250 },
				{ name: 'Товар 3', price: 133 },
				{ name: 'Товар 4', price: 632 },
				{ name: 'Товар 5', price: 12 },
			],
		};
	},

	methods: {
		sortUp() {
			return this.products.sort((a, b) => a.price - b.price);
		},
		sortDown() {
			return this.products.sort((a, b) => b.price - a.price);
		},
	},

	template: `
		<div>
			<span>Сортировать по </span>
			<button @click="sortUp">Возрастанию</button>
			<button @click="sortDown">Убыванию</button>
			<ul>
				<li v-for="product in products" :key="product.id">{{product.name}} - {{product.price}}</li>
			</ul>
		</div>
	`,
});

new Vue({
	el: '#goodslist',
	data: {},
}); */

/* // Решение в методичке (Артём)
// {
// 	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
// }

Vue.component('product', {
	props: ['product'],
	template: `
        <div>
          <img :src="product.image" :alt="product.name" width="100">
          <h3>{{ product.name }}</h3>
          <p>Цена: {{ product.price }}</p>
        </div>
      `,
});
new Vue({
	el: '#app3',
	data: {
		products: [
			{
				id: 1,
				name: 'Товар 1',
				image: 'product1.jpg',
				price: 100,
			},
			{
				id: 2,
				name: 'Товар 2',
				image: 'product2.jpg',
				price: 50,
			},
			{
				id: 3,
				name: 'Товар 3',
				image: 'product3.jpg',
				price: 200,
			},
		],
	},
	computed: {
		sortedProducts() {
			return this.products.slice().sort((a, b) => a.price + b.price);
		},
	},
	methods: {
		sortByPrice(ascending) {
			if (ascending) {
				this.products.sort((a, b) => a.price - b.price);
			} else {
				this.products.sort((a, b) => b.price - a.price);
			}
		},
	},
}); */

// Определяем новый компонент под именем todo-item
Vue.component('todo-item', {
	props: [todo],
	template: '<li>{{ todo.text }}</li>',
});

const app21 = new Vue({
	el: '#app21',
	data: {},
});
