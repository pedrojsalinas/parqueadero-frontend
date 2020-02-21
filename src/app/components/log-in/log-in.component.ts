import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
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
export class LogInComponent implements OnInit {

  constructor(
    private formbuild: FormBuilder,
  ) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

   /* Validador de formulario */
   buildForm(): void {
    this.loginForm = this.formbuild.group({
      correo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      pass: ['', Validators.required,
        //Validators.minLength(6), Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
      ]
    });
  }

  login() {
    //this.authService.SignIn(this.loginForm.value);
  }

}
