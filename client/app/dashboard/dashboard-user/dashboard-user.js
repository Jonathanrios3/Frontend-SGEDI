'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard-user', {
        url: '/dashboard-user',
        authenticate: true,
        template: '<dashboard-user></dashboard-user>'
      });
  });
