'use strict';
(function(){

class ChangePasswordComponent {
  constructor(usuariosService,$timeout,AuthService) {
  	this.AuthService = AuthService;
    this.usuariosService = usuariosService;
    this.$timeout = $timeout;
    this.dataChangePass = {oldPassword:undefined,
      newPassword:undefined,
      newPasswordC:undefined};
    this.success = undefined;
    this.seguridadPass = undefined;
    this.equalPass = undefined;
    this.message = undefined;

  }

cambiarPass(){
    this.message = undefined;
      if (this.dataChangePass.newPasswordC != undefined || this.dataChangePass.newPassword != undefined && this.dataChangePass.oldPassword && undefined) {
        if (this.dataChangePass.newPasswordC != "" || this.dataChangePass.newPassword != "" || this.dataChangePass.oldPassword || "") {
          this.seguridadPass = undefined;
          this.equalPass = undefined;
          this.usuariosService.changePassword(({old:this.dataChangePass.oldPassword , new:this.dataChangePass.newPassword , id:this.AuthService.idUsuario()})).$promise
          .then(response =>{
            console.log(response);
            this.dataChangePass = {oldPassword:undefined,
              newPassword:undefined,
              newPasswordC:undefined};
            this.success = "Contraseña cambiada correctamente";
            $('.collapse').collapse('hide');
            this.$timeout(()=>{
              this.success = undefined;
              this.$scope.$apply();
            },3000);
          })
          .catch(err =>{
            console.log(err);
            this.message = err.data;
          });
        }else{
          this.message = 'Ningun campo puede estar vacio';
        }
      }else{
        this.message = 'Todos los campos son requeridos';
      }
    }

}

angular.module('startUpApp')
  .component('changePassword', {
    templateUrl: 'app/profile/change-password/change-password.html',
    controller: ChangePasswordComponent,
    controllerAs: 'vm'
  });

})();

