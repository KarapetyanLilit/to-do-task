<template>
    <h1 class="page-title">Todo List</h1>
    <div class="todoList">
        <div class="shadow-block search">
            <input type="search" v-model="searchValue" placeholder="Search task..." class="inp" />
        </div>
        <div class="shadow-block list">
            <div v-for="(todo, index) in todoList" :key="index" :class="`item ${todo.isChecked ? 'isChecked' : ''}`">
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
import {computed, ref} from 'vue'
import { useStore } from 'vuex';
import { ITodoListItem } from '@/types/TodoList'
import ToDoListItem from '@/components/ToDoListItem.vue'

const store = useStore()
const addValue = ref<string>('')
const searchValue = ref<string>('')
const todoList = computed(() => {
    if (searchValue.value){
        return store.getters.getTodoList.filter((item: ITodoListItem) => item.title?.toLowerCase().includes(searchValue.value))
    }
    return store.getters.getTodoList
}) /* get todo list data */

/* add item in todo list calling function */
const setItem = () => { 
    if (addValue.value) {
        const todoItem: ITodoListItem = {
            title: addValue.value,
            isChecked: false,
            id: todoList.value.length + 1,
            edit: false
        }
        store.commit('SET_ITEM_TODO_LIST', todoItem)
        addValue.value = ''
    }
}

/* remove item from todo list calling function */
const removeItem = (index: number | string) => {
    store.commit('REMOVE_ITEM_TODO_LIST', Number(index))
}




</script>