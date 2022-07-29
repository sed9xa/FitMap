<template>
  <li>
    {{ todo.textMeal }} {{todo.textCalories}}ккал 
    <v-icon @click="$emit('remove', todo.id)" color="red">
      remove
    </v-icon>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>