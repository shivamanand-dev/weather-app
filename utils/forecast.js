const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/b4c116672bb90062c3cf3ed6171b5d07/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          ". It is currently " +
          response.body.currently.temperature +
          " degrees out. There is " +
          response.body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
