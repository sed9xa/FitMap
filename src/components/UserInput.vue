<template>
  <v-container>
    <v-text-field id="rise" label="Рост" type="number"></v-text-field>

    <v-text-field id="weight" label="Вес" type="number"></v-text-field>

    <v-text-field id="age" label="Пол" type="number"></v-text-field>

    <v-select
      persistent-hint
      return-object
      single-line
      v-model="selectedGender"
      id="gender"
      :items="genders"
      label="Пол"
      item-text="Name"
    ></v-select>

    <p id="conclution">Норма каллорий на день  </p>
    <v-btn @click="calculate()">Посчитать</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      genders: [
        { value: "Мужской", Name: "Мужской" },
        { value: "Женский", Name: "Женский" },
      ],
    };
  },
  methods: {
    calculate() {
      document.getElementById("conclution").innerHTML =
        "Ваша дневная норма калорий  ";
      let bmr;
      let rise = Number(document.getElementById("rise").value);
      let age = Number(document.getElementById("age").value);
      let weight = Number(document.getElementById("weight").value);
      let gender = this.selectedGender.value;
        if (gender == "Мужской") {
          bmr = 88.36 + 13.4 * weight + 4.8 * rise - 5.7 * age;
        } else if (gender == "Женский") {
          bmr = 447.6 + 9.2 * weight + 3.1 * rise - 4.3 * age;
        }
        document.getElementById("conclution").innerHTML += Math.ceil(bmr);
    },
  },
};
</script>