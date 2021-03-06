console.log("hello");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.getElementById("message-one");
const messageTwo = document.getElementById("message-two");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  let location = search.value;
  if (location.length === 0) {
    location = "!";
  }

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
