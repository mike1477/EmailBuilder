import { Injectable } from '@angular/core';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { TextElement } from '../models/email/elements/textElement';
import { ButtonElement } from '../models/email/elements/buttonElement';
import { DividerElement } from '../models/email/elements/dividerElement';
import { ImageElement } from '../models/email/elements/imageElement';
import { RowOption } from 'src/app/email-builder/models/rowOption';

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {

  constructor() { }

  MERGE_FIELD_MODAL_CONGIG: NgbModalOptions = {
    size: "lg"
  }

  ELEMENT_OPTIONS = [
    {
      title: 'Text',
      type: TextElement,
      icon: 'format_size',
      text: 'Add Text'
    },
    {
      title: 'Button',
      icon: "radio_button_checked",
      type: ButtonElement,
      text: 'Add Button'
    },
    {
      title: 'Divider',
      icon: "view_stream",
      type: DividerElement,
      text: 'Add Divider'
    },
    {
      title: 'Image',
      icon: "insert_photo",
      type: ImageElement,
      text: 'Add Image'
    },
  ];

  ROW_OPTIONS: Array<RowOption> = [
    {
      title: 'single row',
      poster: 'https://drive.google.com/uc?id=1bVgvI_BG9bl85wXdDsAesE_8LZcn3pyP',
      columnDefinitions: [600]
    },
    {
      title: '10 / 2 row',
      poster: 'https://drive.google.com/uc?id=1ccfJylQqoOGzAd7phgv0a5p9xvB4uLO7',
      columnDefinitions: [450, 150]
    },
    {
      title: '3 / 9 row',
      poster: 'https://drive.google.com/uc?id=1VSPd9GlafcTNborSpPbLNTAE_7V0cJMV',
      columnDefinitions: [200, 400]
    },
    {
      title: '6 / 6 row',
      poster: 'https://drive.google.com/uc?id=1r3YJbRDydPzVtF_cZigaj4xBCvDZO6dQ',
      columnDefinitions: [300, 300]
    },
    {
      title: '9 / 3 row',
      poster: 'https://drive.google.com/uc?id=1GY7ayA5HqFYck6srV9eoITNs02zkHqx4',
      columnDefinitions: [400, 200]
    },
    {
      title: '4/4/4 row',
      poster: 'https://drive.google.com/uc?id=1InpMYPVfYb5UUOjj7KNfh0CtxHGcRkHZ',
      columnDefinitions: [200, 200, 200]
    },
    {
      title: '3/3/6 row',
      poster: 'https://drive.google.com/uc?id=1WnYaIEVrloy-n7Fm0rFPAW-4jMJbjvJy',
      columnDefinitions: [300, 150, 150]
    },
    {
      title: '3/3/6 row',
      poster: 'https://drive.google.com/uc?id=1nasFuhuuGsweGP-OdgmCiWH5OvdJ7v0-',
      columnDefinitions: [150, 150, 300]
    },

  ]
}
