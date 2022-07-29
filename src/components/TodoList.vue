<template>
  <div>
    <v-btn
      @click="
        addTodo();
        summCalories();
      "
      >Добавить</v-btn
    >
    <BaseInputText v-model="newTodoText" @keydown.enter="addTodo" />
    <CaloriesInput v-model="newTodoTextCalories" @keydown.enter="addTodo" />
    <ul v-if="todos.length">
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>
    <p v-else>Пусто</p>
    <br />
    <p>Сумма каллорий</p>
    <input type="text" name="" id="result" value="">
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText.vue";
import TodoListItem from "./TodoListItem.vue";
import CaloriesInput from "./CaloriesInput.vue";

let nextTodoId = 1;

export default {
  components: {
    BaseInputText,
    TodoListItem,
    CaloriesInput,
  },
  data() {
    return {
      newTodoText: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      const trimmedTextCalories = this.newTodoTextCalories.trim();
      const trimmedText = this.newTodoText.trim();
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          textMeal: trimmedText,
          textCalories: trimmedTextCalories,
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== idToRemove;
      });
    },
    summCalories() {
      let summ = 0;
      this.todos.forEach((element) => {
        summ += +element.textCalories;
      });
      document.getElementById("result").value = summ;
      
    },
  },
};
</script>