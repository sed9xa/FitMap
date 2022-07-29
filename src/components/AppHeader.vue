<template>
  <div>
    <v-navigation-drawer
      absolute
      temporary
      v-model="drawer"
      class="hidden-md-and-up"
    >
      <v-list>
        <v-list-item v-for="(item, i) in menuItems" :key="`navdrawer${i}`">
          <v-list-item-action>
            <v-icon>{{ item.icon }} </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark app class="primary">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <router-link tag="span" to="/" style="cursor: pointer"
        ><v-toolbar-title v-text="'FitMap'"></v-toolbar-title
      ></router-link>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(item, i) in menuItems"
          :key="`menuitem${i}`"
          :to="item.route"
        >
          <v-icon left v-html="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn text @click.prevent="signout" v-if="isUserAuthenticated">
          <v-icon left>exit_to_app</v-icon>
          Выйти
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    menuItems() {
      return this.isUserAuthenticated
        ? [
            {
              title: "Личный кабинет",
              route: "/diary",
              icon: "done",
            },
            {
              title: "Тренировки",
              route: "/workouts",
              icon: "article",
            },
            {
              title: "Калькулятор",
              route: "/statistic",
              icon: "timeline",
            },
          ]
        : [
            {
              title: "Вход",
              route: "/signin",
              icon: "exit_to_app",
            },
            {
              title: "Зарегистрироваться",
              route: "/signup",
              icon: "lock_open",
            },
          ];
    },
  },
  methods: {
    signout() {
      this.$store.dispatch("signout");
    },
  },
};
</script>

<style scoped>
</style>