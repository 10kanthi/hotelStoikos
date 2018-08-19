// 'use strict';
angular.module('testapp', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {
    // Set of Photos
    $scope.photos = [
        {src: 'css/img/room13.jpg', desc: 'Image 01'},
        {src: 'css/img/room16.jpg', desc: 'Image 02'},
        {src: 'css/img/room8.jpg', desc: 'Image 03'},
        {src: 'css/img/room22.jpg', desc: 'Image 04'},
        {src: 'css/img/night.jpg', desc: 'Image 05'},
        {src: 'css/img/Bar_01.jpg', desc: 'Image 06'}
    ];
    // initial image index
    $scope._Index = 0;
    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };
    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };
    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };
    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
});