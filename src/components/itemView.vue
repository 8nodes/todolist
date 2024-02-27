<template>
    <div class="view">
        <div class="items" v-for="(todo,index) in todos" :key="index">
            <div class="title">{{ todo.title }}</div>
            <div class="description">{{ todo.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        todos:{
            type: Array,
            required: true,
        }
    }
}
</script>


<style scoped>

</style>