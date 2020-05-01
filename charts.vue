    Vue.component('barchart',{
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
                        });
            }
        },
        mounted(){
            this.drawChart()
        }
    })
  
Vue.component('linechart',{
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
            });
        
        }
    },
    mounted(){
        this.drawChart()
    }
})

     Vue.component('mixedchart',{
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

        }]
        });
            }
        },
        mounted(){
            this.drawChart()
        }
    })