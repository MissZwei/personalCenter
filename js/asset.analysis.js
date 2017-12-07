$(function(){
	var tabSwiper = new Swiper('.bxg-asset', {
      	autoHeight: true, //enable auto height
		speed:500,
		resistanceRatio : 0,
		onSlideChangeStart: function(){
			$(".bxg-tabs a.bxg-active").removeClass('bxg-active');
			$(".bxg-tabs a").eq(tabSwiper.activeIndex).addClass('bxg-active');
		}
		
    });
    $(".bxg-tabs a").on('touchstart mousedown',function(e){
			e.preventDefault();
//			$(".tabs .active").removeClass('active');
//			$(this).addClass('active');
			tabSwiper.slideTo($(this).index());
	});
		
	$(".bxg-tabs a").click(function(e){
			e.preventDefault();
			tabSwiper.slideTo($(this).index());
	});
	var assetObj = document.getElementById('bxg-asset-chart');
	var resizeAssetChart = function () {
	    assetObj.style.width = window.innerWidth/3+'px';
	    assetObj.style.height = window.innerHeight/3+'px';
	};
	resizeAssetChart();
	var assetChart = echarts.init(assetObj);
	
	
    // 指定图表的配置项和数据
    var assetOption = {
//  	graphic:{
//  		type:'text',
//  		left:'center',
//  		top:'center',
//  		z:2,
//  		zlevel:100,
//  		style:{
//  			text:'总资产',
//  			x:100,
//  			y:100,
//  			textAlign:'center',
//  			width:30,
//  			height:30
//  		}
//  	},

    	series: [
        	{
            	name:'访问来源',
            	type:'pie',
            	radius: ['70%', '80%'],
            	avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '20',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
	            ]
	        }
	    ]
	};
    assetChart.setOption(assetOption);
    window.addEventListener("resize", function () {
    	resizeAssetChart();  
		assetChart.resize();
    });
});
