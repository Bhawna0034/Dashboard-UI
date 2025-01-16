const ctx = document.querySelector('#myChart');
const myChart = new Chart(
    ctx,
    {
        type: 'line',
        data: {
            datasets: [
                {
                    data: [
                        { x: '01 Jan', y: 1 },
                        { x: '01 Feb', y: 5 },
                        { x: '01 Mar', y: 15 },
                        { x: '01 Apr', y: 8 },
                        { x: '01 May', y: 6 },
                        { x: '01 Jun', y: 5 },
                        { x: '01 Jul', y: 8 },
                        { x: '01 Aug', y: 6 },
                        { x: '01 Sep', y: 18 },
                        { x: '01 Oct' }
                    ],
                    label: 'Value 1',
                    // borderColor: "rgba(99, 102, 241, 1)",
                    borderColor: '#6F6AF8',
                    tension: 0.4
                },
                {
                    data: [
                        {x: '01 Jan', y: 4 },
                        {x: '01 Feb', y: 4.8},
                        {x: '01 Mar', y: 5.1},
                        {x: '01 Apr', y: 5},
                        {x: '01 May', y: 11},
                        {x: '01 Jun', y: 12},
                        {x: '01 Jul', y: 8},
                        {x: '01 Aug', y: 10},
                        {x: '01 Sep', y: 19},
                        {x: '01 Oct'}
                    ],
                    label: 'Value 2',
                    // borderColor: "rgba(79, 70, 229, 1)"
                    borderColor: '#4F4C9C',
                    tension: 0.4
                    
                }


            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    ticks: {
                        color: '#A7A7CC'
                    },
                    grid:{
                        display:false,
                    }

                },
                y: {
                    ticks: {
                        stepSize: 5,
                        callback: function (value) {
                            return value.toString().padStart(2, '0') + 'K';
                        },
                        color: '#A7A7CC'
                    },
                    grid: {
                        color: '#EEEEEE'
                    }
                }
            }
        }
    }
)