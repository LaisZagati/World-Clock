function updateTime() {
  // Los Angeles
  let miamiElement = document.querySelector("#miami");
  if (miamiElement) {
    let miamiDateElement = miamiElement.querySelector(".date");
    let miamiTimeElement = miamiElement.querySelector(".time");
    let miamiTime = moment().tz("America/New_York");

    miamiDateElement.innerHTML = miamiTime.format("MMMM	Do YYYY");
    miamiTimeElement.innerHTML = miamiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = dublinTime.format("MMMM	Do YYYY");
    dublinTimeElement.innerHTML = dublinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let saopauloElement = document.querySelector("#saopaulo");
  if (saopauloElement) {
    let saopauloDateElement = saopauloElement.querySelector(".date");
    let saopauloTimeElement = saopauloElement.querySelector(".time");
    let saopauloTime = moment().tz("Brazil/East");

    saopauloDateElement.innerHTML = saopauloTime.format("MMMM	Do YYYY");
    saopauloTimeElement.innerHTML = saopauloTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityTimeZone}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
           <div class="time">${cityTime.format(
             "h:mm:ss"
           )} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
