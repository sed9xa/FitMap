<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Зарегистрироваться</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-alert :value="error" type="warning"> {{ error }} </v-alert>
                <v-form>
                  <v-text-field
                    prepend-icon="email"
                    name="login"
                    label="Login"
                    type="text"
                    required
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    required
                    v-model="password"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="person"
                    name="name"
                    label="Имя"
                    type="text"
                    required
                    v-model="name"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="monitor_weight"
                    name="weight"
                    label="Вес"
                    type="text"
                    required
                    v-model="weight"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="height"
                    name="height"
                    label="Рост"
                    type="text"
                    required
                    v-model="height"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="elderly"
                    name="age"
                    label="Возраст"
                    type="text"
                    required
                    v-model="age"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="male"
                    name="gender"
                    label="Пол"
                    type="text"
                    required
                    v-model="gender"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="signup" :disabled ="processing"
                  >Зарегистрироваться</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  computed:{
      error(){
          return this.$store.getters.getError
      },
      processing(){
          return this.$store.getters.getProcessing
      },
      isUserAuthenticated(){
          return this.$store.getters.isUserAuthenticated
      },
  },
  watch:{
      isUserAuthenticated(val){
          if(val ===true)
          this.$router.push("/")
      }
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
    },
  },
};
</script>