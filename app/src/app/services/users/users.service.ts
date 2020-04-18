import { NavController } from '@ionic/angular';
import { NotificationsService } from './../utils/notifications.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private notifications: NotificationsService
  ) { }

  create(formUser) {
    try {
      this.notifications.showLoading();
      return this.http.post(`${this.apiUrl}/user/create`, formUser)
        .pipe(
          map(res => {
            this.notifications.hideLoading();
            const msg = res['message'] || 'Usuário criado com sucesso!';
            this.notifications.showToast(msg);
            this.navCtrl.navigateRoot('/login');
          }),
          catchError(e => {
            this.notifications.hideLoading();
            console.log(e);
            const error = e.error.message || e.statusText;
            this.notifications.showToast(error, 'danger');
            throw new Error(e);
          }));
    } catch (error) {
      console.log(error);
      this.notifications.hideLoading();
    }
  }
}
