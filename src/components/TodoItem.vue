<template>
	<div class="todo-list-item">
		<img class="list-item-img" :src="todo.img" alt="image" />
		<div class="">
			<h3>{{ todo.title }}</h3>
			<p>{{ todo.desc }}</p>
		</div>
	</div>
</template>

<script>
export default {
    props: {
		todo: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
.todo-list-item {
    width: 600px;
	max-height: 400px;
}

.list-item-img {
	max-width: 130px;
}
</style>