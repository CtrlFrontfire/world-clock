function updateTime() {
  // New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz(`America/New_York`);

  newYorkDateElement.innerHTML = newYorkTime.format("ddd Do MMM YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz(`America/Los_Angeles`);

  losAngelesDateElement.innerHTML = losAngelesTime.format("ddd Do MMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz(`Asia/Tokyo`);

  tokyoDateElement.innerHTML = tokyoTime.format("ddd Do MMM YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Cairo
  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");
  let cairoTimeElement = cairoElement.querySelector(".time");
  let cairoTime = moment().tz(`Africa/Cairo`);

  cairoDateElement.innerHTML = cairoTime.format("ddd Do MMM YYYY");
  cairoTimeElement.innerHTML = cairoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let userCitySelectionElement = document.querySelector("#user-city-selection");
  userCitySelectionElement.innerHTML = `
  <div class="user-city">
      <div>
        <h2>${cityName}</h2>
        <div class="user-date">${cityTime.format("ddd Do MMMM YYYY")}</div>
      </div>
      <div class="user-time">${cityTime.format(
        "hh:mm:ss"
      )} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener(`change`, updateCity);
