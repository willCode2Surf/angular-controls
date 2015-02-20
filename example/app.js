'use strict';

var app = angular.module('app', ['ngWebControls']);


app.controller('AppCtrl', function($scope) {
  // options to customize controls
    $scope.dropdownOptions = {
        text: "test test"
    }; 
    
  // build out store where this is pulling select options from a rest endpoint or some other static/fixture source
  $scope.ddSelectOptions = [
    {
      text: 'Page Color',
      divider: true
    }, {
      text: 'Green',
      value: 'green'
    }, {
      text: 'Red',
      value: 'red'
    }
  ];

  $scope.ddSelectSelected = {
    text: "Select an page option"
  };
    
});
