<template>
	<input 
		class="todo-input" 
		:value="modelValue" 
		@input="updateInput" 
		type="text"
		maxlength="30"
	>
</template>

<script>
export default {
	name: 'custom-input',
	props: {
		modelValue: [String, Number]
	},
	methods: {
		updateInput(e) {
			this.$emit('update:modelValue', e.target.value);
		} 
	}
}
</script>

<style scoped>
.todo-input {
    width: 300px;
    height: 50px;
    padding: 12px 24px;
	border-radius: 15px;
	border: 2px solid #e5e5e5;
	line-height: 39px;
	overflow: visible;
}

@media (max-width: 370px) {
	.todo-input {
		width: 100%;
	}
}
</style>