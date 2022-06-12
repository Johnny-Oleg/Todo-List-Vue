<template>
	<div class="todo-list">
		<div v-if="todos.length > 0">
			<h3>List of todos</h3>
			<todo-item 
				v-for="todo in todos" 
				:todo="todo" 
				:key="todo.id" 
			/>
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
.error {
    
}
</style>