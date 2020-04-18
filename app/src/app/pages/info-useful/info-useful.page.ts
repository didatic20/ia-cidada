import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-info-useful',
  templateUrl: './info-useful.page.html',
  styleUrls: ['./info-useful.page.scss'],
})
export class InfoUsefulPage implements OnInit {

  formForgot: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formForgot = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmaremail: ['', [Validators.required, Validators.email]]
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formForgot.value);
  }

}
