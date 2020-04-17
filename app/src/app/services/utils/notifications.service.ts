import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  async showToast(msg: string, color?: string, pos?: 'top' | 'middle' | 'bottom', durationInSeconds?: number) {
    if (durationInSeconds) {
      durationInSeconds *= 1000;
    }
    const toast = await this.toastCtrl.create({
      message: msg,
      color: color || 'success',
      position: pos || 'top',
      duration: durationInSeconds || 3000
    });
    toast.present();
  }

  async showLoading(msg?: string, durationInSeconds?: number) {
    if (durationInSeconds) {
      durationInSeconds *= 1000;
    }
    const loading = await this.loadingCtrl.create({
      message: msg,
      duration: durationInSeconds
    });
    loading.present();
  }

  public hideLoading(){
    return this.loadingCtrl.dismiss();
  }
}
