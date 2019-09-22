import { Injectable, Inject } from '@angular/core';
import { IAppApiService } from './app-api-service-interface';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';
import { EmailBody } from '../models/email/body';

const EMAIL_LOCAL_STORAGE_KEY = "EMAIL_LOCAL_STORAGE_KEY";

@Injectable({
  providedIn: 'root'
})
export class AppApiServiceService implements IAppApiService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  getEmailTemplate(): Observable<EmailBody> {
    return new Observable<EmailBody>((observer) => {
      observer.next(this.storage.get(EMAIL_LOCAL_STORAGE_KEY));
      observer.complete();
      return { unsubscribe() { } }
    });
  }
  saveEmailTempate(template: EmailBody): Observable<EmailBody> {
    this.storage.set(EMAIL_LOCAL_STORAGE_KEY, template);
    return new Observable<EmailBody>((observer) => {
      observer.next(template);
      observer.complete();
      return { unsubscribe() { } }
    });
  }

}
