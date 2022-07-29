<template>
  <v-container grid-list-md>
    <v-row wrap>
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field label="Поиск" v-model="searchTerm"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" v-for="workout in filteredWorkouts" :key="workout.id">
        <v-card color="info" class="white--text">
          <v-container fluid>
            <v-row>
              <v-col cols="12" md="4" sm="6">
                <v-img
                  :src="workout.imageUrl"
                ></v-img>
              </v-col>
              <v-col xs8 md9>
                <v-card-title>
                  <div>
                    <div class="headline">{{ workout.title }}</div>
                    <div>{{ workout.description }}</div>
                    <v-divider class="white"></v-divider>
                    <div>Уровень: {{ workout.level }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                    class="primary"
                    text
                    :to="{ name: 'workout', params: { id: workout.id } }"
                    >Открыть</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: null,
    };
  },
  computed: {
    workouts() {
      return this.$store.getters.getWorkouts;
    },
    filteredWorkouts() {
      let workouts = this.workouts;
      if (this.searchTerm)
        workouts = workouts.filter(
          (b) =>
            b.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0 ||
            b.description
              .toLowerCase()
              .indexOf(this.searchTerm.toLowerCase()) >= 0 ||
            b.level.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0
        );

      return workouts;
    },
  },
};
</script>