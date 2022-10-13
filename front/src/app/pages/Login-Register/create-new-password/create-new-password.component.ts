import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss']
})
export class CreateNewPasswordComponent implements OnInit {

  createNewPasswordForm!: FormGroup; //hace referencia a nuestro fomulario de registro del html
  public email: string | undefined;
  public token: any;
  
  hidePwd = true;
  hideConfirmPwd = true;

  constructor(private router: Router,
     private route: ActivatedRoute,
     private ForgotSvc: ForgotPasswordService,
     private http: HttpClient
      ) {
      this.createNewPasswordForm = this.createFormGroup(); //llamaremos la funcion createFormGroup para que se inicialice
      }

  ngOnInit(): void {
    this.createNewPasswordForm = this.createFormGroup(); //llamaremos la funcion createFormGroup para que se inicialice
    this.token = this.route.snapshot.paramMap.get('token');
    //console.log(this.token);
  }



    //método para las validaciones de los campos provenientes del formulario
    createFormGroup(): FormGroup {
      //retornaremos un FormGroup con las validaciones correspondientes
      return new FormGroup({
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(100)
        ])
      });
    }

    submit(): void {
      const formValue = this.createNewPasswordForm.value;
      let data = {
        newPassword: formValue.password,
        resetToken: this.token
      }
      this.ForgotSvc.createNewPassword(data).subscribe((result:any) => {
        if(result) {
          Swal.fire({
            title: 'Contraseña Guardada',
            text: 'Tu contraseña se ah cambiado exitosamente!'
          });
          this.router.navigate(["login"]);
        }
      });
    }


    getErrorMessage(field: string) {
      let message = '';
      var form = this.createNewPasswordForm.get(field);
      if (form != null) {
        if (form.hasError('required')) {
          message = 'Campo requerido';
        } else if (form.hasError('minlength')) {
          message = 'El mínimo de caracteres son 3';
        } else if (form.hasError('maxlength')){
          message = 'Excede el máximo de caracteres';
        } else if (form.hasError('email')){
          message = 'Email incorrecto';
        } else if (form.hasError('pattern')){
          message = 'Solo se acepta caracteres sin espacio'
        }
      }
      return message;
    }
  
    isValidField(field: string) {
      var form = this.createNewPasswordForm.get(field);
      var flag = false;
      if (form != null) {
        flag = form.touched || form.dirty && !form.valid
      }
  
      return flag;
    }

}
