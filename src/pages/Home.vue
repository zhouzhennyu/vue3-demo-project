<template>
    <h2>home</h2>
    <TodoList />
    <hr>
    <!-- <Rate :value="3.5" ></Rate>
    <Rate :value="4" theme="red"></Rate>
    <Rate :value="1.5" theme="green" @update-rate="updateRate"></Rate> -->
    <Rate v-model="rateScore" @update-rate="updateRate" />
</template>
<script setup>
import { ref } from 'vue'
import TodoList from '../components/Todolist.vue'
import Rate from '../components/Rate.vue'

    function updateRate(num){
        console.log('updateRate---', num)
    }
    let rateScore = ref(3)
</script>