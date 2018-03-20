'use strict';
 function packagesService($resource,API){
      return $resource(API + '/api/packages/:id',{
        id:'@id'
      },{
        update:{
          method:'PUT'
        }
      });
  }
  packagesService.$inject = ['$resource','API'];
  angular.module('startUpApp')
    .factory('packagesService', packagesService);

