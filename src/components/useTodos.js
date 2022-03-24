import { ref, computed, watchEffect } from 'vue'
import useStorage from './useStorage';
function useTodos() {
    let title = ref("");
    let todos = useStorage('todos', [])

    function addTodo() {
        todos.value.push({
            title: title.value, 
            done: false,
        })
        title.value = "";
    }

    function clear() { 
        todos.value = todos.value.filter((v) => !v.done);
    }

    function removeTodo(e,i) {
        todos.value.splice(i, 1)
    }

    let active = computed(() => {
        return todos.value.filter((v) => !v.done).length;
    })
    let all = computed(() => todos.value.length);

    let allDone = computed({
        get: () => {
            return active.value === 0;
        },
        set:(value) => {
            todos.value.forEach(val => {
                val.done = value
            })
        }
    })
    return {
        title,
        todos,
        allDone,
        active,
        all,
        clear,
        addTodo,
        removeTodo
    }
}

export default useTodos