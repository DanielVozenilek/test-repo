(function(){
	'use strict';

	angular.module("clock", []).directive("clock", [function(){
		return {
		    restrict: 'ACEM',
		    scope: {
		    	offset: '@'
		    },
		    templateUrl: '/scripts/directives/clock/clock.tpl.html',
		    controller: function($scope, $element, $attrs){

		    }
		  };
	}]);

}());