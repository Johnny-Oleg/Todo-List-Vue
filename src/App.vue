<template>
    <div class="container">
        <todo-form @create="createTodo" />
        <todo-list :todos="todos" />
    </div>
</template>

<script>
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

export default {
    components: {
        TodoForm,
        TodoList
    },
    data() {
        return {
            todos: [{id: 1, title: 'Test', desc: 'Hello todo.', img: ''}],
        }
    },
    methods: {
        createTodo(todo) {
            this.todos.push(todo);
		},
		removeTodo(todo) {
			this.todos = this.todos.filter(t => t.id !== todo.id);
		},
    },
    mounted() {
        console.log(this.todos, 'mount');
    },
    watch: {
        todo: {
            handler(newValue) {
                console.log(newValue);
            },
            deep: true
        }
	}
}
</script>

<style>
:root {
    box-sizing: border-box;
}

*,
*::after,
*::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

ul[class],
ol[class] {
    padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
    margin: 0;
}

ul[class] {
    list-style: none;
}

img {
    max-width: 100%;
    display: block;
}

input,
button,
textarea,
select {
    font: inherit;
    outline: none;
}

a {
    text-decoration: none;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    min-height: 100vh;
    background-image: url(./assets/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #2c3e50;
}

.container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 15px;
}
</style>