fetch('https://api.openweathermap.org/data/2.5/weather?q=Zaporozhe,UA&appid=88d58c6fd9c63e17483c1b3d0957d287')
  .then(function (resp) {return resp.json() })
  .then(function (data) {
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.weather').textContent = data.weather[0]['description'];
    // https://openweathermap.org/img/wn/04d@2x.png
    document.querySelector('.icons').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  })
  .catch(function () {})