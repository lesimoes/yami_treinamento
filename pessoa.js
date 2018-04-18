var request = require('request');

var getNameById = function(id){
	var endpoint = `https://swapi.co/api/people/${id}/?format=json`;
	var parms = {url:endpoint,method:'GET'}

	return new Promise((resolve, reject) => {
		request(parms,function(error,response,body){
			if(body){
				resolve(JSON.parse(body).name);
			}
			if(error)
				reject('Deu ruim')
		});
	})

}

var searchGoogle = function(name) {
	var endpoint = `https://www.google.com.br/search?q=${name}`
	var parms = {url:endpoint,method:'GET'}
	debugger
	return new Promise((resolve, reject) => {
		request(parms, function(err, response, body){
			if(body)
				resolve(body)
			if(err)
				reject(err)
		})
	})
}
module.exports.searchGoogle = searchGoogle;
module.exports.getNameById = getNameById;
