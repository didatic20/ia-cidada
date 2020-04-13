import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AlertController, NavController } from '@ionic/angular';

const TOKEN_KEY = environment.tokenKey;
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public user;
  public boolIsLoggedIn = false;

  constructor(
    private alertCtrl: AlertController,
    private http: HttpClient,
    private navCtrl: NavController
  ) { }

  public getToken() {
   return localStorage.getItem(TOKEN_KEY);
  }

  public login(_email: string, _password: string) {
    return this.http.post<any>(`${API_URL}/auth`, { email: _email, password: _password })
      .pipe(map(response => {
          console.log('AuthService Login: ', response);
          if(response['status'] === 200){
            localStorage.setItem(TOKEN_KEY, response['token']);
            this.user = response['data'];
            this.boolIsLoggedIn = true;
            this.navCtrl.navigateRoot('/home');
          } else {
            this.showAlert('Credenciais inválidas');
          }
        }),
        catchError(e => {
          const error = e.error.message || e.statusText;
          console.log('catchError in login: ', error);
          this.showAlert(error);
          throw new Error(error);
        })
      );
  }

  public logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.boolIsLoggedIn = false;
  }

  async showAlert(msg: string) {
    const alert = await this.alertCtrl.create({
      message: msg,
      header: 'Erro',
      buttons: ['OK']
    });
    await alert.present();
  }

  public testApi() {
    return this.http.get(API_URL)
      .pipe(map(res => console.log(res)));
  }
}
