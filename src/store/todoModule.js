export const todoModule = {
    state: () => ({
        todos: [],
        sortOptions: [
            { value: 'title', name: 'By title' },
            { value: 'desc', name: 'By description' },
            { value: 'completed', name: 'By completed' },
        ],
        selectedSort: '',
        searchQuery: '',
    }),
    getters: {
        sortedTodos(state) {
            return [...state.todos].sort((todo1, todo2) => {
                const a = todo1[state.selectedSort];
                const b = todo2[state.selectedSort];
                
                if (typeof a === 'boolean' && typeof b === 'boolean') {
                    return b - a;
                }

                return a?.localeCompare(b);
            })
        },
        sortedAndSearchedTodos(state, getters) {
            return getters.sortedTodos.filter(todo => todo.title
                    .toLowerCase()
                    .includes(state.searchQuery.toLowerCase())
            )
        },
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
		setCreateTodo(state, todo) {
            state.todos.push(todo);
		},
		setCompleteTodo(state, id) {
            state.todos = state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }

				return todo;
            })
        },
        setChangeTodo(state, todo) {
        	state.todos = state.todos.map(t => t.id === todo.id
				? { 
					...t, 
					title: todo.title === '' ? t.title : todo.title, 
					desc: todo.desc === '' ? t.desc : todo.desc
				}
				: t
             )
        },
		setDeleteTodo(state, id) {
			state.todos = state.todos.filter(todo => todo.id !== id);
		},
    },
    actions: {
        async fetchTodos({ commit }) {
            if (localStorage.getItem('todos')) {
                try {
                    const todos = await JSON.parse(localStorage.getItem('todos'));

                    commit('setTodos', todos);
                } catch (e) {
                    localStorage.removeItem('todos');
                }
            }
        },
    },
    namespaced: true,
}