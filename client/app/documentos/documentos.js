'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('documentos', {
        url: '/documentos',
        template: '<documentos></documentos>',
        authenticate: true,
        parent:'dashboard-user'
      });
  });
