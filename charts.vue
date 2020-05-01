<script>

    Vue.component('barchart',{
        props: ['dates','pollution-values'],
        template: `<canvas ref="canvas"></canvas>`,
        methods:{
            drawChart:function(){
                let ctx = this.$refs.canvas.getContext('2d');
                    new Chart(ctx, {
                        type: 'bar',
                        data:{
                            labels: this.dates, 
                            datasets: [{
                                label: 'Zanieczyszczenie',
                                data: this.pollution-values,
                                //backgroundColor: 'rgb(39, 124, 212)',
                                borderColor: 'rgb(39, 124, 212)',
                                fill: 'false',
                                borderWidth: 3
    
                            }]
                        },
                        options:{
                            layout: {
                            padding: {
                                left: 25,
                                right: 25,
                                top: 50,
                                bottom: 25
                                }
                            },
                            title: {
                                display: true,
                                text: 'Prognoza zanieczyszczenia powietrza'
                            }
                        }
                    });
            }
        },
        mounted(){
            this.drawChart()
        }
    })
  
Vue.component('linechart',{
    props: ['dates','temperature-values'],
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
                    data: this.temperature-values,
                    backgroundColor: 'rgb(64, 186, 130)',
                    borderColor: 'rgb(64, 186, 130)',
                    borderWidth: 5,
                    fill: 'false'
                }]
            },
            options: {
                legend: {
                    display: false
                },
                layout: {
                    padding: {
                        left: 25,
                        right: 25,
                        top: 50,
                        bottom: 25
                    }
                },
                title: {
                    display: true,
                    text: 'Prognoza temperatur w najbliższych gdzinach'
}
            }

        });
        
        }
    },
    mounted(){
        this.drawChart()
    }
})

     Vue.component('mixedchart',{
        props: ['dates','rain-values', 'wind-values'],
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
                data: this.rain-values,
                //backgroundColor: 'rgb(39, 124, 212)',
                borderColor: 'rgb(39, 124, 212)',
                fill: 'false',
                borderWidth: 3,
                order: 2
    
            },
        { 
            label: 'Wiatr',
            data: this.wind-values,

            // Changes this dataset to become a line
            type: 'line',
            backgroundColor: 'rgb(64, 186, 130)',
            borderColor: 'rgb(64, 186, 130)',
            borderWidth: 3,
            fill:'false',
            order:1

        }]
        },
        options: {
                        
                        layout: {
                            padding: {
                                left: 25,
                                right: 25,
                                top: 50,
                                bottom: 25
                            }
                        },
                        title: {
                            display: true,
                            text: 'Prognoza opadów i prędkości wiatru'
        }
                    }
                      
                    });
            }
        },
        mounted(){
            this.drawChart()
        }
    })
    

</script>