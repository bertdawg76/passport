'use strict';

app.service('productService', ['$http', function($http) {

	this.getProducts = function(skip) {
		var url = '/api/products';

		if (!skip) { skip = 0; }

		url += '?skip=' + skip;
		
		return $http.get(url).
		  then(function(response) {
		  	console.log(response);
		  	return response.data;
		  }, function(err) {
			console.log('Error: ', err);
		  });
	};

	this.addProduct = function(body) {
		return $http.post('/api/products', body).
		  then(function(response) {
			console.log(response);
			return response.data;
		  }, function(err) {
			console.log('Error: ', err);
		  });
	};

}]);