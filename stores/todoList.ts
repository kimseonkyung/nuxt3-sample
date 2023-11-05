import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { TodoList } from '@/types'

export const useTodoListStore = defineStore('todoList', () => {
  const todoList = ref<TodoList[]>([])

  const setTodoList = {
    value(arr: TodoList[]): void {
      todoList.value.push(...arr)
    },
    reset(): void {
      todoList.value = []
    }
  }

  const getTodoList = computed(() => ({
    value: todoList.value,
    total: todoList.value.length
  }))

  return { setTodoList, getTodoList }
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useTodoListStore, import.meta.hot))
// }
