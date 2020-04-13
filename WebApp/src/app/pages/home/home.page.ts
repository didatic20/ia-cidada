import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authService: AuthenticationService
  ) {}

  public login() {
    const credentials = {
      email: 'iagorocha1992@gmail.com',
      password: '123mudar'
    };

    this.authService.login(credentials.email, credentials.password).subscribe((res) => {
      console.log('HOMEPAGE: ', this.authService.user);
    });
  }
}
