var app = angular.module("SESOPApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/home.html"
	});

	$routeProvider.when("/aboutus", {
	   templateUrl: "templates/aboutus.html",
	});

});
