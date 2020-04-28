<template>
  <div id="app">

<div class="wrapper">
    <div class="main-panel">
        <div class="content">
            <div class="row top-nav">
                <div class="col-lg-6">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <i class="fas fa-search fa-search-box"></i>
                        </div>
                        <input type="search" id="address-input" class="address-input" placeholder="Wpisz nazwę miejscowości..." aria-label="Username" aria-describedby="basic-addon1">
						<button id = "app" v-on:click="getLocation">Dane dla Twojej lokacji</button>
					</div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-sm-12 text-right">
                            <a href="#">ZALOGUJ</a>
                            <span class="divider">|</span>
                            <a href="#">ZAREJESTRUJ</a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
            </div>
            <div class="row">
                <div class="col-lg-2">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h4 class="card-category">Pogoda</h4>
                            <h1 class="card-title">Kraków, PL</h1>
                        </div>
                        <div class="card-body">
                            <div class="water-details">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <span class="temperature">17°C</span>
                                        <i class="tim-icons icon-heart-2" style="font-size: 4em;margin-top: -30px; margin-left: 10px "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer card-info">
                            <h4 class="card-title">Częściowe zachmurzenie</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Prognoza temperatury na najbliższe godziny</h5>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <h1>CHART</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Prognoza opadów i prędkości wiatru</h5>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <h1>CHART</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h4 class="card-category">Pomiar zanieczyszczenia*</h4>
                            <h1 class="card-title"> Kraków, PL</h1>
                        </div>
                        <div class="card-body">
                            <div class="water-details pollution">
                                <div class="row">
                                    <div class="col-6">PM 10</div>
                                    <div class="col-6">250%</div>
                                </div>
                                <div class="row">
                                    <div class="col-6">PM 10</div>
                                    <div class="col-6">120%</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer card-info">
                            <h4 class="card-title">*Według dobowej normy WHO</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Prognoza zanieczyszczenia</h5>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <h1>CHART</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="card card-chart">
                        <div class="card-header ">
                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <h5 class="card-category">Warunki do uprawiania sportu</h5>
                                </div>
                                <div class="col-sm-6">
                                    <nav>
                                        <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
                                            <a class="nav-item nav-link active link-style" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Rower</a>
                                            <a class="nav-item nav-link link-style" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Bieganie</a>
                                            <a class="nav-item nav-link link-style" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Street workout</a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="tab-content chart-area" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <h1>OPCJA 1</h1>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <h2>OPCJA 2</h2>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <h3>OPCJA 3</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>

export default {
  name: 'App',
  data: {
	placesAutocomplete : places({
		appId: 'plZPOBCP5Q3T',
		apiKey: 'c1f1ec07ed62d4a064179ffe3bed383a',
		container: document.querySelector('#address-input'),
		countries: ['pl'],
		type: ['city']
	  }),
	pollut : {}
},
created: function() {
	this.load_data({
					'city':'Warszawa',
					'country':'Polska',
					'latlng': {'lat': 52.2370,'lng':21.0175}
	});
	 this.placesAutocomplete.on('change', e => this.load_data(e.suggestion));
},
methods: {
	/*function loading wather and air pollution data*/
	load_data: function(loc_data) {

		let place = {"city": loc_data.city,
					"country": loc_data.country}
		console.log(place)
		/* loading pollution data in json */
		let km = -1;
		
		url = `https://airapi.airly.eu/v2/measurements/point?lat=${loc_data.latlng.lat}&lng=${loc_data.latlng.lng}`;
		url1 = `https://airapi.airly.eu/v2/installations/nearest?lat=${loc_data.latlng.lat}&lng=${loc_data.latlng.lng}&maxDistanceKM=-1.0`;
		
		var currXHR = new XMLHttpRequest();
		currXHR.onreadystatechange = function() {
			if (currXHR.readyState == 4 && currXHR.status == 200) {
				var json_data = JSON.parse(currXHR.responseText);
				console.log(json_data)
				var pollution = []
				for (let i =2; i <24;i+=3){
					let row = json_data.forecast[i]
					pollution.push({
									"date": row.fromDateTime.slice(0,10) + " " + row.fromDateTime.slice(11,19),
									"PM25":row.values[0].value,
									"PM10": row.values[1].value,
									"PM25%": row.standards[0].percent,
									"PM10%": row.standards[1].percent
					})
				} 
				console.log(pollution)
				this.pollut = pollution;
			}
		};

		currXHR.open("GET", url);
		currXHR.setRequestHeader('Accept', 'application/json');
		currXHR.setRequestHeader('apikey', 'ALA45rSZm5sGrZ9I4ibJUq1U21O82AKR');
		currXHR.send();
		
		/* loading weather data in json */
		var forecastXHR = new XMLHttpRequest();
		forecastXHR.onreadystatechange = function(){
			if (forecastXHR.readyState == 4 && forecastXHR.status == 200){
				var json_data = JSON.parse(forecastXHR.responseText);
				let city = json_data.city.name
				var output = []
				for (let i = 0; i < 8; i++){
					var row = json_data.list[i]
					var rain_data = 0
					if (typeof row.main.rain != "undefined"){
						rain_data = row.main.rain("3h")
					};
					output.push({ "date" : row.dt_txt,
											"temperature": Math.round(row.main.temp - 273),
											"pressure": row.main.pressure,
											"wind": row.wind.speed,
											"rain": rain_data,
					})
				}
				console.log(output)
			} 
		}

		forecastXHR.open('GET', `http://api.openweathermap.org/data/2.5/forecast?lat=${loc_data.latlng.lat}&lon=${loc_data.latlng.lng}&appid=96e1f29b74494a9d9469860a9ff96f14`);
		forecastXHR.send();
	},
	
	/* function checking geolocation and runing getCoords */
	getLocation: function() {
	  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(this.getCoords);
	  } else {
		console.log("Geolocation is not supported by this browser.");
	  }
	  this.placesAutocomplete.setVal('')
	},
	/*function retreiving coordinates for geolocation and running data load*/
	getCoords : function(position){
		var data_arg = {"latlng": {"lat": position.coords.latitude,
									"lng": position.coords.longitude}
							}
		this.load_data(data_arg)
	}
}
}
</script>
