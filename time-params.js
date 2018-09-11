function timeParams(params, month, year) {
	let getMonth = '';
	if (month > params && !parseInt(params / 12)) {																	   //传入的参数小于当前月份的时候				
		getMonth = month - params;
		if ( getMonth < 10 ) {
			getMonth = `0${getMonth}`;
		}
	} else if (params == month) {																										    //传入的参数等于当前月份的时候
		getMonth = 12;
		year = year - 1;
	} else if (month < params && (params-month) < 12 && month !==1 && month !== 12) {   //传入的参数计算得下一年的12月份 除1月和12月
		getMonth = 12 - Math.abs(month - params);
		if ( getMonth < 10 ) {
			getMonth = `0${getMonth}`;
		}
		year = year - 1;
	} else if (month < params && (params-month) >= 12 || month < params && month == 12) {//传入的参数大于当前月份并且传入的参数减去当前月份大于等于12的，或者传入的参数大于当前月份并且当前月份是12月的时候
		if (month == 1) {																																	 //当前月份是1月的时候			
				year = year - parseInt((params-month) / 12) - 1; 															 //当前月份是12月的时候
		} else if (month == 12) {																														
			year = year - parseInt(params / 12);
		} else if ( month !== 1 && month !== 12 && (params-month) >= 12) {									//当前月份既不是1月份也不是12月并且传入的参数减去当前月大于等于12的时候
				year = year - parseInt((params - month) / 12) - 1;
		}
		params = params % 12 ? (params-12) % 12 : 12;
		if (params == month) {
			getMonth = 12;
		} else {
			getMonth = month > params ? Math.abs(params - month) : 12 - Math.abs(month - params);
			getMonth =  getMonth < 10 ? `0${getMonth}` : getMonth;
		}

	}
	return `${year}-${getMonth}`;
}
function initTime(params) {
	var month, year;
	var date = new Date();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	var paramsTime = '';
	if ( typeof params !== 'undefined' ) {
		paramsTime = timeParams(params, month, year);
	}
	return paramsTime;
}