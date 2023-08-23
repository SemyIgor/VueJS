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
			rotatedText: false,
			rotateStyle: ``,
		},
		methods: {
			rotateText() {
				this.rotatedText = !this.rotatedText;
				this.rotateStyle = this.rotatedText
					? `transform: rotate(180deg);`
					: `transform: rotate(0deg);`;
			},
		},
	});
}

function task02() {
	const app02 = new Vue({
		el: '#app02',
		data: {
			ulVar: document.getElementById('ulVar'),
			counter: 0,
			listItem: null,
		},
		methods: {
			addListItem() {
				ulVar.insertAdjacentHTML(
					'beforeend',
					`<li class="listItem" style="cursor: pointer; margin-bottom: 5px; list-style: square;">Новый элемент списка ${++this
						.counter}</li>`
				);

				ulVar.lastChild.addEventListener(
					'click',
					(el) => {
						console.log(`Удалён ${el.target.innerText}`);
						alert(`Удалён ${el.target.innerText}`);
						el.target.remove();
					},
					{ once: true }
				);
			},
			removeListItem() {
				console.log(this.listItem);
			},
		},
	});
}
