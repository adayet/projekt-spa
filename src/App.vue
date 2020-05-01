<template>
  <div id="app">

<div class="wrapper">
    <div class="main-panel">
        <div class="content">
            <div class="row top-nav">
                <div class="col-lg-6">
                    <div class="input-group">
                        <div class="input-group-prepend">
                        <input type="search" id="address-input" class="address-input" placeholder="Wpisz nazwę miejscowości..." style="size:50">
                        <button id = "app" v-on:click="getLocation" style="size:20">Dane dla Twojej lokacji</button>
                        <button v-on:click="addFavourite">Dodaj {{ city }} do ulubionych</button>
                        </div>
						
					</div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-sm-12 text-right">
                            <select v-model="selected">
                            <option v-for="favourite in favourites" :key="favourite.miasto">
                                {{ favourite.miasto }}
                                </option>
                            </select>
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
                            <h1 class="card-title">{{ city }} , {{ country }}</h1>
                        </div>
                        <div class="card-body">
                            <div class="water-details">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <span class="temperature">{{currentTemp}}°C</span>
                                        <i class="tim-icons icon-heart-2" style="font-size: 4em;margin-top: -30px; margin-left: 10px "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer card-info">
                            <h4 class="card-title">{{ description }}</h4>
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
                                <linechart v-bind:dates="dates" v-bind:temperature_values="temperature_values"/>
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
                                <mixedchart v-bind:dates="dates" v-bind:temperature_values="temperature_values"/>
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
                            <h1 class="card-title"> {{ installation }}</h1>
                        </div>
                        <div class="card-body">
                            <div class="water-details pollution">
                                <div class="row">
                                    <div class="col-6">PM 10</div>
                                    <div class="col-6" v-bind:style="{color: colorPM10}">{{currentPM10}}%</div>
                                </div>
                                <div class="row">
                                    <div class="col-6">PM 2,5</div>
                                    <div class="col-6" v-bind:style="{color: colorPM25}">{{ currentPM25}}%</div>
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
                                <barchart v-bind:dates="dates" v-bind:pollution_values="pollution_values"/>
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
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/places.js@1.18.1"></script>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
/*
	return {
        city:"",
        country:"",
        corrds : "",
        pollutionData : "",
        weatherData : "",
        current_temp: ""
    }

*/ 

let barchart = Vue.component('barchart',{
        props: ['pollution_dates','pollution_values'],
        template: `<canvas ref="canvas"></canvas>`,
        methods:{
            drawChart:function(){
                let ctx = this.$refs.canvas.getContext('2d');
                    new Chart(ctx, {
                        type: 'bar',
                        data:{
                            labels: this.pollution_dates, 
                            datasets: [{
                                label: 'Zanieczyszczenie',
                                data: this.pollution_values,
                                //backgroundColor: 'rgb(39, 124, 212)',
                                borderColor: 'rgb(39, 124, 212)',
                                fill: 'true',
                                borderWidth: 3
                            }]
                        }
                    })
            },
            mounted(){
                this.drawChart()
            }
        }
    })
  
let linechart = Vue.component('linechart',{
    props: ['dates','temperature_values'],
    template: `<canvas ref="canvas"></canvas>`,
    methods:{
        drawChart:function(){
            let ctx = this.$refs.canvas.getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.dates,
                    datasets: [{
                        label: 'Temperatura',
                        data: this.temperature_values,
                        backgroundColor: 'rgb(64, 186, 130)',
                        borderColor: 'rgb(64, 186, 130)',
                        borderWidth: 5,
                        fill: 'true'
                    }]
                }
            });
        
        }
    },
    mounted(){
        this.drawChart()
    }
})

let mixedchart = Vue.component('mixedchart',{
    props: ['dates','rain_values', 'wind_values'],
    template: `<canvas ref="canvas"></canvas>`,
    methods:{
        drawChart:function(){
            let ctx = this.$refs.canvas.getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: this.x,
                        datasets: [{
                            label: 'Opady',
                            data: this.rain_values,
                            //backgroundColor: 'rgb(39, 124, 212)',
                            borderColor: 'rgb(39, 124, 212)',
                            fill: 'true',
                            borderWidth: 3,
                            order: 2
                            },
                            {
                            label: 'Wiatr',
                            data: this.wind_values,

                            // Changes this dataset to become a line
                            type: 'line',
                            backgroundColor: 'rgb(64, 186, 130)',
                            borderColor: 'rgb(64, 186, 130)',
                            borderWidth: 3,
                            fill:'true',
                            order:1
                            }
                        ]
                    }
                });
        }
    },
    mounted(){
        this.drawChart()
    }
})

export default {
  name: 'App',
  components: {
      barchart: barchart,
      mixedchart: mixedchart,
      linechart: linechart
  },
  data() {
	return {
        city : '',
        country: '',
        corrds : [1,2,3],
        pollutionData : [{"PM10%": 156, "PM25%": 124}],
        weatherData : "",
        currentTemp: 27,
        currentPM10 : 156,
        currentPM25 : 124,
        colorPM10: 'green',
        colorPM25: 'green',
        installation : '',
        description:'',
        dates: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        rain_values: [20,14,56,23,85,94,27,42],
        wind_values: [20,14,56,23,85,94,27,42],
        temperature_values: [20,14,56,23,85,94,27,42],
        pollution_values: [20,14,56,23,85,94,27,42],
        favourites: [{
            miasto: "",
            kord: ""
            }],
        loc_type : 'search'
    } 
    },

    mounted: function() {
        let placesAutocomplete = places({
            appId: 'plZPOBCP5Q3T',
            apiKey: 'c1f1ec07ed62d4a064179ffe3bed383a',
            container: document.querySelector('#address-input'),
            countries: ['pl'],
            type: ['city', 'address']
            });

        placesAutocomplete.on('change', e => this.runProcess(e.suggestion));
        /*
        this.runProcess({
                        'city':'Warszawa',
                        'country':'Polska',
                        'latlng': {'lat': 52.2370,'lng':21.0175}
        });
        */
    },
    watch:{
        currentPM10: function(val){
            if(val > 150){
                this.colorPM10 = 'red'
            } else if (val > 60){
                this.colorPM10 = 'yelow'
            }
        },
        currentPM25: function(val){
            if(val > 150){
                this.colorPM25 = 'red'
            } else if (val > 60){
                this.colorPM25 = 'yelow'
            }
        }
    },

    methods: {

        fetchAirlyData: function(type,url){
            var that = this;
            var airlyXHR = new XMLHttpRequest();
            airlyXHR.onreadystatechange = function() {
                if (airlyXHR.readyState == 4 && airlyXHR.status == 200) {
                    let json_data = JSON.parse(airlyXHR.responseText);
                    if (type=='measurements'){
                        that.getPollutionData(json_data)
                    } else {
                        that.getInstaData(json_data)
                    }
                    
                }
            };

            airlyXHR.open("GET", url);
            airlyXHR.setRequestHeader('Accept', 'application/json');
            airlyXHR.setRequestHeader('apikey', 'ALA45rSZm5sGrZ9I4ibJUq1U21O82AKR');
            airlyXHR.send()
        },

        fetchWeatherData: function(url){
            var that = this;
            var weatherXHR = new XMLHttpRequest();
            weatherXHR.onreadystatechange = function() {
                if (weatherXHR.readyState == 4 && weatherXHR.status == 200) {
                    let json_data = JSON.parse(weatherXHR.responseText);
                    that.getWeatherData(json_data)
                }
            }
            weatherXHR.open('GET', url );
            weatherXHR.send();
        },

        getWeatherData(json_data){
            console.log(json_data)
            this.dates = []
            this.rain_values = []
            this.temperature_values = []
            this.wind_values = []
            var outcome = [];
            for (let i = 0; i < 8; i++){
                var row = json_data.list[i]
                var rain_data = 0
                if (typeof row.main.rain != "undefined"){
                    rain_data = row.main.rain("3h")
                }
                outcome.push({ "date" : row.dt_txt,
                            "temperature": Math.round(row.main.temp - 273),
                            "pressure": row.main.pressure,
                            "wind": row.wind.speed,
                            "rain": rain_data
                })
                this.dates.push(row.dt_txt)
                this.rain_dates.push(rain_data)
                this.temperature_values.push(Math.round(row.main.temp - 273))
                this.wind_values.push(row.wind.speed)
            }
            
            this.weatherData = outcome
            this.currentTemp = outcome[0].temperature
            this.description = json_data.list[0].weather[0].description
            if (this.loc_type = 'geo'){
                this.city = outcome.address.city
                this.country = outcome.address.country
            }
        },

        getInstaData :function(json_data){
            console.log(json_data)
            var address = json_data[0].address
            this.installation = address.city + ", " + address.street + " " + address.number
        },

        getPollutionData: function(json_data){
            let outcome = [];
            this.pollution_dates = []
            this.pollution_pm10 = []
            this.pollution_pm25 = []
            for (let i =2; i <24;i+=3){
                let row = json_data.forecast[i]
                outcome.push({
                                "date": row.fromDateTime.slice(0,10) + " " + row.fromDateTime.slice(11,19),
                                "PM25Val":row.values[0].value,
                                "PM10Val": row.values[1].value,
                                "PM25": row.standards[0].percent,
                                "PM10": row.standards[1].percent
                })
                this.pollution_dates.push(row.fromDateTime.slice(11,19))
                this.pollution_pm25.push(row.standards[0].percent)
                this.pollution_pm10.push(row.standards[1].percent)
            }
            this.currentPM10 = Math.round(outcome[0].PM10,0)
            this.currentPM25 = Math.round(outcome[0].PM25,0)
        },

        runProcess(loc_data){
            this.coords = [loc_data.latlng.lat, loc_data.latlng.lng]
            console.log(loc_data)
            if (this.loc_type != 'geo'){
                this.city = loc_data.name
                this.country = loc_data.country
            }
        
            /*
            this.fetchWeatherData(`http://api.openweathermap.org/data/2.5/forecast?lat=${loc_data.latlng.lat}&lon=${loc_data.latlng.lng}&lang=pl&appid=96e1f29b74494a9d9469860a9ff96f14`);
            this.fetchAirlyData('measurements',`https://airapi.airly.eu/v2/measurements/point?lat=${loc_data.latlng.lat}&lng=${loc_data.latlng.lng}`);
            this.fetchAirlyData('installation',`https://airapi.airly.eu/v2/installations/nearest?lat=${loc_data.latlng.lat}&lng=${loc_data.latlng.lng}&maxDistanceKM=-1.0`)
            */
        },
        /* function checking geolocation and runing getCoords */
        getLocation: function() {
            if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoords);
            } else {
            console.log("Geolocation is not supported by this browser.");
            }
            this.placesAutocomplete.clear()
        },
        /*function retreiving coordinates for geolocation and running data load*/
        getCoords : function(position){
            this.loc_type = 'geo'
            var data_arg = {"latlng": {"lat": position.coords.latitude,
                                        "lng": position.coords.longitude}
                                }
            this.runProcess(data_arg)
        },

        addFavourite : function(favourite) {
            },

        removeFavourite : function() {
            this.favourites.splice(index,1);
        }
    }
}
</script>