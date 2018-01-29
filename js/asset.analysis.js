$(function(){
	$(".bxg-list").click(function(){
		$(".head-list-content").toggle();
	});
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
			tabSwiper.slideTo($(this).index());
	});
		
	$(".bxg-tabs a").click(function(e){
			e.preventDefault();
			tabSwiper.slideTo($(this).index());
	});
	var assetObj = document.getElementById('bxg-asset-chart');
	var earningsObj = document.getElementById('earnings-chart');
	var resizeAssetChart = function () {
	    assetObj.style.width = window.innerWidth/3+'px';
	    assetObj.style.height = window.innerHeight/3+'px';
	    earningsObj.style.width = window.innerWidth/3+'px';
	    earningsObj.style.height = window.innerHeight/3+'px';
	};
	resizeAssetChart();
	var assetChart = echarts.init(assetObj);
	var earningsChart = echarts.init(earningsObj);
	var assetData = [
	                {value:335, name:'交易'},
	                {value:310, name:'升级'},
	                {value:234, name:'充值'},
	                {value:135, name:'提现'},
	                {value:154, name:'红包'},
	                {value:234, name:'转账'},
	                {value:135, name:'保险'},
	                {value:154, name:'公益'},
	                {value:154, name:'推荐'}
	            ];
	var earningsData = [
	                {value:335, name:'待收益'},
	                {value:310, name:'累计收益'},
	                {value:234, name:'红包收益'},
	                {value:135, name:'提现'},
	                {value:154, name:'优惠总额'}
	            ];
    // 指定图表的配置项和数据
    var sumAsset = '总资产\n\n123456895';
    var sumEarnings = '总收益\n\n123456895';
    function setOption(sum,data){
    	return assetOption = {
	    	graphic:{
	    		type:'text',
	    		left:'center',
	    		top:'center',
	    		z:2,
	    		zlevel:100,
	    		style:{
	    			text:sum,
	    			x:100,
	    			y:100,
	    			textAlign:'center'
	    		}
	    	},
	    	series: [
	        	{
	            	name:'访问来源',
	            	type:'pie',
	            	center:['50%','50%'],
	            	radius: ['50%', '60%'],
		            label: {
		                normal: {
		                    formatter:'{b}{d}%',
		                    rich: {
		                        b: {
		                            fontSize: 12,
		                            lineHeight: 33
		                        }
		                    }
		                }
		            },
		            labelLine: {  
		            	normal: {
	                    	show: true,  
		                    length:5
	                	}    
	               	},
		            data:data
		        }
		    ]
		};
    }
    
    assetChart.setOption(setOption(sumAsset,assetData));
    earningsChart.setOption(setOption(sumEarnings,earningsData));
    window.addEventListener("resize", function () {
    	resizeAssetChart();  
		assetChart.resize();
		earningsChart.resize();
    });
});
