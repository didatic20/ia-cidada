import { UsersService } from './../../services/users/users.service';
import { CustomValidatorsService } from './../../helpers/custom-validators.service';
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
    private users: UsersService
  ) { }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    this.formRegister = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmedPassword: ['', [Validators.required, Validators.minLength(6)]],
      acceptTermsOfUse: [false, [CustomValidatorsService.isChecked]]
    },
      { validator: CustomValidatorsService.equalValueValidator('password', 'confirmedPassword') },
    );
  }

  onSubmit(){
    this.users.create(this.formRegister).subscribe();
  }

}
