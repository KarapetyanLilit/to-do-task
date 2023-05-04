<template>
    <h1 class="page-title">Todo List</h1>
    <div class="todoList">
        <div class="shadow-block search">
            <input type="search" v-model="searchValue" placeholder="Search task..." class="inp" @input="searchItem" />
        </div>
        <div class="shadow-block list">
            <div v-for="(todo, index) in todoList" :key="index" :class="`item d-flex justify-content-space-between ${todo.isChecked ? 'isChecked' : ''}`">
                <ToDoListItem :todo="todo" @removeItem="removeItem" />
            </div>
        </div>
        <div class="shadow-block">
            <div class="d-flex">
                <input v-model="addValue" type="text" class="inp" placeholder="Add task" />
                <button class="btn gradient" @click="setItem">Add</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { useStore } from 'vuex';
import { ITodoListItem } from '@/types/TodoList'
import ToDoListItem from '@/components/ToDoListItem.vue'

const store = useStore()
const addValue = ref<string>('')
const searchValue = ref<string>('')
const todoList = ref(store.getters.getTodoList) /* get todo list data */

/* add item in todo list calling function */
const setItem = () => { 
    const todoItem: ITodoListItem = {
        title: addValue.value,
        isChecked: false
    }
    store.commit('SET_ITEM_TODO_LIST', todoItem)
    addValue.value = ''
    searchItem()
}

/* remove item from todo list calling function */
const removeItem = (index: number | string) => { 
    store.commit('REMOVE_ITEM_TODO_LIST', Number(index))
}

/* search item from todo list function */
const searchItem = () => { 
    todoList.value = store.getters.getTodoList
    if (searchValue.value){
        todoList.value = store.getters.getTodoList.filter((item: ITodoListItem) => item.title?.toLowerCase().includes(searchValue.value))
    }
}




</script>