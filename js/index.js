$(function () {
    $('.safety .button').on('click',function () {
        console.log(1)
    })


    var main1 = document.getElementById('main1')
        var main2 = document.getElementById('main2')
        var main3= document.getElementById('main3')
        var main4= document.getElementById('main4')
        var usable=3,nousable=9,usableSum=12;
        myChart1(usable,nousable,main1);
        myChart1(usable,nousable,main2);
        myChart1(usable,nousable,main3);
        myChart1(usable,nousable,main4);
        function myChart1(usable,nousable,id) {
            var myChart1 = echarts.init(id);
            // 指定图表的配置项和数据
            option = {
                color: ["#f0d140","#4086f0"],
                series: [
                    {
                        type:'pie',
                        radius: ['60%', '80%'],
                        avoidLabelOverlap: true,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '0',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data:[
                            {value:usable, name:'直接访问'},
                            {value:nousable, name:'邮件营销'},
                        ]
                    }
                ]
            };
            myChart1.setOption(option)

        };

    /*元*/
    function getNum(num) {
        var hundredmillion=num/100000000>=1?parseInt(num/100000000)+"亿" :'';
        var million = num%100000000/10000>=1?parseInt(num%100000000/10000)+"万":'';
        var unit = Math.floor(num%100000000%10000 * 1000)/1000
        console.log(unit)
        return hundredmillion + million + unit
    }
    console.log(getNum(22222222222.4))
    $.ajax({
        type: "GET", //用GET方式传输
        url: 'http://120.27.226.119:10098/officialData', //目标地址
        headers: {
            "Accept": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        },
        error: function (error) {
            console.log(error)
        },
        success: function (data) {
            $('.tradeTotalAmount').html(getNum(data.data.tradeTotalAmount));
            $('.tradeTotalNumber').html(data.data.tradeTotalNumber);
            $('.investorCumulativeIncome').html(getNum(data.data.investorCumulativeIncome));
            $('.borrowerTotalNumber').html(data.data.borrowerTotalNumber);
            $('.investorTotalNumber').html(data.data.investorTotalNumber);
            $('.fastestFullTenderDate').html(data.data.fastestFullTenderDate);
            $('.investorAmountAvg').html(getNum(data.data.investorAmountAvg));
            $('.borrowerTotalAmount').html(getNum(data.data.borrowerTotalAmount));
            $('.borrowerTotalAmountAvg').html(getNum(data.data.borrowerTotalAmountAvg));
            $('.agentAmount').html(data.data.agentAmount);
            $('.agentStillNumber').html(data.data.agentStillNumber);
            $('.overdueTotalAmount').html(data.data.overdueTotalAmount);
            $('.overdueTotalNumber').html(data.data.overdueTotalNumber);
            $('.overdueNinetyDayTotalNumber').html(data.data.overdueNinetyDayTotalNumber);
            $('.overdueNinetyDaysTotalAmount').html(data.data.overdueNinetyDaysTotalAmount);
            $('.correlationBorrowerAmount').html(data.data.correlationBorrowerAmount);
            $('.correlationBorrowerNumber').html(data.data.correlationBorrowerNumber);
            // $('.').html();
            // $('.').html();
            // $('.').html();
            // $('.').html();
            // $('.').html();
            console.log(data.data)
            console.log(data.data.overdueNinetyDayTotalNumber)
            console.log(getNum(data.data.tradeTotalAmount))
        }

    });
})
