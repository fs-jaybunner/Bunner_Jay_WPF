//1312-WPF-O-01 Jay Bunner

	var TemperatureEntered;
	TemperatureEntered = prompt('Enter temperature in C or F');
	//var Temperature = prompt('Enter temperature');
	//var CorF = prompt('Enter C for Celsius or F for Farenheit');

	//32F or 0C
	var TempCorF = TemperatureEntered.substr(-1,1);
	if (TempCorF.toUpperCase()=="C") {
		//Convert C to F
		//C x 9/5 + 32 = F
		var FarTemp=parseFloat(TemperatureEntered)*(9/5)+32;
		console.log('The temperature is '+FarTemp+' degree Farenheit.');
	} else {
		//Convert F to C
		//(F - 32) x 5/9 = C
		var CelTemp=(parseFloat(TemperatureEntered)-32)*(5/9);
		console.log('The temperature is '+CelTemp+' degree Celsius.');
	};

