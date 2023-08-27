/* const app = new Vue({
	el: '#app',
	data: {
		message: 'Привет, Vue!',
	},
	methods: {
		sayHello() {
			this.message = 'Это первый заголовок';
			return 'Это второй заголовок';
		},
	},
}); */

const app = new Vue({
	el: '#app',
	data: {
		message: 'Привет, Vue!',
		counter: 0,
		x: 0,
		y: 0,
		bigText: `<span>New text <a href="#">info</a></span>`,
		addProductToCart: true,
		rotatedText: false,
		rotateStyle: ``,
	},
	methods: {
		mouseMove(event) {
			// console.log('event: ', event);
			this.x = event.clientX;
			this.y = event.clientY;
		},
		changeText() {
			this.message = 'Text clicked';
		},
		increase(step, event) {
			this.counter += step;
			console.log(event);
		},
		showAddProductToCart() {
			console.log(this.addProductToCart);
		},
		rotateText() {
			this.rotatedText = !this.rotatedText;
			this.rotateStyle = this.rotatedText
				? `transform: rotate(180deg);`
				: `transform: rotate(0deg);`;
		},
	},
});

// Моя попытка (не завершено)
const app1 = new Vue({
	el: '#app1',
	data: {
		goodsNumber: 0,
		goodInCart1: false,
		goodInCart2: false,
		goodInCart3: false,
		goodInCart4: false,
		goodAddToCart: 'Добавить',
		goodInCartText: 'Товар в корзине',
	},
	methods: {
		addGoodToCart(goodInCart) {
			this.goodsNumber = goodInCart ? this.goodsNumber-- : this.goodsNumber++;
			console.log('this.goodsNumber: ', this.goodsNumber);
		},
	},
});

// Отрисуем массив в список
const arrToList = new Vue({
	el: '#arrToList',
	data: {
		diversKit: [
			{ kit: 'Маска дайвера' },
			{ kit: 'Дыхательная трубка' },
			{ kit: 'Ласты' },
			{ kit: 'Гидрокостюм' },
		],
	},
	methods: {},
});

// Задача 2. Добавить товар в корзину
/*
1. Создать параграф, внутри которого будет отображаться текст “Товаров в корзине 0”
2. Создать кнопку “Купить”, при клике на которую, значение внутри параграфа будет увеличиваться на 1, 
	при повторном нажатии на эту кнопку, счетчик не становится больше, д
	обавить 4 таких кнопки
3. При нажатии на кнопку купить, необходимо чтобы текст внутри кнопки поменялся на “Товар в Корзине” 
*/
/* new Vue({
	el: '#task02',
	data: {
		counter: 0,
		buttons: [
			{ id: 1, text: 'Купить', inCart: false },
			{ id: 2, text: 'Купить', inCart: false },
			{ id: 3, text: 'Купить', inCart: false },
			{ id: 4, text: 'Купить', inCart: false },
		],
	},
	methods: {
		onClick(button) {
			if (!button.inCart) {
				button.inCart = true;
				this.counter++;
				button.text = 'Товар в корзине';
			}
		},
	},
}); */

new Vue({
	el: '#task021',
	data: {
		counter: 0,
		buttons: [
			{ id: 1, text: 'Купить', inCart: false },
			{ id: 2, text: 'Купить', inCart: false },
			{ id: 3, text: 'Купить', inCart: false },
			{ id: 4, text: 'Купить', inCart: false },
		],
	},
	methods: {
		onClick(button) {
			if (!button.inCart) {
				button.inCart = true;
				this.counter++;
				// console.log(button.text);
				// console.log(this.buttons);
			}
		},
	},
});

// Задача 03. Мне исполнилось 14 лет
/*
1. Создать две кнопки “Мне исполнилось 14 лет” и “Мне еще нет 14 лет”
2. Если пользователь нажимает на первую кнопку, то должен отобразиться текст. “Можете заказать товар”
3. Если пользователь нажимает на вторую кнопку, отображается текст “Доступ закрыт” 
*/

// Первый вариант
/* new Vue({
	el: '#task03',
	data: {
		closed: 'none',
	},
	methods: {
		haveYou14() {},
	},
}); */

// Второй и третий вариант
/* new Vue({
	el: '#task03',
	data: {
		closed: null,
	},
	methods: {
		haveYou14() {
			this.closed = true;
		},
		haveNotYou14() {
			this.closed = false;
		},
	},
}); */

// Четвёртый вариант (семинара)
new Vue({
	el: '#task03',
	data: {
		isAllowed: false,
	},
	methods: {
		chequeAge(answer) {
			this.isAllowed = answer;
		},
	},
});

// Задача 04. Показать ещё (с анимацией)
/* 
Создать кнопку “Показать еще” при клике на которую появляется контент под кнопкой, 
при повторном клике, контент необходимо скрыть
Добавить анимацию появления текстового блока (без анимации)
*/
new Vue({
	el: '#task04',
	data: {
		showMe: false,
	},
	methods: {
		toShow() {
			this.showMe = !this.showMe;
		},
	},
});

// Задача 05. Генерируем случайное число и определяем его диапазон
/* 
1. Создайте кнопку "Генерировать случайное число". 
	При клике на кнопку должно отображаться случайное число в заданном диапазоне (например, от 1 до 10).
2. При клике на кнопку, если полученное значение меньше 5, необходимо вывести на страницу, “Число меньше 5”
3. Если число от 5 до 9, необходимо вывести “Число от 5 до 9”
4. Если число равно 10, необходимо вывести “Число равно 10” 
*/
// Вариант 1
new Vue({
	el: '#task05',
	data: {
		randomNumber: -1,
	},
	methods: {
		generateRandom() {
			this.randomNumber = Math.floor(Math.random() * 11);
		},
	},
});

// Вариант 2
new Vue({
	el: '#task051',
	date: {},
	methods: {},
});
