import { stat } from "fs";

export const state = () => ({
  todos: [],
  api: "http://localhost:3000/front"
})

export const mutations = {
  setTotods(state, todos) {
    state.todos = todos
  },
  addTodos(state, obj) {
    state.todos.push(obj)
  },
  deleteTodos(state, index: number) {
    state.todos.splice(index, 1)
  },
  modifyTodos(state, arr: Array<any>) {
    // let temp = state.todos[index];
    state.todos[arr[0]][arr[1]] = arr[2];
    console.log(state.todos[arr[0]][arr[1]])
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const todos = await app.$axios.$get(
      "http://localhost:3000/front"
    )
    commit("setTotods", todos)
  }
}
