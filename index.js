

//! https://api.openweathermap.org/data/2.5/weather?appid={API_KEY}&q={CITY_NAME}

// https://openweathermap.org/img/wn/01d@2x.png

let form = document.forms[0];
let cityname;
let article = document.querySelector("article");
// console.log(form.elements.cityname.value);

function fetchData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=1f7d84745801089eeee9f00b1f12c7c0&q=${city}`
  )
    .then(response => {
      response
        .json()
        .then(data => {
          let img = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

          console.log(data);
          article.innerHTML = `
                <div class="card-block">

                    <div class="top">
                        <h1>${data.name} </h1>
                        <h2>${data.sys.country}</h2>
                    </div>
                    <div class="upper-temp">${data.main.temp-271} °C</div>
                    <div class="left">
                    
                    <img class="img" src=${img}>
                    <h3>Description: ${data.weather[0].description}</h3>


                    </div>

                    <div class="right">
                       
                        <div class="temp">Temperature : ${data.main.temp-271}°C </div>
                        <div class="min">Min. Temperature : ${data.main.temp_min-271}°C</div>
                        <div class="max">Max. Temperature : ${data.main.temp_max-271}°C</div>
                        <div>Humidity : ${data.main.humidity}%</div>
                        <div>Pressure : ${data.main.pressure}hPa</div>
                        <div>Wind speed : ${data.wind.speed}m/s</div>

                        <div>Longitude : ${data.coord.lon}</div>
                        <div>Latitude : ${data.coord.lat}</div>
                    <div>





                </div>
              
              
              
              
              `;
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log("server responded");
    });
}
form.addEventListener("submit", e => {
  e.preventDefault();
  cityname = form.elements.cityname.value;
  fetchData(cityname);
});

fetchData(cityname);
