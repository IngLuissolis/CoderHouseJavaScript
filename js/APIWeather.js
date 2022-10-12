APIWeatherService = () => {
  try {
    fetch(
        "https://api.weatherapi.com/v1/current.json?key=61f6247d9bcf4ae7977184255221210&q=Qatar&aqi=no"
      )
        .then((response) => response.json())
        .then((response) => {
          document.getElementById("imgWeatherIcon").src =
            response.current.condition.icon;
          document.getElementById("imgWeatherIcon").style.display = "block";
          document.getElementById("WeatherCity").innerHTML =
            response.location.name + " - " + response.location.country;
          document.getElementById("WeatherTemp").innerHTML =
            "Temp: " + response.current.temp_c + " °C";
          var ultimaActualizacion = new Date(
            response.current.last_updated_epoch * 1000
          );
          document.getElementById("WeatherTime").innerHTML =
            "Ultima Actualización: " +
            ultimaActualizacion.getHours() +
            ":" +
            String(ultimaActualizacion.getMinutes()).padStart(2, "0");
        })
    console.log("Respuesta OK WeatherAPI")
    
  } catch (error) {
    console.error("Error: ", error);
  }
};
  // fetch(
  //   "https://api.weatherapi.com/v1/current.json?key=61f6247d9bcf4ae7977184255221210&q=Qatar&aqi=no"
  // )
  //   .then((response) => response.json())
  //   .then((response) => {
  //     document.getElementById("imgWeatherIcon").src =
  //       response.current.condition.icon;
  //     document.getElementById("imgWeatherIcon").style.display = "block";
  //     document.getElementById("WeatherCity").innerHTML =
  //       response.location.name + " - " + response.location.country;
  //     document.getElementById("WeatherTemp").innerHTML =
  //       "Temp: " + response.current.temp_c + " °C";
  //     var ultimaActualizacion = new Date(
  //       response.current.last_updated_epoch * 1000
  //     );
  //     document.getElementById("WeatherTime").innerHTML =
  //       "Ultima Actualización: " +
  //       ultimaActualizacion.getHours() +
  //       ":" +
  //       String(ultimaActualizacion.getMinutes()).padStart(2, "0");
  //   })
  //   .catch((err) => {
  //     console.error("Error ", err);
  //   });
// };

/**Llamada a funcion APIWeatherService*/
APIWeatherService();

/*Respuesta de WeatherAPI */
/*Response Body */
//   {
//     "location": {
//         "name": "Buenos Aires",
//         "region": "Distrito Federal",
//         "country": "Argentina",
//         "lat": -34.59,
//         "lon": -58.67,
//         "tz_id": "America/Argentina/Buenos_Aires",
//         "localtime_epoch": 1664737155,
//         "localtime": "2022-10-02 15:59"
//     },
//     "current": {
//         "last_updated_epoch": 1664736300,
//         "last_updated": "2022-10-02 15:45",
//         "temp_c": 22.0,
//         "temp_f": 71.6,
//         "is_day": 1,
//         "condition": {
//             "text": "Sunny",
//             "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
//             "code": 1000
//         },
//         "wind_mph": 5.6,
//         "wind_kph": 9.0,
//         "wind_degree": 20,
//         "wind_dir": "NNE",
//         "pressure_mb": 1021.0,
//         "pressure_in": 30.15,
//         "precip_mm": 0.0,
//         "precip_in": 0.0,
//         "humidity": 65,
//         "cloud": 0,
//         "feelslike_c": 22.5,
//         "feelslike_f": 72.5,
//         "vis_km": 10.0,
//         "vis_miles": 6.0,
//         "uv": 8.0,
//         "gust_mph": 3.6,
//         "gust_kph": 5.8
//     }
// }

/*Response Headers */
// {
//   "Transfer-Encoding": "chunked",
//   "Connection": "keep-alive",
//   "Vary": "Accept-Encoding",
//   "CDN-PullZone": "93447",
//   "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
//   "CDN-RequestCountryCode": "GB",
//   "CDN-ProxyVer": "1.02",
//   "CDN-RequestPullSuccess": "True",
//   "CDN-RequestPullCode": "200",
//   "CDN-CachedAt": "10/02/2022 18:59:15",
//   "CDN-EdgeStorageId": "947",
//   "CDN-Status": "200",
//   "CDN-RequestId": "0bb10ab9b569c432ba709752c37f52af",
//   "CDN-Cache": "EXPIRED",
//   "Cache-Control": "public, max-age=180",
//   "Content-Type": "application/json",
//   "Date": "Sun, 02 Oct 2022 18:59:15 GMT",
//   "Server": "BunnyCDN-FR-947"
// }

/*Fetch utilizando libreria jquery */
//   APIWeatherService = () => {
//     fetch('https://api.weatherapi.com/v1/current.json?key=98b904deb7bb443b992141315220210&q=Qatar&aqi=no')
//       .then((response) => response.json())
//       .then((response) => {
//         $('#imgWeatherIcon').attr('src', response.current.condition.icon)
//         $('#imgWeatherIcon').show()
//         $('#WeatherCity').html(response.location.name)
//         $('#WeatherTemp').html("Temp: "+response.current.temp_c+' °C')
//       })
//       .catch((err) => {
//         console.error("Error ",err)
//       })
// };
