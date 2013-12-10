//Ternary Operator

languagespoken = 	(countrycode=="US") ? 'English' :
						(countrycode=="GB") ? 'English' :
						(countrycode=="DE") ? 'German' :
						'Unknown';
console.log('Ternary result: '+languagespoken);