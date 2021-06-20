var searchButton = document.getElementById("searchBtn");
var header = document.getElementById("resultHeader");
var temp = document.getElementById("tempResult");
var wind = document.getElementById("windResult");
var humidity = document.getElementById("humidityResult");
var uv = document.getElementById("uvResult")

var city = document.getElementById("searchText").value;

var displaySearchCity = function() {
    var citySearch = document.getElementById("searchText").value;
    var newCityBtn = document.createElement("button");
    newCityBtn.className = "searchChild";
    newCityBtn.innerHTML = citySearch;
    var newCityList = document.getElementById("searchHistory");
    newCityList.appendChild(newCityBtn);
    document.getElementById("resultHeader").innerHTML = citySearch + "  " + moment().format('l');
}

searchButton.addEventListener("click", displaySearchCity);

/* fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=75d360e486d3c1c8a360575d67c292a7")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    }); */
