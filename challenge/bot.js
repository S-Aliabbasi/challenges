function PickJoke(category) {
  document.getElementById("demo").innerHTML =
    Jokes[Math.floor(Math.random() * 10) + category];
}
function myFunction(button) {
  var x = button.id;
  PickJoke(parseInt(x));
}
