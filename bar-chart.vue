<script>

    Vue.component('barchart',{
        props: ['x','y'],
        template: `<canvas ref="canvas"></canvas>`,
        methods:{
            drawChart:function(){
                let ctx = this.$refs.canvas.getContext('2d');
                    new Chart(ctx, {
                        type: 'bar',
                        data:{
                            labels: this.x, 
                            datasets: [{
                                label: 'Zanieczyszczenie',
                                data: this.y,
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
    
</script>