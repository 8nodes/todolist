<template>
    <div class="form-container">
        <form @submit.prevent = "submitForm">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="input-field" id="title" v-model="todo.title">
                
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea name="" id="description" class="input-field" v-model="todo.description"></textarea>
                
            </div>

            <div class="form-group">
                <label for="steps">Steps</label>
                <div v-for="(step,index) in todo.steps" :key="index" class="input-group">
                <input type="text" class="input-field" v-model="step.description" required>
                <button class="btn-remove" type="button" @click ="removeStep(index)">Remove</button>

                </div>
                <button class="btn-add" type="button" @click="addStep">Add step</button>
            </div>
            <button type="submit" class="submit-btn">Save</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'addItem',
    data(){
        return {
            todo: {
                title: '',
                description:'',
                steps:[],
            },
        };
    },
    methods: {
        addStep(){
            this.todo.steps.push({ description: ''})
        },
        removeStep(index){
            this.todo.steps.splice(index,1);
        },
        submitForm(){
            axios.post('http://localhost:3030/todos/add',this.todo)
            .then(response =>{
                console.log('Todo saved successfully',response.data);
            })
            .catch(error =>{
                console.log(error)
            });
            
        }
    }
}
</script>

<style scoped>
.form-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: rgb(37, 29, 29);
    border: 1px solid rgb(37, 29, 29);
    box-shadow: 10px rgb(37, 29, 29);
    border-radius: 10px;

}
.form-group {
    margin-bottom: 20px;
}
label{
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: rgb(156, 139, 170);
}
.input-field {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 4px;
    background: grey;
    font-size: 20px;
    color: brown;
}
.input-group{
    display: flex;
    margin-bottom: 10px;
}
.btn-remove{
    padding: 8px;
    margin-left: 8px;
    background-color: brown;
    color: aliceblue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.btn-add{
    padding: 8px;
    background-color: blue;
    color: aliceblue;
    border: none;
    border-radius:4px ;
    cursor: pointer;
}
.submit-btn{
    padding: 10px;
    background-color: blue;
    color: aliceblue;
    border: none;
    width: 100px;
    border-radius: 7px;
    cursor: pointer;
}

</style>