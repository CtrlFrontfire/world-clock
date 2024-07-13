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

  // Phoenix

  let phoenixElement = document.querySelector("#phoenix");
  let phoenixDateElement = phoenixElement.querySelector(".user-date");
  let phoenixTimeElement = phoenixElement.querySelector(".user-time");
  let phoenixTime = moment().tz(`America/Phoenix`);

  phoenixDateElement.innerHTML = phoenixTime.format("ddd Do MMM YYYY");
  phoenixTimeElement.innerHTML = phoenixTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

function updateSelectionCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let userCityElement = document.querySelector("#user-city-selection");
  userCityElement.innerHTML = `
  <div class="user-city">
    <div>
      <h2>${cityName}</h2>
      <div class="user-date">${cityTime.format("ddd Do MMM YYYY")}</div>
    </div>
    <div class="user-time" id="user-time">${cityTime.format(
      "hh:mm:ss"
    )}<small>${cityTime.format("A")}</small></div>
  </div>
  <a href="/" class="return-to-select-link">Select another city...</ a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let userCitySelectElement = document.querySelector("#city");
userCitySelectElement.addEventListener("change", updateSelectionCity);
