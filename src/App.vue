<template>
    <div class="container">
        <todo-form @create="createTodo" />
        <sort-select v-model="selectedSort" :options="sortOptions" />
        <custom-input v-model="searchQuery" placeholder="Search by title..." />
        <todo-list 
            :todos="sortedAndSearchedTodos" 
            @complete="completeTodo"
            @change="changeTodo" 
            @delete="deleteTodo" 
        />
    </div>
</template>

<script>
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import SortSelect from '@/components/ui/SortSelect';
import CustomInput from '@/components/ui/CustomInput';

export default {
    components: {
        TodoForm,
        TodoList,
        SortSelect,
        CustomInput
    },
    data() {
        return {
            todos: [
                {id: 1, title: 'Test', desc: 'Hello todo.', img: '', checked: false},
                {id: 2, title: 'Dest', desc: 'Ye todo.', img: '', checked: false},
            ],
            sortOptions: [
				{ value: 'title', name: 'By title' },
				{ value: 'desc', name: 'By description' },
			],
            selectedSort: '',
            searchQuery: ''
        }
    },
    methods: {
        createTodo(todo) {
            this.todos.push(todo);
		},
        completeTodo(todo) {
            this.todos.map(t => {
                if (t.id === todo.id) {
                    t.checked = !t.checked;
                }

                return t;
            })
        },
        changeTodo(todo) {
            console.log(todo.id, todo.title, todo);
            this.todos.map(t => t.id === todo.id ?
                {...t, title: todo.title, desc: todo.desc} : t
            );
        },
		deleteTodo(todo) {
			this.todos = this.todos.filter(t => t.id !== todo.id);
		},
    },
    mounted() {
        console.log(this.todos, 'mount');
    },
    computed: {
        sortedTodos() {
			return [...this.todos].sort((todo1, todo2) => {
				return todo1[this.selectedSort]?.localeCompare(todo2[this.selectedSort]);
			})
		},
		sortedAndSearchedTodos() {
			return this.sortedTodos
				.filter(todo => todo.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
		}
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

body {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
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