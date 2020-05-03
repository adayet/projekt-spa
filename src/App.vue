<template>
  <div id="app">

<div class="wrapper">
    <div class="main-panel">
        <div class="content">
            <div class="row top-nav">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-sm-7">
                            <div class="input-group">
                                    <input type="text" id="address-input" class="form-control search-city-input" placeholder="Wpisz nazwę miejscowości..."> 
                                </div>
                        </div>
                        <div class="col-sm-5">
                            <button id = "app" v-on:click="getLocation" class="btn btn-primary">Dane dla Twojej lokacji</button>
                        </div>
                        </div>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-sm-6 text-right">
                            <button v-on:click="addFavourite" class="btn btn-primary">Dodaj do ulubionych</button>
                            </div>
                            <div class="col-sm-6 text-right">
                            <select v-model="selected" class="form-control" v-on:change="runFavourite">
                            <option v-for="(favourite, index) in favourites" :key="favourite.name"  v-bind:value="index" >
                                {{ favourite.name }}
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
                                <mixedchart v-bind:dates="dates" v-bind:rain_values="rain_values" v-bind:wind_values="wind_values"/>          
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
                               <barchart v-bind:dates="dates" v-bind:pollution_one="pollution_one" v-bind:pollution_two="pollution_two"/>
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

Vue.config.silent = true
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
let that = this
let linechart = Vue.component('linechart',{
    props: ['dates', 'temperature_values'],
    template: `<canvas ref="canvas"></canvas>`,
    data(){return {dates:this.dates, temperature_values:this.temperature_values}},
    methods:{
        drawChart:function(){
            let ctx = this.$refs.canvas.getContext('2d');
            let line = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.dates,
                    datasets: [{
                        label: 'Temperatura',
                        data: this.temperature_values,
                        backgroundColor: 'rgb(64, 186, 130)',
                        borderColor: 'rgb(64, 186, 130)',
                        borderWidth: 3,
                        fill: 'true'
                    }]
                },
                options: {
                legend: {
                    display: false
                }
            }
            });
        
        }
    },
    mounted(){this.drawChart()},
    computed:{
        func(){
            this.dates = that.dates
            this.temperature_values = that.temperature_values

        } 
    }
})

let barchart = Vue.component('barchart',{
        props: ['pollution_dates','x', 'y'],
        template: `<canvas ref="canvas"></canvas>`,
        methods:{
            drawChart:function(){
                let ctx = this.$refs.canvas.getContext('2d');
                    new Chart(ctx, {
                        type: 'bar',
                        data:{
                            labels: this.pollution_dates, 
                            datasets: [{
                                label: 'PM10',
                                data: this.x,
                                borderColor: 'rgb(39, 124, 212)',
                                fill: 'false',
                                borderWidth: 3,
                                order:1
    
                            },{
                                label: 'PM25',
                                data: this.y,
                                borderColor: 'rgb(64, 186, 130)',
                                fill: 'false',
                                borderWidth: 3,
                                order:2
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

let mixedchart = Vue.component('mixedchart',{
    props: ['dates','rain_values', 'wind_values'],
    template: `<canvas ref="canvas"></canvas>`,
    methods:{
        drawChart:function(){
            let ctx = this.$refs.canvas.getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: this.dates,
                        datasets: [{
                            label: 'Opady',
                            data: this.rain_values,
                            borderColor: 'rgb(39, 124, 212)',
                            //fill: 'true',
                            borderWidth: 3,
                            order: 2
                            },
                            {
                            label: 'Wiatr',
                            data: this.wind_values,
                            type: 'line',
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
  /*
  zmiany: usunięte pollution_dates, zamiast nich zawsze bierzemy dates
  x -> pollution_one
  y -> pollution_two
  */
  data() {
	return {
        city : 'Radom',
        country: 'Poland',
        corrds : [1,2,3],
        currentTemp: 27,
        currentPM10 : 156,
        currentPM25 : 124,
        colorPM10: 'green',
        colorPM25: 'green',
        installation : '',
        description:'',
        dates: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        rain_values: [10,50,56,70,10,15,35,89],
        wind_values: [20,14,56,23,85,94,27,42],
        temperature_values: [20,14,56,23,85,94,27,42],
        pollution_one: [20,14,56,23,85,94,27,42],
        pollution_two:[40,64,45,73,90,12,57,22],
        favourites: [],
        loc_type : 'search',
        selected:''
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
       /*read_local storage*/

       if (localStorage.hasOwnProperty('favCities')) {
           this.favourites = JSON.parse(localStorage.getItem('favCities'))  
        } else {
            this.favourites =[]
        }
    },
    watch:{
        currentPM10: function(val){
            if(val > 150){
                this.colorPM10 = 'red'
            } else if (val > 60){
                this.colorPM10 = 'yellow'
            }
        },
        currentPM25: function(val){
            if(val > 150){
                this.colorPM25 = 'red'
            } else if (val > 60){
                this.colorPM25 = 'yellow'
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
            airlyXHR.setRequestHeader('apikey', 'jq4HQHD02pGRmpMi6WfAAjQU7ND7eNGC');
            airlyXHR.send()
            /*
            jq4HQHD02pGRmpMi6WfAAjQU7ND7eNGC
            ALA45rSZm5sGrZ9I4ibJUq1U21O82AKR
            */
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
            this.wind_values=[]
            for (let i = 0; i < 8; i++){
                var row = json_data.list[i]
                var rain_data = 0
                if (typeof row.main.rain != "undefined"){
                    rain_data = row.main.rain("3h")
                }
                this.dates.push(row.dt_txt)
                this.rain_values.push(rain_data)
                this.temperature_values.push(Math.round(row.main.temp - 273))
                this.wind_values.push(row.wind.speed)
            }

            this.currentTemp = this.temperature_values[0]
            this.description = json_data.list[0].weather[0].description
            if (this.loc_type == 'geo'){
                this.city = json_data.city.name
                this.country = json_data.city.country
            }
            //console.log(this.temperature_values)
            //console.log(this.dates)
        },

        getInstaData :function(json_data){
            /*console.log(json_data)*/
            var address = json_data[0].address
            this.installation = address.city + ", " + address.street + " " + address.number
        },

        getPollutionData: function(json_data){
            this.pollution_one = []
            this.pollution_two = []
            for (let i =2; i <24;i+=3){
                let row = json_data.forecast[i]
                this.pollution_two.push(row.standards[0].percent)
                this.pollution_one.push(row.standards[1].percent)
            }
            this.currentPM10 = Math.round(this.pollution_one[0])
            this.currentPM25 = Math.round(this.pollution_two[0])
        },

        runProcess(loc_data, type='search'){
            //console.log('favouriti', loc_data)
            this.coords = [loc_data.latlng.lat, loc_data.latlng.lng]
            /*console.log(loc_data)*/
            if (type != 'geo'){
                this.city = loc_data.name
                this.country = loc_data.country
                this.loc_type='search'
            } else {
                this.loc_type = 'geo'
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
        },
        /*function retreiving coordinates for geolocation and running data load*/
        getCoords : function(position){
            var data_arg = {"latlng": {"lat": position.coords.latitude,
                                        "lng": position.coords.longitude}
                                }
            this.coords = [position.coords.latitude, position.coords.longitude]
            this.runProcess(data_arg, 'geo')
        },

        addFavourite : function() {
            if (!this.favourites) {this.favourites=[]}
            let favouriteCities = []
            let addition = {'name':this.city, 
                                        'country':this.country,
                                    'latlng':{'lat': this.coords[0], 'lng': this.coords[1]}
                                }
            for (let i=0; i<this.favourites.length; i++) {
                favouriteCities.push(this.favourites[i].name)
            }
            if (favouriteCities.includes(this.city)){} 
            else {
                this.favourites.push(addition)
            }
            localStorage.setItem('favCities', JSON.stringify(this.favourites))
            console.log('stor', localStorage.getItem('favCities'))
        },

        removeFavourite : function() {
            this.favourites.splice(index,1);
        },
        runFavourite(event) {
            this.runProcess(this.favourites[event.target.value])
        }
    }
}
</script>