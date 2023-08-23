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
