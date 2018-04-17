var request = require('request');

var getNameById = function(id,callback){
	var endpoint = `https://swapi.co/api/people/${id}/?format=json`;
	var parms = {url:endpoint,method:'GET'}

	request(parms,function(error,response,body){
		if(body){
			callback(JSON.parse(body).name);
		}
	});
}

module.exports.getNameById = getNameById;
