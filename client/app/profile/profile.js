'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
  $stateProvider
    .state('profile', {
      url: '/profile',
      authenticate: true,
      template: '<profile></profile>'
    })
       .state('profile-update', {
        url: '/profile-update',
        authenticate: true,
        template: '<profile-update></profile-update>'
      })
      .state('change-password', {
      url: '/change-password',
      authenticate: true,
      template: '<change-password></change-password>'
    });
});
