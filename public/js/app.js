'use strict';

var app = angular.module('nodeAuth', ['ngRoute']);

app.config(function($routeProvider) {

  	$routeProvider
		.when('/', {
			templateUrl: './views/home.html',
		  	controller: 'homeCtrl' 
		})
	    .when('/login', {
	  		templateUrl: './views/login.html',
	  		controller: 'loginCtrl'
	  	})
	    .when('/register', {
	  		templateUrl: './views/register.html',
	  		controller: 'registerCtrl'
	  	})
	  	.when('/products', {
	  		templateUrl: './views/products.html',
	  		controller: 'productsCtrl',
	  	})
	  	.otherwise({
	    	redirectTo: '/'
		});

});