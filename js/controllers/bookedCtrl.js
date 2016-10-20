angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {

    // $scope.travelInfo = mainSrv.travelInfo;

$scope.booked = mainSrv.getUser($stateParams.id);


});
