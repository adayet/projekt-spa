<<<<<<< HEAD
<script>
    Vue.component('mixedchart',{
        props: ['x','ybar', 'yline'],
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
                data: this.ybar,
                //backgroundColor: 'rgb(39, 124, 212)',
                borderColor: 'rgb(39, 124, 212)',
                fill: 'false',
                borderWidth: 3,
                order: 2
    
            },
        { 
            label: 'Wiatr',
            data: this.yline,

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
    new Vue({
            el: '#app',
            data:{
                x: ['18:00', '21:00', '00:00', '03:00', '06:00', '09:00', '12:00', '15:00'],
                yline: ['2.85', '1.73', '0.78', '1.18', '2.24', '3.26', '3.15','2.76'],
                ybar: ['0.8', '0.5', '0', '0', '0', '0.7', '0.9']
            }
        })

=======
<script>
    Vue.component('mixedchart',{
        props: ['x','y'],
        template: `<canvas ref="canvas"></canvas>`,
        methods:{
            drawChart:function(){
                let ctx = this.$refs.canvas.getContext('2d');
                    new Chart(ctx, {
                        type: 'bar',
                        data: {
            labels: ['18:00', '21:00', '00:00', '03:00', '06:00', '09:00', '12:00', '15:00'],
            datasets: [{
                label: 'Opady',
                data: [0.8, 0.5, 0, 0, 0, 0.7, 0.9],
                //backgroundColor: 'rgb(39, 124, 212)',
                borderColor: 'rgb(39, 124, 212)',
                fill: 'false',
                borderWidth: 3,
                order: 2
    
            },
        { 
            label: 'Wiatr',
            data: [2.85,1.73, 0.78, 1.18, 2.24, 3.26, 3.15, 2.76],

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

>>>>>>> fcd07ee2404436a0a5e39a9a0668566e5eb2f4f6
</script>