<template>
	<div class="todo-list">
		<div v-if="todos.length > 0">
			<h3 class="todo-list-title">List of todos</h3>
			<h4 class="todo-list-total">
				<span>Total todos: {{ todos.length }}</span>
				<span>Todos completed: {{ countChecked() }}</span>
			</h4>
			<transition-group name="todo-list">
				<todo-item 
					v-for="todo in todos" 
					:todo="todo" 
					:key="todo.id" 
					@complete="$emit('complete', todo)"
					@change="$emit('change', todo)"
					@delete="$emit('delete', todo)"
				/>
			</transition-group>
		</div>
		<h2 class="error" v-else>No todos...</h2>
	</div>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
    components: {
		TodoItem
    },
	props: {
		todos: {
			type: Array,
			required: true,
		}
	},
	methods: {
		countChecked() {
			const checked = this.todos.filter(todo => todo?.checked);

			return checked.length;
		}
	}
}
</script>

<style scoped>
.todo-list {
	margin: 0 auto;
}

.todo-list-title {
	margin-bottom: 20px;
	font-size: 32px;
	line-height: 40px;
}

.todo-list-total {
	margin-bottom: 20px;
}

.todo-list-total span {
	display: inline-block;
	font-size: 20px;
	line-height: 28px;
}

span + span {
	margin-left: 30px;
}

.error {
	font-size: 32px;
	line-height: 40px;
}

.todo-list-enter-active,
.todo-list-leave-active {
	transition: all 1s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.todo-list-move {
	transition: transform 0.8s ease;
}
</style>