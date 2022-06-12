<template>
    <form class="todo-form" @submit.prevent>
        <input 
			class="todo-input" 
			v-model.trim="todo.title" 
			type="text" 
			placeholder="Title..."
		/>
        <textarea 
			class="todo-input" 
			v-model="todo.desc" 
			type="text" 
			placeholder="Description..."
		/>
        <button class="todo__btn" @click="createTodo">Add todo</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            todo: {
                title: '',
                desc: '',
            },
            // images: []
        }
    },
    methods: {
        createTodo() {
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

<style>

</style>