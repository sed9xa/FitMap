<template>
  <div>
    <div class="welcome">
      <div class="container">
        <div class="welcome-inner">
          <div class="welcome__content">
            <h1 class="welcome__content-header">Добро пожаловать в FitMap</h1>
            <div class="welcome__content-text">
              Для тех, кто хочет стать лучше
            </div>
          </div>
          <img src="../img/mw3.png" alt="" class="welcome__img" />
        </div>
      </div>
    </div>
    <div class="promo">
      <div class="container">
        <div class="promo__inner">
          <img src="../img/girl3.png" alt="" class="promo__img" />
          <div class="promo__content">
            <h2 class="promo__content-header">
              Занимайтесь спортом, не выходя из дома
            </h2>
            <div class="promo__content-text">
              Наше приложение - это легкий способ держать себя в форме.
              Используйте счетчик каллорий, просматривайте программы тренировок
              и отслеживайте прогресс абсолютно бесплатно.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="description">
      <div class="container">
          <h1 class="description-header">Возможности приложения</h1>
        <div class="description-blocks">
          <div class="calories description-block">
            <div class="description-block__header">
              <h1>Калькулятор калорий</h1>
            </div>
            <div class="description-block__text">
              <p>
                Простой и удобный счетчик калорий. Добавляйте свои блюда,
                рачитывайте калорийность вашего суточного рациона и отслеживайте
                статистику
              </p>
            </div>
          </div>
          <div class="workouts description-block">
            <div class="description-block__header">
              <h1>Список тренировок</h1>
            </div>
            <div class="description-block__text">
              <p>
                Просматривайте различные программы тренировок, выполняйте поиск
                по ключевым словам. У каждой программы указан уровень сложности.
              </p>
            </div>
          </div>
          <div class="diary description-block">
            <div class="description-block__header last">
              <h1>Статистика</h1>
            </div>
            <div class="description-block__text">
              <p>
                Отслеживайте прогресс в личном кабинете, приложение собирает
                данные, введенные пользователем, и автоматически составляет
                статистику. А также расчитывает оптимальный вес и суточную норму
                калорий для каждого пользователя.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.welcome {
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #738fff 0,
    #276ff6 50%,
    #0052dc 100%
  );
}
.container {
  padding: 0;
}
.welcome-inner {
  display: flex;
  justify-content: space-around;
}
.welcome__content {
  color: white;
  align-self: center;
  padding-bottom: 40px;
}
.welcome__content-header {
  font-size: 35px;
}
.welcome__content-text {
  font-size: 20px;
}

.promo__img {
  height: 700px;
}
.promo {
}
.promo__inner {
  display: flex;
  justify-content: space-around;
}
.promo__content {
  align-self: center;
  padding-bottom: 40px;
  width: 50%;
}
.promo__content-header {
  font-size: 35px;
  border-bottom: 1px solid #000;
  padding-bottom: 15px;
  margin-bottom: 10px;
}
.promo__content-text {
  font-size: 20px;
}

.description {
  padding-top: 50px;
  padding-bottom: 100px;
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #738fff 0,
    #276ff6 50%,
    #0052dc 100%
  );
}

.description-block {
  width: 300px;
  background-color: #fff;
  height: 400px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  color: #424242;
  border-radius: 10px;
  margin-right: 20px;
  box-shadow: #BDBDBD 0px 0px 10px 2px;
}
.description-block__text {
  padding: 0 10px;
}
.description-blocks {
  display: flex;
  justify-content: space-around;
}

.description-header {
  font-size: 35px;
  color: white;
  line-height: 45px;
  text-align: center;
  padding-bottom: 40px;
}

.description-block__header {
  font-size: 17px;
  margin-bottom: 20px;
  line-height: 35px;
  border-bottom: 1px solid #424242;
  text-align: center;
  padding-bottom: 15px;
}

.last {
  padding-bottom: 35px;
  padding-top: 15px;
}

@media (max-width: 1250px) {
  .description-blocks {
    flex-direction: column;
    width: 400px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
  }
  .description-block {
    margin-bottom: 40px;
  }

  .description-header {
    margin-top: 30px;
    margin-bottom: 40px;
  }
}

@media (max-width: 900px) {
  .welcome__img {
    display: none;
  }
  .promo__img {
    display: none;
  }
  .welcome {
    height: 100vh;
  }
  .promo {
    height: 60vh;
  }
  .promo__content {
    width: 70%;
  }
  .promo__inner {
    padding-top: 100px;
  }
  .container {
    height: 100%;
  }
  .welcome-inner {
    height: 80%;
  }
}
</style>
