<template>
	<div class="todo-list-item" :class="{ active: isChecked }">
		<div class="list-item-img">
			<img :src="todo.img" alt="image" />
		</div>
		<div class="list-item-info">
			<h3 class="list-item-title">{{ todo.title }}</h3>
			<div class="list-item-wrapper">
				<p class="list-item-text">
					<span>{{ todo.desc }}</span>
				</p>
				<div class="decor-wrapper">
					<div class="decor-item"></div>
				</div>
			</div>
		</div>
		<div class="list-item-btns">
			<input 
				class="list-item-chech" 
				v-model="this.isChecked" 
				@change="check($event)"
				type="checkbox"
			>
			<cta-button @click="$emit('delete', todo)">Delete</cta-button>
		</div>
	</div>
</template>

<script>
import CtaButton from '@/components/ui/CtaButton';

export default {
	components: {
		CtaButton
	},
    props: {
		todo: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			isChecked: false
		}
	},
	methods: {
		check({ target: { checked } }) {
			this.isChecked = checked;
		}
	}
}
</script>

<style scoped>
.todo-list-item {
    width: 680px;
	height: 300px;
	margin-bottom: 30px;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
	background-color: #fff;
	border-radius: 16px;
	border: 2px solid #e5e5e5;
}

.active {
	border-color: #42b983;
}

.list-item-img {
	max-width: 114px;
	flex: 1 0 114px;
	border-bottom: 2px solid #e5e5e5;
}

.list-item-img img {
	margin: 0 auto;
}

.list-item-info {
	height: 100%;
	flex: 2 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

.list-item-title {
	margin: 20px 0 30px 0;
	font-size: 32px;
	line-height: 40px;
}

.list-item-wrapper {
	position: relative;
}

.list-item-text {
	max-width: 380px;
	padding: 12px 24px;
	border-radius: 15px;
	border: 2px solid #e5e5e5;
	word-break: break-all;
	line-height: 39px;
	overflow: visible;
}

.list-item-text span {
	width: 100%;
	height: 100%;
}

.list-item-btns {
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

.decor-wrapper {
    width: 20px;
	height: 10px;
	position: absolute;
	top: calc(50% - 15px);
	left: -13px;
    margin: 15px 0;
	transform: translateY(-50%) rotate(-90deg);
    overflow: hidden;
}

.decor-item {
    content: "";
    width: 14.14427px;
    height: 14.14427px;
	position: absolute;
    left: 50%;
    border: 2px solid #e5e5e5;
    border-radius: 2px;
	background-color: #fff;
    transform: rotate(45deg);
    transform-origin: top left;
}
</style>