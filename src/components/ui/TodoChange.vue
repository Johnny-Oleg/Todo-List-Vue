<template>
	<div class="form-wrapper" v-show="show">
		<form class="todo-form" @submit.prevent>
			<div class="todo-form-wrapper">
				<custom-input 
					v-model.trim="todo.title" 
					type="text" 
					placeholder="Title..."
					    v-on:input="$emit('input', $event.target.value)"

				/>
				<cta-button @click="changeTodo">Save changes</cta-button>
			</div>
			<textarea 
				class="todo-desc" 
				v-model="todo.desc" 
				type="text" 
				placeholder="Description..."
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
        changeTodo(e) {
            if (this.todo.title === '' || this.todo.desc === '') return;

            this.$emit('change', this.todo);
			            this.$emit('input', e.target.value)

            this.todo = {
                title: '',
                desc: '',
            }
			console.log(this.id, this.title, this.desc, this.todo);
			// this.$emit('update:show', false);
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
.todo-form {

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