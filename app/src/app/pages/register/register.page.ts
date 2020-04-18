import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formRegister = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarsenha: ['', [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formRegister.value);
  }

}
