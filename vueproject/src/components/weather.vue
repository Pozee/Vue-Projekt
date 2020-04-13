<template>
  <div>
    <button @click="getWeather">Get weather</button>
    <div class="center">
      <div class="weather-wrapper" v-if="model">
        <div class="weather-info">
          <p class="location">{{ model.location }}</p>
          <p class="temp">{{ model.temperature }}°C</p>
        </div>
        <div class="img-wrapper">
          <img :src="this.iconSrc" alt="Weather image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const WeatherUrl = "https://api.weatherbit.io/v2.0/current";
const key = "d79c052c7b1e4e17a32efba7e6771a45";
export default {
  data: () => ({
    model: null,
    iconSrc: null
  }),
  methods: {
    async getWeather() {
      try {
        let response = await this.$http.get(WeatherUrl, {
          params: { city: "göteborg", key: key }
        });
        console.log(response.data.data[0]);
        this.model = {
          time: response.data.data[0].datetime,
          temperature: Math.round(response.data.data[0].app_temp),
          location: response.data.data[0].city_name,
          iconCode: response.data.data[0].weather.icon
        };
        this.iconSrc = `https://www.weatherbit.io/static/img/icons/${this.model.iconCode}.png`;
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }
  }
};
</script>

<style scoped>
.weather-wrapper {
  width: 20em;
  margin-top: 1em;
  display: flex;
  justify-content: center;
}
.weather-info {
  display: flex;
  padding: 0.5em;
  margin-top: -1em;
  justify-content: center;
  flex-direction: column;
}
div > p {
  margin: 0;
  margin-right: 0.5em;
}
.center {
  display: flex;
  justify-content: center;
}
.temp {
  margin-top: 0.2em;
  font-weight: 700;
  font-size: 1.5em;
}
.location {
  font-size: 1.5em;
}
</style>
