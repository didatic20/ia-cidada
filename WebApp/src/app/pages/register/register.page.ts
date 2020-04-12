import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
function validaForm(form) {
  if(form.userName.value == "" || form.userName.value == null || form.userName.value.lenght < 3){
    alert("Por favor, indique um nome!");
    form.userName.focus();
    return false;
  }
  if(form.lastName.value == "" || form.lastName.value == null || form.lastName.value.lenght < 3){
    alert("Por favor, indique um nome!");
    form.lastName.focus();
    return false;
  }
  if(form.userEmail.value.indexOf("@") == -1 ||
     form.userEmail.value.indexOf(".") == -1 ||
     form.userEmail.value == "" || 
     form.userEmail.valeu == null){
       alert("Por favor, indique um e-mail válido.");
       form.userEmail.focus();
       return false;
  }
}