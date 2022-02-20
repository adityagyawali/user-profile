class Provider {

  /**

  * Gets the weather for a given city

  */

      static getWeather(city) {

          return Promise.resolve(`The weather of ${city} is Cloudy`)

      };

  /**

  * Gets the weather for a given city

  */

      static getLocalCurrency(city) {

          return Promise.resolve(`The local currency of ${city} is GBP`)

      };

  /*

  * ** Gets the weather and local currency for a given city

  */

      static getWeatherAndLocalCurrency(city) {

          return Promise.resolve(`The weather of ${city} is Cloudy and the local currency is GBP`)

      };

  /**

  * Given Longtitude and latitude, this function returns a city

  */

      static findCity(long, lat) {

          return Promise.resolve(`London`)

      };

  }
   // 1) Find and print in console the city located at latitude/longtitude 51.5074 and 0.1278 accordingly

  console.log(
      await Provider.findCity(51.5074, 0.1278)
  )

  // 2) Print in console the weather for the city located at lat/long = 51.5074 and 0.1278

  const city = await Provider.findCity(51.5074, 0.1278)
  const weatherOfTheCity = await Provider.getWeather(city)
  console.log(weatherOfTheCity)

  // Print in console in one line the weather and currency for a given city (London)
  console.log(
      await Provider.getWeatherAndLocalCurrency(city)
  )