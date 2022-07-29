<template>
  <div>
    <div class="promo">
      <div class="container">
        <div class="promo__header">
          <h1>Добро пожаловать в FitMap</h1>
        </div>
        <div class="promo__text">
          <p>
            Для людей, заитересованных своим здоровьем и желающих
            совершенствоваться
          </p>
        </div>
        <div>
          <img class="promo__img" src="../img/mw3.png" alt="Pic" />
        </div>
      </div>
    </div>
    <div class="welcome">
      <div class="container">
        <div class="welcome__text-block">
          <div class="welcome__header">
            <h1>Занимайтесь спортом, не выходя из дома</h1>
          </div>
          <div class="welcome__text">
            <p>
              Наше приложение - это легкий способ держать себя в форме.
              Используйте счетчик каллорий, просматривайте программы тренировок
              и отслеживайте прогресс абсолютно бесплатно.
            </p>
          </div>
          <div>
            <img class="welcome__img" src="../img/girl3.png" alt="Pic" />
          </div>
        </div>
      </div>
    </div>
    <div class="description">
      <div class="container">
        <div class="description-blocks">
          <div class="description-header">
            <h1>Возможности приложения</h1>
          </div>
          <div class="calories description-block">
            <div class="description-block__header">
              <h1>Калькулятор калорий</h1>
            </div>
            <div class="description-block__text">
              <p>Простой и удобный счетчик калорий. Добавляйте свои блюда, рачитывайте калорийность вашего суточного рациона и отслеживайте статистику</p>
            </div>
          </div>
          <div class="workouts description-block">
            <div class="description-block__header">
              <h1>Список тренировок</h1>
            </div>
            <div class="description-block__text">
              <p>Просматривайте различные программы тренировок, выполняйте поиск по ключевым словам. У каждой программы указан уровень сложности.</p>
            </div>
          </div>
          <div class="diary description-block">
            <div class="description-block__header">
              <h1>Статистика</h1>
            </div>
            <div class="description-block__text">
              <p>Отслеживайте прогресс в личном кабинете, приложение собирает данные, введенные пользователем, и автоматически составляет статистику. А также расчитывает оптимальный вес и суточную норму калорий для каждого пользователя.</p>
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
.promo {
  height: 700px;
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #738fff 0,
    #276ff6 50%,
    #0052dc 100%
  );
}
.promo__header {
  color: white;
  font-size: 25px;
  margin-top: 250px;
}

.promo__text {
  color: white;
  font-size: 20px;
}

.promo__img {
  position: absolute;
  left: 1000px;
  top: 0px;
  height: 700px;
}

.welcome {
  height: 700px;
}
.welcome__header {
  font-size: 25px;
  margin-top: 250px;
}

.welcome__text {
  font-size: 20px;
}

.welcome__text-block {
  float: right;
  width: 1100px;
}

.welcome__img {
  position: absolute;
  left: 100px;
  top: 700px;
  height: 700px;
}

.description {
  height: 700px;
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
  color: #0f3861;
}

.description-blocks {
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
}

.description-header {
  font-size: 20px;
  margin-top: 100px;
  color: white;
  width: 300px;
}

.description-block__header{
  font-size: 12px;
  margin-bottom: 20px;
}


</style>
