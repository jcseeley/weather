export default class WeatherService {  
  static getWeather(city) {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}

//     return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json();
//       })
//       .catch(function(error) {
//         return error;
//       })
//   }
// }

    // return new Promise(function(resolve, reject) {
      //       let request = new XMLHttpRequest();
      //       const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
      //       request.onload = function() {
      //         if (this.status === 200) {
      //           resolve(request.response);
      //         } else {
      //           reject(request.response);
      //         }
      //       };
      //       request.open("GET", url, true);
      //       request.send();
      //     });
      //   }
      // }