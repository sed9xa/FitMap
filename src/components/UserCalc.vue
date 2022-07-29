<template>
  <div>
    <p>Сумма каллорий</p>
  </div>
</template>

<script>
export default {
  methods: {
    summCalories() {
      let summ = 0;
      for (let i; i < this.todos.length; i++) {
        summ += this.todos[i].textCalories;
      }
      return summ;
    },
  },
};
</script>