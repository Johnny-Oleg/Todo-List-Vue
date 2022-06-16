<template>
    <div class="container">
        <div class="header">
            <todo-form />
            <div class="header-wrapper">
                <custom-input 
                    :model-value="searchQuery" 
                    @update:model-value="setSearchQuery" 
                    placeholder="Search by title..." 
                />
                <sort-select
                    :model-value="selectedSort" 
                    @update:model-value="setSelectedSort" 
                    :options="sortOptions" 
                />
            </div>
        </div>
        <todo-list :todos="sortedAndSearchedTodos || []" />
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

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
        }
    },
    methods: {
        ...mapMutations({
			setSearchQuery: 'todo/setSearchQuery',
			setSelectedSort: 'todo/setSelectedSort'
		}),
		...mapActions({
			fetchTodos: 'todo/fetchTodos'
		}),
    },
    mounted() {
        this.fetchTodos();       
    },
    computed: {
        ...mapState({
			todos: state => state.todo.todos,
			selectedSort: state => state.todo.selectedSort,
			searchQuery: state => state.todo.searchQuery,
			sortOptions: state => state.todo.sortOptions,
		}),
		...mapGetters({
			sortedTodos: 'todo/sortedTodos',
			sortedAndSearchedTodos: 'todo/sortedAndSearchedTodos'
		})
    },
    watch: {
        todo: {
            handler(newValue) {
                // console.log(newValue);
            },
            deep: true
        },
        todos: {
            handler(newTodos) {
                const parsed = JSON.stringify(newTodos);

                localStorage.setItem('todos', parsed);
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
    background-color: #fff;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    color: #2c3e50;
    padding-top: 20px;
}

.container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 15px;
}

.header {
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.header-wrapper {
    display: flex;
    flex-direction: column;
}

@media (max-width: 1220px) {
    .header {
        margin: 0 auto 50px;
    }
}

@media (max-width: 830px) {
    .header {
        justify-content: center;
        gap: 20px;
    }
}

@media (max-width: 799px) {
    .header {
        flex-direction: column;
        align-items: flex-start;
    }
}

@media (max-width: 510px) {
    .header {
        align-items: center;
    }
}

@media (max-width: 370px) {
	.header-wrapper {
		width: 100%;
        margin-top: 20px;
	}
}
</style>