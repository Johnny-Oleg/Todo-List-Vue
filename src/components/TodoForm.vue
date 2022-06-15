<template>
    <form class="todo-form" @submit.prevent>
        <div class="todo-form-wrapper">
            <custom-input 
                v-model.trim="todo.title" 
                type="text" 
                placeholder="Title..."
            />
            <cta-button @click="createTodo">Add todo</cta-button>
        </div>
        <textarea 
			class="todo-desc" 
			v-model="todo.desc" 
			type="text" 
			placeholder="Description..."
            maxlength="100"
		/>
    </form>
</template>

<script>
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
                checked: false
            },
            // images: []
        }
    },
    methods: {
        createTodo() {
            if (this.todo.title === '' || this.todo.desc === '') return;

            const random = arr => arr[Math.floor(Math.random() * arr.length)];

            this.todo.id = Date.now();
            this.todo.img = random(this.images);

            this.$emit('create', this.todo);

            this.todo = {
                title: '',
                desc: '',
            }
        },
        // importAll(r) {
        // 	r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
        // }
    },
    mounted() {
        // this.importAll(require.context('../assets/', true, /\.svg$/));
        // console.log(this.images);
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
                console.log(newValue);
            },
            deep: true,
        },
    },
}
</script>

<style scoped>
.todo-form {
    width: 430px;
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