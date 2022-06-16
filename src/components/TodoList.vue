<template>
	<div class="todo-list">
		<div class="todo-list-wrapper" v-if="todos.length > 0">
			<h3 class="todo-list-title">List of todos</h3>
			<h4 class="todo-list-total">
				<span class="todo-list-text">
					Total todos: 
				</span>
				<span class="todo-list-number">
					{{ todos.length }}
				</span>
				<span class="todo-list-text">
					Todos completed: 
				</span>
				<span class="todo-list-number">
					{{ countCompleted }}
				</span>
			</h4>
			<transition-group name="todo-list">
				<todo-item 
					v-for="todo in todos" 
					:todo="todo" 
					:key="todo.id" 
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
	computed: {
		countCompleted() {
			const completed = this.todos.filter(todo => todo?.completed);

			return completed.length;
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
	font-size: 20px;
	line-height: 28px;
}

.todo-list-text + .todo-list-text {
	margin-left: 30px;
}

.todo-list-number {
	color: #42b983;
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

@media (max-width: 1220px) {
	.todo-list-title,
	.todo-list-total,
	.error {
		text-align: center;
	}
}

@media (max-width: 370px) {
	.todo-list-title,
	.error {
		font-size: 20px;
		line-height: 28px;
	}
	.todo-list-total span {
		width: 50%;
		display: inline-block;
		font-size: 16px;
		line-height: 24px;
	}
}
</style>