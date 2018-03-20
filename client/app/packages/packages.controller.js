'use strict';
(function(){

class PackagesComponent {
	constructor(packagesService) {
   		this.packagesService = packagesService;
  	}

  	$onInit(){
  		this.packagesService.query().$promise
    	.then(res =>{
      		this.paquetes = res;
      		console.log('Paquetes ',this.paquetes);
    	})
  	}


  
}

angular.module('startUpApp')
  .component('packages', {
    templateUrl: 'app/packages/packages.html',
    controller: PackagesComponent,
    controllerAs: 'vm'
  });
})();
