var APIKey = "0411c80deb16f2578650b7d2f0908cf3";
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=denver&appid=${APIKey}&units=imperial`;
// var city = $(this).attr(".city");
var fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=denver,us&appid=${APIKey}&units=imperial`;
var searchInput = document.querySelector("#search-text");
var searchForm = document.querySelector("#search-form");
var searchList = document.querySelector("#search-list");

var saveCity = [];



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    $(".city").html("<h2>" + response.name + "Weather Details </h2>");
           $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
           $(".temp").text("Temperature (F):  " + response.main.temp);
});

$("#search").on("click", function() {
    event.preventDefault();
      $("#search").val().trim();
    //this.response (city);
    //console.log(this);
});
    
$.ajax({
    url: fiveDayURL,
    method: "GET"
}).then(function(response) {
    $(".temperature").text("Temp: " + response.list.main.temp);
        $(".humid").text("Humidity: " + response.list.main.humidity);
        $$(".icon").img("" + response.list.weather.icon);
console.log(fiveDayURL);
});

init();

function renderSaveCity() {
  searchList.innerHTML = "";

    for (var i = 0; i < saveCity.length; i++) {
    var city = saveCity[i];

    var li = document.createElement("li");
    li.textContent = city;
    li.setAttribute("data-index", i);

    searchList.appendChild(li);
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


searchForm.addEventListener("submit", function(event) {
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

    var a = moment.locale("America, Denver");
    var c = moment().format("LL");
    document.getElementById("#dateDisplay").innerHTML = c;