<template>
	<button class="cta-btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'cta-button'
}
</script>

<style>
.cta-btn {
	padding: 10px 16px;
	background-color: #42b983;
	color: #fff;
	border: 0px solid transparent;
	border-bottom: 4px solid #207850;
	border-radius: 12px;
	cursor: pointer;
}
</style>