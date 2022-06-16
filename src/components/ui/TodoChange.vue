<template>
	<div class="form-wrapper" v-show="show">
		<form class="todo-form" @submit.prevent>
			<div class="todo-form-wrapper">
				<custom-input 
					v-model.trim="todo.title" 
					type="text" 
					placeholder="Title..."
				/>
				<textarea 
					class="todo-desc" 
					v-model.trim="todo.desc" 
					type="text" 
					placeholder="Description..."
					maxlength="100"
				/>
			</div>
			<div class="todo-form-btn">
				<cta-button @click="changeTodo">Save changes</cta-button>
			</div>
		</form>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';

import CtaButton from '@/components/ui/CtaButton';
import CustomInput from '@/components/ui/CustomInput';

export default {
	name: 'todo-change',
    components: {
        CtaButton,
        CustomInput
    },
	props: {
		show: Boolean,
		id: Number,
		default: false
	},
    data() {
        return {
            todo: {
				id: '',
                title: '',
                desc: '',
            },
        }
    },
    methods: {
		...mapMutations({
			setChangeTodo: 'todo/setChangeTodo',
		}),
		changeTodo() {
			if (this.todo.title === '' && this.todo.desc === '') return;
			
			this.todo.id = this.id;
			this.setChangeTodo(this.todo);

            this.todo = {
                title: '',
                desc: '',
            }

			this.$emit('update:show', false);	
        },
    },
    watch: {
        todo: {
            handler(newValue) {
                // console.log(newValue);
            },
            deep: true,
        },
    },
}
</script>

<style scoped>
.form-wrapper {
    width: 500px;
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

.todo-form {
    width: 100%;
	display: flex;
}

.todo-form-wrapper {
    width: 100%;
    display: flex;
	flex-direction: column;
    justify-content: space-between;
}

.todo-desc {
    width: 300px;
    height: 100px;
	margin-top: 30px;
    padding: 12px 24px;
	border-radius: 15px;
	border: 2px solid #e5e5e5;
	word-break: break-all;
	line-height: 39px;
	overflow: visible;
	resize: none;
}

.todo-form-btn {
	min-width: 130px;
	align-self: flex-end;
}

@media (max-width: 525px) {
	.form-wrapper{
		width: 100%;
	}
}

@media (max-width: 510px) {
	.todo-form {
		flex-wrap: wrap;
	}
	.todo-form-wrapper {
		align-items: center;
	}
	.todo-desc {
		margin-bottom: 30px;
	}
	.todo-form-btn {
		margin: 0 auto;
	}
}

@media (max-width: 370px) {
	.todo-desc {
		width: 100%;
	}
}
</style>