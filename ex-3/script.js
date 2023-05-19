const wsUrl = "wss://echo-ws-service.herokuapp.com/";

function pageLoaded() {

let input = document.querySelector(".input");
const btn = document.querySelector(".j-btn");
const btnGeo = document.querySelector(".j-geo");
const output = document.querySelector(".output");
const outputGeo = document.querySelector(".output-geo");
const chatWindow = document.querySelector(".chat-window");

webSocket = new WebSocket(wsUrl);

webSocket.onopen = function() {
    output.innerText = "Соединение установлено";
}

webSocket.onmessage = function(evt) {
    makeChat(evt.data, true);
}

webSocket.onerror = function() {
    output.innerText = "При передаче данных произошла ошибка";
}

btn.addEventListener("click", sendMessage);

function sendMessage() {
    if (!input.value) return;
    webSocket.send(input.value);
    makeChat(input.value, false);
    input.value === "";
  }

function makeChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "server-message" : "client-message"}">${message}</div>`;
    chatWindow.innerHTML += messageHTML;
  }

const error = () => {
  outputGeo.textContent = "Невозможно определить ваше местоположение";
}

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  outputGeo.textContent = `Широта: ${latitude}, Долгота:${longitude}`;
  let link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  let linkMessage = `<a class="map-link" href="${link}" target="_blank">Вы находитесь здесь</a>`;
  chatWindow.innerHTML += linkMessage;
}

btnGeo.addEventListener("click", () => {

  if (!navigator.geolocation) {
    outputGeo.textContent = "Ваш браузер не поддерживает функцию определения местоположения";
  } else {
    outputGeo.textContent = "Определение местоположения...";
    navigator.geolocation.getCurrentPosition(success, error)
  }

});

}

document.addEventListener("DOMContentLoaded", pageLoaded);
