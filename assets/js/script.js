var pethubEl = $('#pethub');
var pethubImgEl = $('#pethub-image');

var weatherDashEl = $('#weather-dashboard');
var weatherDashImgEl = $('#weather-dashboard-image');

pethubEl.on("mouseover", function() {
    pethubImgEl.attr("src", "./assets/gifs/pethub.gif");
});

pethubEl.on("mouseout", function() {
    pethubImgEl.attr("src", "./assets/images/pethub.png")
})

weatherDashEl.on("mouseover", function() {
    weatherDashImgEl.attr("src", "./assets/gifs/weather-dashboard.gif");
})

weatherDashEl.on("mouseout", function() {
    weatherDashImgEl.attr("src", "./assets/images/weather-dashboard.png");
})