function updateHeading(newHeading) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = newHeading;
}

function welcome() {
  let city = prompt("What city do you live in?");
  let temp = prompt("What temperature is it?");

  if (temp <= -1) {
    updateHeading(`☹<br>Currently ${temp}°C in ${city}`);
  } else {
    updateHeading(`😀<br>Currently ${temp}°C in ${city}`);
  }
}

let changeCity = document.querySelector("button");
changeCity.addEventListener("click", welcome);
