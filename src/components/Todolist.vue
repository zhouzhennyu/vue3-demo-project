<template>
    <div>
        <input type="text" v-model="title" @keydown.enter="addTodo" />
        <button v-if="active < all" @click="clear">清理</button>
        <!-- <ul v-if="todos.length">  -->
            <transition-group v-if="todos.length"  name="flip-list" tag="ul">
            <li v-for="(todo, index) in todos" :key="index">
                <input type="checkbox" v-model="todo.done" />
                <span :class="{ done: todo.done }">{{ todo.title }}</span>
                <span class="remove-btn" @click="removeTodo($event,i)"> ❌</span>
            </li>
            </transition-group>
        <!-- </ul> -->
        <div v-else>暂无数据</div>
        <div>
            全选<input type="checkbox" v-model="allDone" />
            <span>{{ active }}/{{ all }}</span>
        </div>
    </div>
</template>
<script setup>
    import useTodos from './useTodos'
    let { title,
        todos,
        allDone,
        active,
        all,
        clear,
        removeTodo,
        addTodo } = useTodos() 
</script>
<style scoped>
    h1 {
        color: red;
    }
    /* .flip-list-move {
        transition: transform 0.8s ease;
    } */
    .flip-list-enter-active, .flip-list-leave-active {
        transition: all 1s ease;
    }
    .flip-list-enter-from, .flip-list-leave-to { 
        opacity: 0; transform: translateX(30px);
    }
</style>