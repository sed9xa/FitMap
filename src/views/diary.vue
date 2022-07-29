<template>
  <v-container grid-list-md>
    <v-row wrap>
      <v-col>
        <v-tabs
          v-model="tabMode"
          color="white"
          background-color="deep-purple accent-1"
          fixed-tabs
          slider-color="yellow lighten-3"
          slider-size="3"
        >
          <v-tab :key="'mydata'" v-ripple>Мои данные</v-tab>
          <v-tab-item :key="'data'"
            ><user-profile-data></user-profile-data>
            
            </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import userProfileData from '../components/UserProfileData'
export default {
  data() {
    return {
      tabMode: "data",
    };
  },
  components:{
      userProfileData,
  }
};
</script>