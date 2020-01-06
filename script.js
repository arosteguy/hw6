var searchInput = $("#search-text");
var APIKey = "0411c80deb16f2578650b7d2f0908cf3";
var queryURL
var fiveDayURL 


var searchList = document.querySelector("#search-list");
var searchButton = document.querySelector("#search-button");
var saveCity = [];


function showInfo(){
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    $(".city").html("<h2>" + response.name +  date + "  Weather Details  </h2>" );
           $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
           $(".humidity").text("Humidity: " + response.main.humidity + "%");
           $(".temp").text("Temperature (F):  " + response.main.temp);
});
}
$(searchButton).on("click", function(event) {
  event.preventDefault();
  var userCity = $(searchInput).val().trim();
  queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${APIKey}&units=imperial`;
  fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${userCity},us&appid=${APIKey}&units=imperial`;
  saveCity.push(userCity);
  console.log(fiveDayURL)
  
  console.log(saveCity)
    showInfo();
    showFiveDay();
});

function showFiveDay(){
$.ajax({
    url: fiveDayURL,
    method: "GET"
}).then(function(response) {
  console.log(response)
  for(var i = 5; i< 40; i+8 ){
    $(".temperature").text("Temp: " + response.list[i].main.temp);
    $(".humid").text("Humidity: " + response.list[i].main.humidity + "%");
    $(".icon").img("" + response.list[i].main.weather.icon);
    
  }
showFiveDay();
});
}

init();

function renderSaveCity() {
  searchList.innerHTML = "";

    for (var i = 0; i < saveCity.length; i++) {
    var city = saveCity[i];

    var button = document.createElement("button");
    button.textContent = city;
    button.setAttribute("data-index", i);

    searchList.appendChild(button);
  }
}

function init() {
  var storedSaveCity = JSON.parse(localStorage.getItem("saveCity"));

  if (storedSaveCity !== null) {
    saveCity = storedSaveCity;
  }
  renderSaveCity();
}

function storeSaveCity() {
  localStorage.setItem("saveCity", JSON.stringify(saveCity));
}
  
searchButton.addEventListener("submit", function(event) {
  event.preventDefault();
  var inputText = searchInput.value.trim();
  if (inputText === "") {
    return;
  }

  saveCity.push(inputText);
  searchInput.value = "";
  storeSaveCity();
  renderSaveCity();

});
  storeSaveCity();
  renderSaveCity();


  


  


   var m = moment();
    var date = m.format("L");
    console.log(date);
    