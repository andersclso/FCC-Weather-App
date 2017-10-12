$(document).ready(function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			$.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, function(results) {
				$("#location").html(results.name + ", " + results.sys.country)
				$("#temp").html(results.main.temp);
				$(".degree").html("°");
				$("#tempunit").html("C");
				$("#weather").html(results.weather[0].description);

				let ele = document.getElementById('icons');
				let tempnum = document.getElementById('temp');

				ele.className = results.weather[0].main;

				if (ele.className == 'Rain') {
					document.body.style.background = '#9A9B94';
				}
				else if (ele.className == 'Clouds') {
					document.body.style.background = '#A1D9EF'
				}

				$("#tempunit").on("click", function() {
					if (this.innerHTML === 'C') {
						tempnum.innerHTML = ((tempnum.innerHTML * (9/5) + 32)).toFixed(1);
					}
					else {
						tempnum.innerHTML = ((tempnum.innerHTML - 32) * (5/9)).toFixed(1);
					}
					this.innerHTML = this.innerHTML === 'C' ? 'F' : 'C';
				});
			});
		});
	}
});