function sjow(){
   let p = document.querySelector(".city");
   let q= document.querySelector("#search-but");
   p.innerHTML=`${q.value}`;
   let now = new Date();
   let x = now.getDay();
   let days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
   ];
   let a = days[x];
   let y = now.getHours();
   let z = now.getMinutes();
   let r = document.querySelector(".time");
   r.innerHTML=`${a} ${y}:${z}`;
   axios.get(`${apiUrl}?q=${q.value}&appid=${apiKey}&units=metric`).then(sjd);
}
function sjd(response) {
  console.log(response.data.main.temp);
  let h = document.querySelector(".temp");
  let k = Math.round(response.data.main.temp);
  h.innerHTML = `${k}°C`;
  console.log(response.data);
   let lmo = document.querySelector(".sw");
   lmo.innerHTML=`${response.data.weather[0].description}`;
   console.log(response.data);
    let log = document.querySelector(".hes");
    log.innerHTML = `Humidity: ${response.data.main.humidity}%`;
     let lg = document.querySelector(".hek");
     lg.innerHTML = `WindSpeed: ${response.data.wind.speed} km/h`;
}

let apiKey = "7d8dea017dfa21f3db39b33bb85df077";
let apiUrl ="https://api.openweathermap.org/data/2.5/weather";
let but = document.querySelector("button");
but.addEventListener("click",sjow);

