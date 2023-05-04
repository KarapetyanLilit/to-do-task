export interface ITodoListItem {
    id: number | string
    title?: string
    isChecked?: boolean
    edit?: boolean
}

export interface ITodoList {
    todo: Array<ITodoListItem>
}

export interface IToDo {
    todo: ITodoListItem
}

export interface IToDoEmits{
    (e: 'removeItem', id: number | string): void
}