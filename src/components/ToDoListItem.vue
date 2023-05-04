<template>
    <div v-if="!props.todo.edit" class="d-flex justify-content-space-between">
        <div>
            <div class="checkbox-container">
                <input type="checkbox" v-model="props.todo.isChecked" />
                <span class="checkbox-checkmark"></span>
            </div>
            <label class="lbl">{{ props.todo.title }}                 
                <span class="edit-icon" @click="props.todo.edit = true">
                    <img src='@/assets/icons/edit-icon.svg' />
                </span>
            </label>
        </div>
        <div class="remove-icon" @click="emits('removeItem', props.todo.id)">
            <img src='@/assets/icons/remove-icon.svg' />
        </div>
    </div>
    <div v-else class="d-flex mt-10 w-100">
        <input type='text' class="inp" v-model="props.todo.title" @keyup.esc="props.todo.edit = false">
        <button class="btn gradient"  @click="props.todo.edit = false">Edit</button>
    </div>
</template>

<script lang="ts" setup>
import { ITodoListItem } from '@/types/TodoList';

export interface IToDo {
    todo: ITodoListItem
}

export interface IToDoEmits{
    (e: 'removeItem', id: number | string): void
}

const props = defineProps<IToDo>()
const emits = defineEmits<IToDoEmits>()

</script>