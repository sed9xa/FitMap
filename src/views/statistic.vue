<template>
  <div id="app">
    <v-container
      ><h1>Калькулятор</h1>
      <v-row>
        <v-col cols="6" ><TodoList /></v-col>
        <v-col cols="6" ><UserInput /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
import UserInput from "../components/UserInput.vue";


export default {
  components: {
    TodoList,
    UserInput
  },
};
</script>