/* import { set } from 'core-js/fn/dict'; */
/* import firebase from "firebase"; */
import Vue from "vue";

export default {
  state: {
    workouts: [],
    /* workouts: [
      {
        id: "100",
        title: "Программа тренировок для новичков",
        description:
          "Данный примерный план рассчитан новичков среднего или худого телосложения, занимающихся в тренажерном зале 3 раза в неделю.",
        imageId: "../img/6-Week-Beginners-Multi-Gym-Workout-Plan.jpg",
        level: "Легкая",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, autem. Sit molestiae ab porro aut ipsam. Ad esse vitae, nostrum inventore quas, nemo, temporibus ducimus iure hic perspiciatis sit sequi dignissimos? Architecto voluptatum quae eos aspernatur quo repellat accusamus modi eligendi placeat mollitia nam et fuga, eaque at nobis a facilis natus earum consequuntur cupiditate blanditiis. Aliquam illo ipsa minima aliquid provident excepturi assumenda, eos ea necessitatibus nihil molestias nulla ipsum odit error at obcaecati voluptatibus quas fuga atque quidem. Eos odit iure consequatur quod, obcaecati dolore esse nesciunt facilis, alias fugit ipsum sapiente dolorum impedit cumque perspiciatis, nihil fugiat tempora doloribus quibusdam. Deserunt magni nulla, eum officia consectetur eveniet numquam debitis dolorum asperiores ratione illo praesentium rem veniam fugit animi porro aliquam, qui similique corporis beatae fuga atque. Quibusdam, dignissimos error! Enim, est? Quia optio fuga excepturi doloribus, dicta perferendis, eaque aliquid dolorum ea voluptas maiores accusamus velit neque repudiandae! Libero ullam officia voluptatem repellendus voluptatibus eaque suscipit ipsum voluptas! Cupiditate atque repellendus nostrum quisquam sapiente, magni veniam nemo voluptas rerum quo unde amet sunt necessitatibus culpa molestias doloremque hic laudantium incidunt enim eveniet delectus repellat omnis! Dolorem maxime perspiciatis tenetur, quidem eius exercitationem. Asperiores, dolore adipisci? Quos, ab?",
      },
      {
        id: "101",
        title: "Грудь и спина",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quis delectus rem provident quod ipsam voluptatibus placeat aliquam nemo accusamus? Vitae, delectus nostrum? Fugiat harum rem reiciendis eveniet saepe autem.",
        imageId: "",
        level: "Средняя",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, autem. Sit molestiae ab porro aut ipsam. Ad esse vitae, nostrum inventore quas, nemo, temporibus ducimus iure hic perspiciatis sit sequi dignissimos? Architecto voluptatum quae eos aspernatur quo repellat accusamus modi eligendi placeat mollitia nam et fuga, eaque at nobis a facilis natus earum consequuntur cupiditate blanditiis. Aliquam illo ipsa minima aliquid provident excepturi assumenda, eos ea necessitatibus nihil molestias nulla ipsum odit error at obcaecati voluptatibus quas fuga atque quidem. Eos odit iure consequatur quod, obcaecati dolore esse nesciunt facilis, alias fugit ipsum sapiente dolorum impedit cumque perspiciatis, nihil fugiat tempora doloribus quibusdam. Deserunt magni nulla, eum officia consectetur eveniet numquam debitis dolorum asperiores ratione illo praesentium rem veniam fugit animi porro aliquam, qui similique corporis beatae fuga atque. Quibusdam, dignissimos error! Enim, est? Quia optio fuga excepturi doloribus, dicta perferendis, eaque aliquid dolorum ea voluptas maiores accusamus velit neque repudiandae! Libero ullam officia voluptatem repellendus voluptatibus eaque suscipit ipsum voluptas! Cupiditate atque repellendus nostrum quisquam sapiente, magni veniam nemo voluptas rerum quo unde amet sunt necessitatibus culpa molestias doloremque hic laudantium incidunt enim eveniet delectus repellat omnis! Dolorem maxime perspiciatis tenetur, quidem eius exercitationem. Asperiores, dolore adipisci? Quos, ab?",
      },
      {
        id: "102",
        title: "Руки",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quis delectus rem provident quod ipsam voluptatibus placeat aliquam nemo accusamus? Vitae, delectus nostrum? Fugiat harum rem reiciendis eveniet saepe autem.",
        imageId: "",
        level: "Тяжелая",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, autem. Sit molestiae ab porro aut ipsam. Ad esse vitae, nostrum inventore quas, nemo, temporibus ducimus iure hic perspiciatis sit sequi dignissimos? Architecto voluptatum quae eos aspernatur quo repellat accusamus modi eligendi placeat mollitia nam et fuga, eaque at nobis a facilis natus earum consequuntur cupiditate blanditiis. Aliquam illo ipsa minima aliquid provident excepturi assumenda, eos ea necessitatibus nihil molestias nulla ipsum odit error at obcaecati voluptatibus quas fuga atque quidem. Eos odit iure consequatur quod, obcaecati dolore esse nesciunt facilis, alias fugit ipsum sapiente dolorum impedit cumque perspiciatis, nihil fugiat tempora doloribus quibusdam. Deserunt magni nulla, eum officia consectetur eveniet numquam debitis dolorum asperiores ratione illo praesentium rem veniam fugit animi porro aliquam, qui similique corporis beatae fuga atque. Quibusdam, dignissimos error! Enim, est? Quia optio fuga excepturi doloribus, dicta perferendis, eaque aliquid dolorum ea voluptas maiores accusamus velit neque repudiandae! Libero ullam officia voluptatem repellendus voluptatibus eaque suscipit ipsum voluptas! Cupiditate atque repellendus nostrum quisquam sapiente, magni veniam nemo voluptas rerum quo unde amet sunt necessitatibus culpa molestias doloremque hic laudantium incidunt enim eveniet delectus repellat omnis! Dolorem maxime perspiciatis tenetur, quidem eius exercitationem. Asperiores, dolore adipisci? Quos, ab?",
      },
      {
        id: "103",
        title: "Руки",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quis delectus rem provident quod ipsam voluptatibus placeat aliquam nemo accusamus? Vitae, delectus nostrum? Fugiat harum rem reiciendis eveniet saepe autem.",
        imageId: "",
        level: "Тяжелая",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, autem. Sit molestiae ab porro aut ipsam. Ad esse vitae, nostrum inventore quas, nemo, temporibus ducimus iure hic perspiciatis sit sequi dignissimos? Architecto voluptatum quae eos aspernatur quo repellat accusamus modi eligendi placeat mollitia nam et fuga, eaque at nobis a facilis natus earum consequuntur cupiditate blanditiis. Aliquam illo ipsa minima aliquid provident excepturi assumenda, eos ea necessitatibus nihil molestias nulla ipsum odit error at obcaecati voluptatibus quas fuga atque quidem. Eos odit iure consequatur quod, obcaecati dolore esse nesciunt facilis, alias fugit ipsum sapiente dolorum impedit cumque perspiciatis, nihil fugiat tempora doloribus quibusdam. Deserunt magni nulla, eum officia consectetur eveniet numquam debitis dolorum asperiores ratione illo praesentium rem veniam fugit animi porro aliquam, qui similique corporis beatae fuga atque. Quibusdam, dignissimos error! Enim, est? Quia optio fuga excepturi doloribus, dicta perferendis, eaque aliquid dolorum ea voluptas maiores accusamus velit neque repudiandae! Libero ullam officia voluptatem repellendus voluptatibus eaque suscipit ipsum voluptas! Cupiditate atque repellendus nostrum quisquam sapiente, magni veniam nemo voluptas rerum quo unde amet sunt necessitatibus culpa molestias doloremque hic laudantium incidunt enim eveniet delectus repellat omnis! Dolorem maxime perspiciatis tenetur, quidem eius exercitationem. Asperiores, dolore adipisci? Quos, ab?",
      },
    ], */
  },
  mutations: {
    set_workouts(state, payload) {
      state.workouts = payload;
    },
  },
  actions: {
    load_workouts({ commit }) {
      Vue.$db.collection("workouts")
      .get()
      .then(querySnapshot => {
        let workouts = []
        querySnapshot.forEach(s =>{
          const data = s.data()
          let workout = {
            id: s.id,
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl,
            level: data.level,
            content: data.content,
          }

          workouts.push(workout)
        })

        commit('set_workouts', workouts)
      })
      .catch(error=> console.log(error))
    },
  },
  getters: {
    getWorkouts: (state) => state.workouts,
  },
};
