<template>
	<div class="todo-list">
		<div v-if="todos.length > 0">
			<h3>List of todos</h3>
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
	}
}
</script>

<style>
.todo-list {
	margin: 0 auto;
}

.error {
    
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