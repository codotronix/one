var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.controller('mainController', function($scope, $http){
	//load the menu object
	$http.get("data/menu.json").success(function(response){
		$scope.mainMenuObj = response;
		$scope.mainMenuList = Object.keys($scope.mainMenuObj);
	})
	
});

//The Router

mainApp.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/:name', {
                  templateUrl: 'template.html',
                  controller: 'manuController'
               });
         }]);

		mainApp.controller('manuController', function($scope, $route, $routeParams) {
			$route.current.templateUrl = '/' + $routeParams.name + ".html";
			var pageName = $routeParams.name;
			var arrayOfSubPages = $scope.mainMenuObj[pageName];
			console.log(arrayOfSubPages);
         });
