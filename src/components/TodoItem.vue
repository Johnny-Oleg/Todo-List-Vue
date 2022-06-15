<template>
	<div class="todo-list-wrapper">
		<div class="todo-list-item" :class="{ active: todo.checked }">
			<div class="list-item-img">
				<img :src="todo.img" alt="image" />
			</div>
			<div class="list-item-info">
				<div class="list-item-check" v-show="todo.checked">
					<img src="@/assets/logo.png" alt="image">
				</div>
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
				<!-- <input 
					class="list-item-check" 
					v-model="this.isChecked" 
					@change="check($event)"
					type="checkbox"
				> -->
				<cta-button 
					:class="{ done: todo.checked, todo: !todo.checked }"
					@click="$emit('complete', todo)"
				>
					{{ todo.checked ? 'Done' : 'To do' }}
				</cta-button>
				<cta-button @click="showModal">
					{{ isVisible ? 'Close' : 'Edit' }}
				</cta-button>
				<cta-button @click="$emit('delete', todo)">Delete</cta-button>
			</div>
		</div>
		  <transition name="slide-fade">
			<todo-change 
				@change="$emit('change', todo)" 
				v-model:show="isVisible" 
				:id="todo.id"
			/>
		  </transition>
	</div>
</template>

<script>
import CtaButton from '@/components/ui/CtaButton';
import TodoChange from '@/components/ui/TodoChange';
import logo from '@/assets/logo.png';

export default {
	components: {
		CtaButton,
		TodoChange,
		logo
	},
    props: {
		todo: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			isVisible: false,
			// isChecked: false
		}
	},
	methods: {
		showModal() {
			this.isVisible = !this.isVisible;
		}
		// check({ target: { checked } }) {
		// 	this.isChecked = checked;
		// }
	}
}
</script>

<style scoped>
.todo-list-wrapper {
	display: flex;
	justify-content: space-between;
}

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
	transition: all 0.3s ease-in-out;
}

.active {
	border-color: #42b983;
}

.todo {
	background-color: #fff;
	color: inherit;
	border: 1px solid #e5e5e5;
	border-bottom: 4px solid #e5e5e5;
}

.done {
	background-color: #42b983;
	color: #fff;
	border: 1px solid transparent;
	border-bottom: 4px solid #207850;
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
	position: relative;
}

.list-item-check {
	width: 16px;
	height: 16px;
	position: absolute;
	top: 35px;
	left: -20px;
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
	height: 100%;
	flex: 0 0 90px;
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

.slide-fade-enter-active {
  	transition: all .3s ease;
}
.slide-fade-leave-active {
  	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  	transform: translateX(10px);
  	opacity: 0;
}
</style>