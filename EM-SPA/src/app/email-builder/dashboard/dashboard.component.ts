import { Component, OnInit, } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Row } from 'src/models/row';
import { RowOption } from 'src/app/interfaces/rowOption';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('rows', {
      copy: (el, source) => {
        return source.id === 'layout-row-options';
      },
      copyItem: (rowOption: any) => {
        var newRow = new Row(rowOption.columnDefinitions);
        return newRow;
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'layout-row-options';
      }
    });
   }

  ngOnInit() {
  }

  elementOptions = [
    {
      title: 'Text',
      poster: '../../../assets/angular.png',
      layoutType:"layout-element"
    },
    {
      title: 'Email',
      poster: '../../../assets/angular.png',
      icon: "local_post_office",
      layoutType:"layout-element"
    },
    {
      title: 'Video',
      poster: '../../../assets/angular.png',
      icon: "videocam",
      layoutType:"layout-element"
    },
    {
      title: 'Divider',
      poster: '../../../assets/angular.png',
      icon: "view_stream",
      layoutType:"layout-element"
    },
    {
      title: 'Social',
      poster: '../../../assets/angular.png',
      icon: "public",
      layoutType:"layout-element"
    },
  ];

  rowOptions:Array<RowOption> = [
    {
      title: 'single row',
      poster: 'https://drive.google.com/uc?id=1bVgvI_BG9bl85wXdDsAesE_8LZcn3pyP',
      columnDefinitions:[600]  
    },
    {
      title: '10 / 2 row',
      poster: 'https://drive.google.com/uc?id=1ccfJylQqoOGzAd7phgv0a5p9xvB4uLO7',
      columnDefinitions:[450, 150]  
    },
    {
      title: '3 / 9 row',
      poster: 'https://drive.google.com/uc?id=1VSPd9GlafcTNborSpPbLNTAE_7V0cJMV',
      columnDefinitions:[200, 400]  
    },
    {
      title: '6 / 6 row',
      poster: 'https://drive.google.com/uc?id=1r3YJbRDydPzVtF_cZigaj4xBCvDZO6dQ',
      columnDefinitions:[300, 300]  
    },
    {
      title: '9 / 3 row',
      poster: 'https://drive.google.com/uc?id=1GY7ayA5HqFYck6srV9eoITNs02zkHqx4',
      columnDefinitions:[400, 200]  
    },
    {
      title: '4/4/4 row',
      poster: 'https://drive.google.com/uc?id=1InpMYPVfYb5UUOjj7KNfh0CtxHGcRkHZ',
      columnDefinitions:[200, 200, 200]  
    },
    {
      title: '3/3/6 row',
      poster: 'https://drive.google.com/uc?id=1WnYaIEVrloy-n7Fm0rFPAW-4jMJbjvJy',
      columnDefinitions:[300, 150, 150]  
    },
    {
        title: '3/3/6 row',
        poster: 'https://drive.google.com/uc?id=1nasFuhuuGsweGP-OdgmCiWH5OvdJ7v0-',
        columnDefinitions:[150, 150, 300]  
      },

  ]
}
