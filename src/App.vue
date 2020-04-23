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
                        <input type="text" class="form-control search-city-input" placeholder="Wpisz nazwę miejscowości..." aria-label="Username" aria-describedby="basic-addon1">
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
  data () {
    return '';
  }
}
</script>
