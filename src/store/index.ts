import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: [
      {
        id: 0,
        title: 'Go to shop ',
        isChecked: false,
        edit: false
      },
      {
        id: 1,
        title: 'Finish java assignment',
        isChecked: false,
        edit: false
      },
      {
        id: 2,
        title: 'Send e-email to Dr. Colins',
        isChecked: false,
        edit: false
      },
      {
        id: 3,
        title: 'Delete all folders in ../assets/plugins',
        isChecked: false,
        edit: false
      },
      {
        id: 4,
        title: 'Sell iPad Mini',
        isChecked: false,
        edit: false
      },
      {
        id: 5,
        title: 'Create new Amazon Account',
        isChecked: false,
        edit: false
      },
      {
        id: 6,
        title: 'Check new codes from section *7 student assignments',
        isChecked: false,
        edit: false
      }
    ]
  },
  getters: {
    
    /* get todo list data function */
    getTodoList(state) {
      return state.todoList
    },
  },
  mutations: {

    /* add item in todo list logic function */
    SET_ITEM_TODO_LIST(state, payload) {
      state.todoList.push(payload)
    },

    /* remove item from todo list logic function */
    REMOVE_ITEM_TODO_LIST(state, payload) {
      state.todoList.splice(payload, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
