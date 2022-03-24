<template>
    <div :style="fontstyle">
        <div class='rate' @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)"  v-for='num in 5' :key="num">☆</span>
            <span class='hollow' :style="fontwidth">
            <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for='num in 5' :key="num">★</span>
            </span>
        </div> 
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'

let props = defineProps({
    // value: Number,
    modelValue: Number,
    theme: { type: String, default: 'orange' }
})
// let emits = defineEmits('update-rate')
let emits = defineEmits(['update-rate'])

let rate = computed(() => {
    return '★★★★★☆☆☆☆☆'.slice(5 - props.value, 10 - props.value)
})

let width = ref(props.value)

function mouseOver(i) {
    width.value = i
}
function mouseOut() {
    width.value = props.value
}

function onRate(i) {
    emits('update-rate', i)
} 

const fontwidth = computed(() => `width: ${width.value}em`)

const themesObj = {
    'black': '#00', 
    'white': '#fff', 
    'red': '#f5222d', 
    'orange': '#fa541c', 
    'yellow': '#fadb14', 
    'green': '#73d13d', 
    'blue': '#40a9ff',
}

let fontstyle = computed(() => {
    return `color: ${themesObj[props.theme]}`
})

</script>
<style scoped>
.rate{ 
    position:relative;
    display: inline-block;
}
.rate > span.hollow {  
    position:absolute;  
    display: inline-block;  
    top:0;  
    left:0;  
    width:0;  
    overflow:hidden;
}
</style>