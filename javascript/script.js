function updateTime() {
  // Los Angeles
  let miamiElement = document.querySelector("#miami");
  if (miamiElement) {
    let miamiDateElement = miamiElement.querySelector(".date");
    let miamiTimeElement = miamiElement.querySelector(".time");
    let miamiTime = moment().tz("America/Miami");

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

updateTime();
setInterval(updateTime, 1000);
