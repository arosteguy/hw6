var APIKey = "0411c80deb16f2578650b7d2f0908cf3";
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=denver&appid=${APIKey}&units=imperial`;
var city = $(this).attr(".city");
var fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=denver&appid=${APIKey}&units=imperial`;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
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
