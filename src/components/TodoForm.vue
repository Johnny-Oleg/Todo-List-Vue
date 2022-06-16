<template>
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
            <cta-button @click="createTodo">Add todo</cta-button>
        </div>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';

import CtaButton from '@/components/ui/CtaButton';
import CustomInput from '@/components/ui/CustomInput';

export default {
    components: {
        CtaButton,
        CustomInput
    },
    data() {
        return {
            todo: {
                id: '',
                title: '',
                desc: '',
                img: '',
                completed: false
            },
        }
    },
    methods: {
        ...mapMutations({
            setCreateTodo: 'todo/setCreateTodo'
        }),
        createTodo() {
            if (this.todo.title === '' || this.todo.desc === '') return;

            const random = arr => arr[Math.floor(Math.random() * arr.length)];

            this.todo.id = Date.now();
            this.todo.img = random(this.images);
            this.todo.completed = false;

            this.setCreateTodo(this.todo);

            this.todo = {
                title: '',
                desc: '',
            }
        },
    },
    computed: {
        images() {
            const path = require.context('../assets/', false, /\.svg$/);
            const img = path.keys().map(path);

            return img;
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
.todo-form {
    width: 430px;
    display: flex;
    gap: 26px;
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

@media (max-width: 510px) {
	.todo-form {
        width: 100%;
		flex-wrap: wrap;
	}
	.todo-form-wrapper {
		align-items: center;
	}
	.todo-desc {
		margin-bottom: 30px;
	}
	.todo-form-btn {
        min-width: 102px;
		margin: 0 auto;
	}
}

@media (max-width: 370px) {
	.todo-desc {
		width: 100%;
	}
}
</style>