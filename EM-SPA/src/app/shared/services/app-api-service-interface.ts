import { Observable } from 'rxjs';
import { EmailBody } from '../models/email/body';

export interface IAppApiService {
    getEmailTemplate(): Observable<EmailBody>;
    saveEmailTempate(template: EmailBody): Observable<EmailBody>;
}