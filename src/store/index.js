import { createStore } from 'vuex';

import { todoModule } from '@/store/todoModule';

export default createStore({
    state: {
        todos: []
    },
    modules: {
        todo: todoModule
    }
})