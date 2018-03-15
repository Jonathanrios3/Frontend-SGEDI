'use strict';
function usuariosService($resource,API){
  return $resource(API + '/api/users/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    },
    recoverPassword:{
			url:API+'/api/users/recuperarContrasena',
			method:'POST',
			params:{
				email:'@email'
			}
		},
    changePassword:{
      url:API+'/api/users/changePassword',
      method:'PUT',
      params:{
              old:'@old',
              new: '@new',
              id: '@id'
          }
    }
  });
}
usuariosService.$inject = ['$resource','API'];
angular.module('startUpApp')
.factory('usuariosService',usuariosService);
