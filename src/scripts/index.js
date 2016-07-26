var angular = require('angular');
require('angular-ui-date'); 
require('jquery-ui/themes/base/minified/jquery-ui.min.css');

angular.module("myApp", ['ui.date'])
		.controller("myController", function($scope){
			  $scope.dateOptions = {
			    changeYear: true,
			    changeMonth: true,
			    yearRange: '1900:-0',    
			  };
		});