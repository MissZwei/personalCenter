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
						cityJson.cityList = getArea(subList[i].name)
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
console.log(getProvince("中国").toString()); 


	
