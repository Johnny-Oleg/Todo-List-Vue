<template>
	<select class="select" v-model="modelValue" @change="changeOption">
		<option disabled value="">Choose from list</option>
		<option v-for="option in options" :key="option.value" :value="option.value">
			{{ option.name }}
		</option>
	</select>
</template>

<script>
export default {
	name: 'sort-select',
	props: {
		modelValue: {
			type: String
		},
		options: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		changeOption(e) {
			this.$emit('update:modelValue', e.target.value);
		}
	}
}
</script>

<style scoped>
.select {
	width: 300px;
    height: 100px;
	margin-top: 30px;
    padding: 12px 24px;
	color: gray;
	border-radius: 15px;
	border: 2px solid #e5e5e5;
	line-height: 39px;
}
</style>