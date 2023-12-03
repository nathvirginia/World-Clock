function updateTime() {
  //chicago
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let momentNowChicago = moment().tz("America/Chicago");

  chicagoDateElement.innerHTML = momentNowChicago.format("LL");
  chicagoTimeElement.innerHTML = momentNowChicago.format(
    `h:mm:ss [<span class="small">] A [</span>]`
  );

  //toronto
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  let momentNowToronto = moment().tz("America/Toronto");

  torontoDateElement.innerHTML = momentNowToronto.format("LL");
  torontoTimeElement.innerHTML = momentNowToronto.format(
    `h:mm:ss [<span class="small">] A [</span>]`
  );

  //recife
  let recifeElement = document.querySelector("#recife");
  let recifeDateElement = recifeElement.querySelector(".date");
  let recifeTimeElement = recifeElement.querySelector(".time");
  let momentNowRecife = moment().tz("America/Recife");

  recifeDateElement.innerHTML = momentNowRecife.format("LL");
  recifeTimeElement.innerHTML = momentNowRecife.format(
    `h:mm:ss [<span class="small">] A [</span>]`
  );

  //serbia
  let belgradeElement = document.querySelector("#serbia");
  let belgradeDateElement = belgradeElement.querySelector(".date");
  let belgradeTimeElement = belgradeElement.querySelector(".time");
  let momentNowBelgrade = moment().tz("Europe/Belgrade");

  belgradeDateElement.innerHTML = momentNowBelgrade.format("LL");
  belgradeTimeElement.innerHTML = momentNowBelgrade.format(
    `h:mm:ss [<span class="small">] A [</span>]`
  );
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = event.target.options[event.target.selectedIndex].text;
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("LL")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<span class="small"> ${cityTime.format("A")} </span></div>
        </div>
  `;
}

let selectCityElement = document.querySelector("#select-city");

selectCityElement.addEventListener("change", updateCity);
