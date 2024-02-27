<template>
  <div class="form">
    <addItem />
    <itemView :todos="todos"/>
  </div>
</template>

<script>
import axios from 'axios';
import itemView from './components/itemView.vue'
import addItem from './components/addItem.vue';
export default {
  components:{
    addItem,
    itemView,
  },
    data(){
      return{
        todos:[],
      }
    },
    methods: {
      getTodos(){
        axios.get('http://localhost:3030/todos')
        .then(response =>{
          this.todos = response.data;
        })
        .catch(error =>{
          console.log(error)
        })
      }

    },
    created(){
      this.getTodos();
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
