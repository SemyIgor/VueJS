/* 
1. Создать кнопку "Перевернуть". 
При клике на кнопку текст кнопки, должен перевернуться и отобразиться в обратном порядке.
2. Есть список элементов. Пользователь может добавлять новые элементы списка 
с текстом “Новый элемент списка” нажав на кнопку "Добавить".
3. * При клике на элемент списка он должен быть удален. (по желанию) 
*/
task01();
task02();

function task01() {
	const app = new Vue({
		el: '#app',
		data: {
			wordOnButton: 'Перевернуть',
		},
		methods: {
			rotateText() {
				this.wordOnButton = this.wordOnButton.split('').reverse().join('');
			},
		},
	});
}

function task02() {
	const app02 = new Vue({
		el: '#app02',
		data: {
			counter: 0,
			listItem: { text: 'Новый элемент списка' },
			listItems: [
				{ text: 'Новый элемент списка-1' },
				{ text: 'Новый элемент списка-2' },
				{ text: 'Новый элемент списка-3' },
				{ text: 'Новый элемент списка-4' },
			],
		},
		methods: {
			addListItem() {
				this.listItems.push(this.listItem);
			},
			removeListItem(index) {
				console.log(index);
				this.listItems.splice(index, 1);
			},
		},
	});
}
