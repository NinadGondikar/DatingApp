import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallBack: () => any) {
    alertify.confirm(message, (e: any) => {
      if (e) {
        okCallBack();
      } else { }
    });
  }

  success(mesage: string) {
    alertify.success(mesage);
  }

  error(mesage: string) {
    alertify.error(mesage);
  }

  warning(mesage: string) {
    alertify.warning(mesage);
  }

  message(mesage: string) {
    alertify.message(mesage);
  }

}
