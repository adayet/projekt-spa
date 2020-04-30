<script>
Vue.component('linechart',{
    props: ['x','y'],
    template: `<canvas ref="canvas"></canvas>`,
    methods:{
        drawChart:function(){
            let ctx = this.$refs.canvas.getContext('2d');
            new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.x,
                datasets: [{
                    label: 'Temperatura',
                    data: this.y,
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
</script>
