// Создадим объект Vue:
const app = new Vue({
	el: '#app',
	data: {},
	// components: { some },
	methods: {},
});

// Создадим компонент Vue:
// Vue.component('some', {});

// Добавим компоненту шаблон (по сути - описание компонента)
Vue.component('some', {
	template: '<h1>Hi, Component !</h1>',
});

// Далее, вызываем созданный компонент в нашем html-файле:
