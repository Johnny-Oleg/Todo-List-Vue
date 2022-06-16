<template>
	<div class="todo-list-wrapper">
		<div class="todo-list-item" :class="{ active: todo.completed }">
			<div class="list-item-img">
				<img :src="todo.img" alt="image" />
			</div>
			<div class="list-item-info">
				<div class="list-item-check" v-show="todo.completed">
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
				<cta-button 
					:class="{ done: todo.completed, todo: !todo.completed }"
					@click="completeTodo"
				>
					{{ todo.completed ? 'Done' : 'To do' }}
				</cta-button>
				<cta-button 
					:class="{ done: !isVisible, todo: isVisible }"
					@click="showModal"
				>
					{{ isVisible ? 'Close' : 'Edit' }}
				</cta-button>
				<cta-button @click="deleteTodo">Delete</cta-button>
			</div>
		</div>
		  <transition name="slide-fade">
			<todo-change 
				v-model:show="isVisible" 
				:id="todo.id"
			/>
		  </transition>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';

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
		}
	},
	methods: {
		...mapMutations({
			setCompleteTodo: 'todo/setCompleteTodo',
			setDeleteTodo: 'todo/setDeleteTodo',
		}),
		completeTodo() {
			this.setCompleteTodo(this.todo.id);
		},
		deleteTodo() {
			this.setDeleteTodo(this.todo.id);
		},
		showModal() {
			this.isVisible = !this.isVisible;
		}
	}
}
</script>

<style scoped>
.todo-list-wrapper {
	display: flex;
	justify-content: space-between;
}

.todo-list-item {
    width: 690px;
	min-height: 300px;
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
	max-width: 380px;
	margin: 20px 0 30px 0;
	font-size: 32px;
	line-height: 40px;
	word-break: break-all;
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
    content: '';
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

@media (max-width: 1220px) {
	.todo-list-wrapper {
		flex-direction: column;
		align-items: center;
	}
	.list-item-info {
		min-height: 260px;
	}
	.list-item-btns {
		min-height: 260px;
	}
}

@media (max-width: 730px) {
	.todo-list-item {
		width: 100%;
		flex-wrap: wrap;
	}
	.list-item-img {
		order: 2;
	}
	.list-item-info {
		min-height: initial;
		flex: 0 0 90%;
		margin: 0 auto;
	}
	.list-item-title,
	.list-item-text {
		max-width: initial;
		width: 100%;
	}
	.list-item-btns {
		min-height: 172px;
		order: 3;
		flex: 1 0 auto;
		align-items: center;
		flex-direction: row;
	}
}

@media (max-width: 525px) {
	.list-item-title {
		font-size: 20px;
		line-height: 28px;
	}
	.list-item-check {
		top: 26px;
	}
	.list-item-btns {
		min-height: 200px;
		flex-direction: column;
		align-items: flex-end;
	}
}

@media (max-width: 310px) {
	.list-item-img {
		display: none;
	}
	.list-item-title {
		font-size: 18px;
		line-height: 26px;
	}
	.list-item-check {
		top: 24px;
	}
	.list-item-btns {
		align-items: center;
	}
}
</style>