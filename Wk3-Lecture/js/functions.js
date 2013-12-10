//functions.js

function GetLanguage(isocode) {
	var lang;
	lang = 	(isocode=="US") ? 'English' :
				(isocode=="GB") ? 'English' :
				(isocode=="DE") ? 'German' :
				'Unknown';
	return lang;
}



