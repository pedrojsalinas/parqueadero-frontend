import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    `
    .authBlock {
        margin: 0 auto;
        max-width: 400px;
        background: white;
        padding: 30px 40px 10px;
        overflow: hidden;
        -webkit-box-shadow: 0 0 4px 0 rgba(0, 0, 0, .04);
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .04);
    }
    .example-container {
    display: flex;
    flex-direction: column;
    }
    .example-container>* {
        width: 100%;
    }
    .example-button-row button,
    .example-button-row a {
      margin-right: 8px;
    }

    `
  ]
})
export class RegisterComponent implements OnInit {

  constructor(
    private formbuild: FormBuilder,
  ) { }

  registroForm: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  // Mensajes de validacion de inputs en tiempo real.
  account_validation_messages = {
    'correo': [
      { type: 'required', message: 'El email es requerido' },
      { type: 'pattern', message: 'Ingrese un email válido' }
    ],
    'clave': [
      { type: 'required', message: 'La contraseña es requerida' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ]
  }

  /* Validador de formulario */
  buildForm(): void {
    this.registroForm = this.formbuild.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      correo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      pass: ['', Validators.required,
        //Validators.minLength(6), Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
      ]
    });
  }

   /* Registro usuario */
   registro() {
    //this.authService.SignUp(this.registroForm.value);
  }

}
