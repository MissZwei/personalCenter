var district;
var opts = {
	subdistrict: 1,
	level: 'city',
	showbiz: false
};
district = new AMap.DistrictSearch(opts);
function getProvince(area) {
	var city = [];
	district.search(area, function(status, result) {
		if(status == 'complete') {
			var data = result.districtList[0];
			var subList = data.districtList;
			for(var i = 0; i < subList.length; i++) {
				var checkCode = {};
				if(!city[i]) {
					checkCode.adcode = subList[i].adcode;
					checkCode.name = subList[i].name;
					checkCode.cityList = getCity(subList[i].name);
					city.push(checkCode);
				}
			}
		}
	});
	return city;
}

function getCity(area) {
	var citylist = [];
	district.search(area, function(status, result) {
		if(status == 'complete') {
			var data = result.districtList[0];
			var subList = data.districtList;
			if(subList == undefined) {
				return '';
			} else {
				for(var i = 0; i < subList.length; i++) {
					var cityJson = {};
					if(!citylist[i]) {
						cityJson.adcode = subList[i].adcode;
						cityJson.name = subList[i].name;
						cityJson.areaList = getArea(subList[i].name)
						citylist.push(cityJson);
					}
				}
			}

		}

	});
	return citylist;
}

function getArea(area) {
	var arealist = [];
	district.search(area, function(status, result) {
		if(status == 'complete') {
			var data = result.districtList[0];
			var subList = data.districtList;
			if(subList == undefined) {
				return '';
			} else {
				for(var i = 0; i < subList.length; i++) {
					var cityJson = {};
					if(!arealist[i]) {
						cityJson.adcode = subList[i].adcode;
						cityJson.name = subList[i].name;
						arealist.push(cityJson);
					}
				}
			}

		}

	});
	return arealist;
}
var citySel = new MobileSelect({
				   	trigger: '#sel-address',
				    title: '多项选择',
				    wheels: [
				    	 {
						    data: [getProvince("中国")]
						}
				    ],
//				    keyMap: {
//			            id:'id',
//			            value: 'name',
//			            childs :'childs'
//			       	},
				    keyMap: {
			            id:'adcode',
			            value: 'name',
			            childs :'cityList'
			       	},
//				    position:[0, 1, 0, 1, 0],
				    transitionEnd:function(indexArr, data){
				        //console.log(data);
				    },
				    callback:function(indexArr, data){
//				        console.log(data);
				    }
				});
//				
