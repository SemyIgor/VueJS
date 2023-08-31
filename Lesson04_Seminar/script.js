/* 
1. Вы разрабатываете страницу для отображения информации о товаре. 
   У вас есть объект product, который содержит информацию о товаре, включая название, цену и URL изображения товара. 
   Вам необходимо отобразить эту информацию на странице с использованием v-bind.
2. Добавьте кнопку, которая будет изменять цену товара. 
   При нажатии на кнопку должна генерироваться скидка на товар от 1 до 20% 
   и обновиться цена товара в соответствии с значением скидки 
*/
new Vue({
	el: '#task01',
	data: {
		mess: 'How do you do!',
		product: {
			name: 'Чемодан',
			price: 2_300, // Разделение на разряды для читаемости кода
			picture:
				'https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232169.jpg?w=740&t=st=1693201718~exp=1693202318~hmac=b0269f7517247021216d91191a4e64f335fe5ba1a9269cb09f21591cc14eaed4',
			discount: 0,
			isDiscount: false,
		},
	},
	methods: {
		activateDiscount() {
			if (!this.product.isDiscount) {
				this.product.discount = Math.round(
					(this.product.price * Math.random() * 20) / 100
				);
				this.product.price += this.product.discount;
				this.product.isDiscount = !this.product.isDiscount;
			}
		},
	},
});

/* 
Вы разрабатываете простое приложение для отображения списка пользователей. 
У вас есть массив объектов users, где каждый объект представляет одного пользователя с его именем и возрастом. 
Вам необходимо отобразить каждого пользователя из массива в виде списка на странице. 
*/
new Vue({
	el: '#task02',
	data: {
		users: [
			{
				id: 1,
				name: 'Gregor',
				age: 25,
			},
			{
				id: 2,
				name: 'Bill',
				age: 24,
			},
			{
				id: 3,
				name: 'Smoke',
				age: 35,
			},
		],
	},
	methods: {},
});

/* 
Вы разрабатываете приложение для создания списка покупок. 
У вас есть массив объектов items, где каждый объект представляет товар с его названием и количеством. 
Вам необходимо отобразить список товаров, 
предоставить возможность изменять количество каждого товара 
и отмечать товары, которые уже куплены. 
*/
new Vue({
	el: '#task03',
	data: {
		goods: [
			{ inputField: '', checkboxField: false, nameField: 'Молоко' },
			{ inputField: '', checkboxField: false, nameField: 'Хлеб' },
			{ inputField: '', checkboxField: false, nameField: 'Яблоки' },
			{ inputField: '', checkboxField: false, nameField: 'Мясо' },
		],
	},
	methods: {
		sendForm() {
			this.goods.forEach((good) => {
				console.log(
					`${good.nameField} - ${good.inputField}, ${good.checkboxField}`
				);
			});
		},
	},
});

/* 
Вы разрабатываете приложение для управления списком контактов. 
У вас есть форма с полями "Имя", "Фамилия" и "Email", где пользователь может вводить информацию о новом контакте. 
После добавления контакта он должен отображаться в списке контактов. 
Требуется связать форму с данными и отображать список контактов на странице. 
*/
new Vue({
	el: '#task04',
	data: {
		name: '',
		surname: '',
		email: '',
		users: [],
	},
	methods: {
		addUser() {
			if (this.name && this.surname && this.email) {
				this.users.push({
					name: this.name,
					surname: this.surname,
					email: this.email,
				});
			}
			this.name = '';
			this.surname = '';
			this.email = '';
		},
	},
});
