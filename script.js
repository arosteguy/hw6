var APIKey = "0411c80deb16f2578650b7d2f0908cf3";
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=imperial`;
var city = document.getElementById("city")
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
           $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
           $(".temp").text("Temperature (F) " + response.main.temp);
});
click


    
    

