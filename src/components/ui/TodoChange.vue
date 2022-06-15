<template>
	<div class="form-wrapper" v-show="show">
		<form class="todo-form" @submit.prevent>
			<div class="todo-form-wrapper">
				<custom-input 
					v-model.trim="todo.title" 
					type="text" 
					placeholder="Title..."

				/>
				<cta-button @click="changeTodo">Save changes</cta-button>
			</div>
			<textarea 
				class="todo-desc" 
				v-model="todo.desc" 
				type="text" 
				placeholder="Description..."
                maxlength="100"
			/>
		</form>
	</div>
</template>

<script>
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
				id: this.id,
                title: '',
                desc: '',
            },
        }
    },
    methods: {
        changeTodo() {
            if (this.todo.title === '' || this.todo.desc === '') return;
			
            this.$emit('change', this.todo);

            this.todo = {
                title: '',
                desc: '',
            }
			console.log(this.id, this.title, this.desc, this.todo);
			this.$emit('update:show', false);
        },
    },
    watch: {
        todo: {
            handler(newValue) {
                console.log(newValue);
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
}

.todo-form-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.todo-desc {
    width: 300px;
    height: 100px;
    padding: 12px 24px;
	border-radius: 15px;
	border: 2px solid #e5e5e5;
	word-break: break-all;
	line-height: 39px;
	overflow: visible;
}
</style>