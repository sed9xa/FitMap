<template>
  <v-card class="mx-auto">
    <v-card-title class="profiledata">
      <div class="userdata">
        <div class="block">
          <h3><v-icon>person</v-icon> {{ userName }}</h3>
          <v-icon>edit</v-icon>
        </div>
        <div class="block">
          <h3><v-icon>email</v-icon> {{ userEmail }}</h3>
          <v-icon>edit</v-icon>
        </div>
        <div class="block">
          <h3><v-icon>monitor_weight</v-icon> 70 кг</h3>
          <v-icon>edit</v-icon>
        </div>
        <div class="block">
          <h3><v-icon>height</v-icon> 175 см</h3>
          <v-icon>edit</v-icon>
        </div>
        <div class="block">
          <h3><v-icon>elderly</v-icon> 21</h3>
          <v-icon>edit</v-icon>
        </div>
        <div class="block">
          <h3><v-icon>male</v-icon> Мужской</h3>
          <v-icon>edit</v-icon>
        </div>
      </div>
      <div class="standarts">
        <h3>Ваша дневная норма калорий 2402</h3>
        <h3>Ваш оптимальный вес 63-77 кг</h3>
      </div>
    </v-card-title>
    <v-card-subtitle class="pb-0"> </v-card-subtitle>

    <v-card-text class="text--primary">
      <div></div>

      <div></div>
    </v-card-text>

    <!--     <v-card-actions>
        <v-spacer></v-spacer>
      <v-btn color="orange" text> Изменить данные</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userName", "userEmail"]),
  },
};
</script>


<style scoped>
.profiledata{
  display: flex;
  justify-content: space-between;
}

h3 {
  margin-bottom: 10px;
}

.buttons{
  margin-top: 100px;
}
.right{
  margin-left: 10px;
}

.block {
  display: flex;
  width: 300px;
  justify-content: space-between;
}
</style>