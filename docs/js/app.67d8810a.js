(function(t){function a(a){for(var s,o,n=a[0],l=a[1],c=a[2],u=0,h=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(h.length)h.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var l=e[n];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"main-panel"},[e("div",{staticClass:"content"},[e("div",{staticClass:"row top-nav"},[e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-sm-5"},[e("button",{staticClass:"btn btn-primary",attrs:{id:"app"},on:{click:t.getLocation}},[t._v("Dane dla Twojej lokacji")])])])]),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 text-right"},[e("button",{staticClass:"btn btn-primary",on:{click:t.addFavourite}},[t._v("Dodaj do ulubionych")])]),e("div",{staticClass:"col-sm-6 text-right"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.selected=a.target.multiple?e:e[0]},t.runFavourite]}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Wybierz...")]),t._l(t.favourites,(function(a,s){return e("option",{key:a.name,domProps:{value:s}},[t._v(" "+t._s(a.name)+" ")])}))],2)])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2"},[e("div",{staticClass:"card card-chart"},[e("div",{staticClass:"card-header"},[e("h4",{staticClass:"card-category"},[t._v("Pogoda")]),e("h1",{staticClass:"card-title"},[t._v(t._s(t.city)+", "+t._s(t.country))])]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"water-details"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("span",{staticClass:"temperature"},[t._v(t._s(t.currentTemp)+"°C")])])])])]),e("div",{staticClass:"card-footer card-info"},[e("h4",{staticClass:"card-title m_title"},[t._v(t._s(t.description))])])])]),e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"card card-chart"},[t._m(1),e("div",{staticClass:"card-body"},[e("linechart",{attrs:{dates:t.dates,temperature_values:t.temperature_values}})],1)])]),e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"card card-chart"},[t._m(2),e("div",{staticClass:"card-body"},[e("div",[e("mixedchart",{attrs:{dates:t.dates,rain_values:t.rain_values,wind_values:t.wind_values}})],1)])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2"},[e("div",{staticClass:"card card-chart"},[e("div",{staticClass:"card-header"},[e("h4",{staticClass:"card-category"},[t._v("Pomiar zanieczyszczenia*")]),e("h1",{staticClass:"card-title"},[t._v(" "+t._s(t.installation))])]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"water-details pollution"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6",staticStyle:{"font-weight":"600"}},[t._v("PM10")]),e("div",{staticClass:"col-6",staticStyle:{"font-weight":"600"},style:{color:t.colorPM10}},[t._v(t._s(t.currentPM10)+"%")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6",staticStyle:{"font-weight":"600"}},[t._v("PM2.5")]),e("div",{staticClass:"col-6",staticStyle:{"font-weight":"600"},style:{color:t.colorPM25}},[t._v(t._s(t.currentPM25)+"%")])])])]),t._m(3)])]),e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"card card-chart"},[t._m(4),e("div",{staticClass:"card-body"},[e("barchart",{attrs:{dates:t.dates,pollution_one:t.pollution_one,pollution_two:t.pollution_two}})],1)])]),e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"card card-chart"},[e("div",{staticClass:"card-header "},[e("div",{staticClass:"row"},[t._m(5),e("div",{staticClass:"col-sm-6"},[e("nav",[e("div",{staticClass:"nav nav-tabs border-0",attrs:{id:"nav-tab",role:"tablist"}},[e("a",{staticClass:"nav-item nav-link active link-style",attrs:{id:"nav-home-tab","data-toggle":"tab",href:"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"},on:{click:function(a){return t.setConditions("rower")}}},[t._v("Rower")]),e("a",{staticClass:"nav-item nav-link link-style",attrs:{id:"nav-profile-tab","data-toggle":"tab",href:"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},on:{click:function(a){return t.setConditions("bieganie")}}},[t._v("Bieganie")]),e("a",{staticClass:"nav-item nav-link link-style",attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},on:{click:function(a){return t.setConditions("street workout")}}},[t._v("Street workout")])])])])])]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"tab-content chart-area",attrs:{id:"nav-tabContent"}},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[e("h2",{style:{color:t.condition_color}},[t._v(t._s(t.conditions))]),e("h3",[t._v(t._s(t.warns))])]),e("div",{staticClass:"tab-pane fade",attrs:{id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[e("h2",{style:{color:t.condition_color}},[t._v(t._s(t.conditions))]),e("h3",[t._v(t._s(t.warns))])]),e("div",{staticClass:"tab-pane fade",attrs:{id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"}},[e("h2",{style:{color:t.condition_color}},[t._v(t._s(t.conditions))]),e("h3",[t._v(t._s(t.warns))])])])])])])])])])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-sm-7"},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control search-city-input",attrs:{type:"text",id:"address-input",placeholder:"Wpisz nazwę miejscowości..."}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header"},[e("h5",{staticClass:"card-category"},[t._v("Prognoza temperatury na najbliższe godziny")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header"},[e("h5",{staticClass:"card-category"},[t._v("Prognoza opadów i prędkości wiatru")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-footer card-info"},[e("h4",{staticClass:"card-title"},[t._v("*Według dobowej normy WHO")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header"},[e("h5",{staticClass:"card-category"},[t._v("Prognoza zanieczyszczenia")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-sm-6 text-left"},[e("h5",{staticClass:"card-category"},[t._v("Warunki do uprawiania sportu")])])}],o=(e("a4d3"),e("e01a"),e("99af"),e("caad"),e("13d5"),e("b0c0"),e("1fca"));Vue.config.silent=!0;var n=Vue.component("linechart",{extends:o["b"],props:["dates","temperature_values"],mounted:function(){this.renderLineChart(this.dates,this.temperature_values,this.options)},methods:{renderLineChart:function(t,a,e){this.renderChart({labels:t,datasets:[{label:"Temperatura",data:a,backgroundColor:"rgb(64, 186, 130)",borderColor:"rgb(64, 186, 130)",borderWidth:3,fill:"true"}]},{scales:{yAxes:[{ticks:{beginAtZero:!0,callback:function(t,a,e){return t+"°"}}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1})}},watch:{temperature_values:function(){this.renderLineChart(this.dates,this.temperature_values,this.options)}}}),l=Vue.component("barchart",{extends:o["a"],props:["dates","pollution_one","pollution_two"],mounted:function(){this.renderBarChart(this.dates,this.pollution_one,this.pollution_two)},methods:{renderBarChart:function(t,a,e){this.renderChart({labels:t,datasets:[{label:"PM10",data:a,borderColor:"rgb(39, 124, 212)",borderWidth:3,fill:"true"},{label:"PM25",data:e,borderColor:"rgb(64, 186, 130)",fill:"true",borderWidth:3}]},{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},responsive:!0,maintainAspectRatio:!1})}},watch:{pollution_one:function(){this.renderBarChart(this.dates,this.pollution_one,this.pollution_two)}}}),c=Vue.component("mixedchart",{extends:o["a"],props:["dates","rain_values","wind_values"],mounted:function(){this.renderMixedChart(this.dates,this.rain_values,this.wind_values)},methods:{renderMixedChart:function(t,a,e){this.renderChart({labels:t,datasets:[{label:"Opady",data:a,borderColor:"rgb(39, 124, 212)",fill:"true",borderWidth:3,order:2},{label:"Wiatr",data:e,type:"line",borderColor:"rgb(64, 186, 130)",borderWidth:3,fill:"true",order:1}]},{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},responsive:!0,maintainAspectRatio:!1})}},watch:{wind_values:function(){this.renderMixedChart(this.dates,this.rain_values,this.wind_values)}}}),d={name:"App",components:{barchart:l,mixedchart:c,linechart:n},data:function(){return{city:"Kutno",country:"Polska",corrds:[1,2,3],currentTemp:13,currentPM10:14,currentPM25:17,colorPM10:"green",colorPM25:"green",installation:"Kutno, Mikołajska",description:"wysokie opady deszczu",dates:["13:00","16:00","19:00","22:00","01:00","04:00","07:00","10:00"],rain_values:[10,50,56,70,10,15,35,89],wind_values:[30,14,56,23,85,94,27,42],temperature_values:[20,14,56,23,85,94,27,42],pollution_one:[20,14,12,23,13,30,27,31],pollution_two:[11,13,17,11,10,19,25,15],favourites:[],loc_type:"search",selected:"",warns:'Aktualnie występują zbyt duże opady deszczu. Postaraj się zrobić trening w domu. Jak śpiewała Budka Suflera: "...a po nocy przychodzi dzień, a po burzy spokój".',condition_color:"red",conditions:"NIESPRZYJAJĄCE"}},mounted:function(){var t=this,a=places({appId:"plZPOBCP5Q3T",apiKey:"c1f1ec07ed62d4a064179ffe3bed383a",container:document.querySelector("#address-input"),countries:["pl"],type:["city","address"]});a.on("change",(function(a){return t.runProcess(a.suggestion)})),localStorage.hasOwnProperty("favCities")?this.favourites=JSON.parse(localStorage.getItem("favCities")):this.favourites=[]},watch:{currentPM10:function(t){this.colorPM10=t>150?"red":t>60?"yellow":"b/d"==t?"white":"green",this.setConditions("bieganie")},currentPM25:function(t){this.colorPM25=t>150?"red":t>60?"yellow":"b/d"==t?"white":"green"}},methods:{fetchAirlyData:function(t,a){var e=this,s=new XMLHttpRequest;s.onreadystatechange=function(){if(4==s.readyState&&200==s.status){var a=JSON.parse(s.responseText);"measurements"==t?e.getPollutionData(a):e.getInstaData(a)}else e.currentPM10="b/d",e.currentPM25="b/d",e.pollution_one=[],e.pollution_two=[]},s.open("GET",a),s.setRequestHeader("Accept","application/json"),s.setRequestHeader("apikey","pg5noj6zcIxBn4L9rqsjK9fng71mseoT"),s.send()},fetchWeatherData:function(t){var a=this,e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var t=JSON.parse(e.responseText);a.getWeatherData(t)}},e.open("GET",t),e.send()},getWeatherData:function(t){console.log(t),this.dates=[],this.rain_values=[],this.temperature_values=[],this.wind_values=[];for(var a=0;a<8;a++){var e=t.list[a],s=0;"undefined"!=typeof e.rain&&(s=e.rain["3h"]),this.dates.push(e.dt_txt.substring(10,16)),this.rain_values.push(s),this.temperature_values.push(Math.round(e.main.temp-273)),this.wind_values.push(e.wind.speed)}this.currentTemp=this.temperature_values[0],this.description=t.list[0].weather[0].description,"geo"==this.loc_type&&(this.city=t.city.name,this.country=t.city.country),console.log(this.rain_values)},getInstaData:function(t){var a=t[0].address;this.installation=a.city+", "+a.street+" "+a.number},getPollutionData:function(t){this.pollution_one=[],this.pollution_two=[];for(var a=2;a<24;a+=3){var e=t.forecast[a];this.pollution_two.push(e.standards[0].percent),this.pollution_one.push(e.standards[1].percent)}this.currentPM10=Math.round(this.pollution_one[0]),this.currentPM25=Math.round(this.pollution_two[0])},runProcess:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"search";this.coords=[t.latlng.lat,t.latlng.lng],"geo"!=a?(this.city=t.name,this.country=t.country,this.loc_type="search"):this.loc_type="geo",this.fetchWeatherData("http://api.openweathermap.org/data/2.5/forecast?lat=".concat(t.latlng.lat,"&lon=").concat(t.latlng.lng,"&lang=pl&appid=96e1f29b74494a9d9469860a9ff96f14")),this.fetchAirlyData("measurements","https://airapi.airly.eu/v2/measurements/point?lat=".concat(t.latlng.lat,"&lng=").concat(t.latlng.lng)),this.fetchAirlyData("installation","https://airapi.airly.eu/v2/installations/nearest?lat=".concat(t.latlng.lat,"&lng=").concat(t.latlng.lng,"&maxDistanceKM=-1.0"))},getLocation:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.getCoords):console.log("Geolocation is not supported by this browser.")},getCoords:function(t){var a={latlng:{lat:t.coords.latitude,lng:t.coords.longitude}};this.coords=[t.coords.latitude,t.coords.longitude],this.runProcess(a,"geo")},addFavourite:function(){this.favourites||(this.favourites=[]);for(var t=[],a={name:this.city,country:this.country,latlng:{lat:this.coords[0],lng:this.coords[1]}},e=0;e<this.favourites.length;e++)t.push(this.favourites[e].name);t.includes(this.city)||this.favourites.push(a),localStorage.setItem("favCities",JSON.stringify(this.favourites)),console.log("stor",localStorage.getItem("favCities"))},runFavourite:function(t){this.runProcess(this.favourites[t.target.value])},setConditions:function(t){if(console.log(this.temperature_values[0],this.wind_values[0],this.rain_values[0]),"b/d"!=this.currentPM10)var a=(this.currentPM10+this.currentPM25)/2;else a=0;var e=[20,20,0],s=[this.temperature_values[0],this.wind_values[0],this.rain_values[0]],i=[Math.abs(e[0]-s[0]),.2*Math.abs(e[1]-s[1]),3*Math.abs(e[2]-s[2])],r=i.reduce((function(t,a){return t+a})),o={bieganie:[0,30,13,25],rower:[0,8,15,27],"street workout":[0,7,16,28]};console.log("avg",r),r<=o[t][1]&&a<60?(this.condition_color="dark green",this.conditions="BARDZO DOBRE"):r<=o[t][2]&&a<100?(this.condition_color="green",this.conditions="DOBRE"):r<=o[t][3]&&a<120?(this.condition_color="yellow",this.conditions="UMIARKOWANE"):(this.condition_color="red",this.conditions="NIESPRZYJAJĄCE"),this.setWarns(t)},setWarns:function(t){this.warns="",(this.temperature_values[0]<5||this.temperature_values[0]>25)&&(this.warns+="Temperatura nie sprzyja aktywności fizycznej - zwróć uwagę na odpowiedni strój. "),this.currentPM10>100||this.currentPM25>100?this.warns+="Uważaj na mocno zanieczyszczne powietrze. Jeśli możesz - zostań w domu. ":(this.currentPM10>60||this.currentPM25>60)&&(this.warns+="Powietrze jest zanieczyszczone - sugerowane jest założenie maski antysmogowej. "),this.rain_values[0]>4?this.warns+='Aktualnie występują zbyt duże opady deszczu. Postaraj się zrobić trening w domu. Jak śpiewała Budka Suflera: "...a po nocy przychodzi dzień, a po burzy spokój".':this.rain_values[0]>.5&&(this.warns+="Występują umiarkowane opady deszczu - zaopatrz się w nieprzemakalną odzież i gorącą herbatę po powrocie."),this.wind_values[0]>60&&(this.warns+="Występuje zbyt silny wiatr - nie wychodź z domu i zaczekaj na zmianę warunków. "),this.temperature_values[0]>15&&this.temperature_values[0]<25&&0==this.rain_values[0]&&this.wind_values[0]<40&&0==this.warns.length&&(this.warns+="Świetna pogoda do uprawiania sportu - i nie tylko! Zabierz swoich bliskich na zewnątrz i do woli korzystajcie z walorów przyrody. Kto wie, kiedy przydarzy się kolejna okazja...")}}},u=d,h=e("2877"),p=Object(h["a"])(u,i,r,!1,null,null,null),v=p.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(v)}}).$mount("#app")},d434:function(t,a){function e(t){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="d434"}});
//# sourceMappingURL=app.67d8810a.js.map