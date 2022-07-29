<template>
  <v-container grid-list-md class="cyan lighten-4">
    <v-row>
      <v-col light>
        <p class="display-1">{{ workout.title }}</p>
        <p>{{ workout.description }}</p>
        <v-divider class="black"></v-divider>
        <br />
        <p>{{ workout.content }}</p>
      </v-col> </v-row
    ><v-row
      ><v-col>
        <!-- <v-btn
          class="primary"
          v-if="canLoadWorkout(workout.id)"
          @click="loadWorkout(workout.id)"
          >Добавить в избранное</v-btn
        >
        <div v-if="getUserDataWorkout(workout.id)">
          <v-icon color="white">work_outline</v-icon>
          Добавлено в избранное {{ getWorkoutAddedDate(workout.id) }}
        </div> -->
      </v-col></v-row
    >
  </v-container>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    /* 'workout': {
      type: Object,
      required: true,
    }, */
  },
  /* data() {
    return {
      loading: false,
    };
  }, */
  computed: {
    workout() {
      return this.$store.getters.getWorkouts.find((b) => b.id == this.id);
    },
    ...mapGetters(["isUserAuthenticated", "userData", "getProcessing"]),
  },
  methods: {
    canLoadWorkout(workoutId) {
      let workout = this.getUserDataWorkout(workoutId);
      return this.isUserAuthenticated && !this.getProcessing && !workout;
    },
    getUserDataWorkout(workoutId) {
      return this.userData.workouts[workoutId];
    },
    loadWorkout(workoutId) {
      return this.$store.dispatch("add_user_workout", workoutId);
    },
    getWorkoutAddedDate(workoutId) {
      let workout = this.getUserDataWorkout(workoutId);
      return workout.addedDate.toLocaleDateString();
    },
  },
};
</script>