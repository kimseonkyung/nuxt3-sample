<template>
  <div class="main-todo">
    현재 시간 : {{ now }}
    <br/>
    <div>총 회원수 : {{ getTodoList.total }}</div>
    <hr />

    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in getTodoList.value" :key="`todo_${todo.id}`">
          <td>{{ todo.name }}</td>
          <td>{{ todo.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoListStore } from '@/stores/todoList'
import { TodoList } from '@/types'
import { format } from '@/libs/date-time'

const todoListStore = useTodoListStore()
const { getTodoList } = storeToRefs(todoListStore) // 반응형
const now = ref(format(new Date()))

onMounted(async () => {

  const list = ref<TodoList[]>([
    {
      id: 1,
      name: '홍길동',
      age: 20
    },
    {
      id: 2,
      name: '김철수',
      age: 30
    },
    {
      id: 3,
      name: '김영희',
      age: 22
    }
  ])

  todoListStore.setTodoList.reset()
  todoListStore.setTodoList.value(list.value)
})
</script>

<style lang="scss" scoped>
.main-todo {
}

@media screen and (min-width: 768px) {
  .main-todo {
    div {
      @include txt-display1;
    }
  }
}
</style>
