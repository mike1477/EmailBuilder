import { Injectable } from '@angular/core';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {

  constructor() { }

  MERGE_FIELD_MODAL_CONGIG:NgbModalOptions={
    size: "lg"
  }
}
