<template>
    <div v-if="!todo.edit">
        <div>
            <div class="checkbox-container">
                <input type="checkbox" v-model="todo.isChecked" />
                <span class="checkbox-checkmark"></span>
            </div>
            <label class="lbl">{{ todo.title }}                 
                <span class="edit-icon" @click="todo.edit = true">
                    <img src='@/assets/icons/edit-icon.svg' />
                </span>
            </label>
        </div>
        <div class="remove-icon" @click="emits('removeItem', todo.id)">
            <img src='@/assets/icons/remove-icon.svg' />
        </div>
    </div>
    <div v-else class="d-flex mt-10 w-100">
        <input type='text' class="inp" v-model="todo.title" @keyup.esc="todo.edit = false">
        <button class="btn gradient"  @click="todo.edit = false">Edit</button>
    </div>
</template>

<script lang="ts" setup>
import { IToDo, IToDoEmits } from '@/types/TodoList';

const props = defineProps<IToDo>()
const emits = defineEmits<IToDoEmits>()
const {todo} = props

</script>