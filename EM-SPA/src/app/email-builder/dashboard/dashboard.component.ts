import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DisplayComponent } from '../display/display.component';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
  }

  @ViewChild(DisplayComponent, {static: false}) child:DisplayComponent;


  elementOptions = [
    {
      title: 'Add Text Field',
      poster: '../../../assets/angular.png',
      rowData:{
        cells:[],
        border: "",
        backround: ""
      },
      icon: "title"
    },
    {
      title: 'Add Email Field',
      poster: '../../../assets/angular.png',
      icon: "local_post_office"
    },
    {
      title: 'Add Video Field',
      poster: '../../../assets/angular.png',
      icon: "videocam"
    },
    {
      title: 'Add Divider',
      poster: '../../../assets/angular.png',
      icon: "view_stream"
    },
    {
      title: 'Add Social',
      poster: '../../../assets/angular.png',
      icon: "public"
    },
  ];

  rowOptions = [
    {
      title: 'single row',
      poster: 'https://drive.google.com/uc?id=1bVgvI_BG9bl85wXdDsAesE_8LZcn3pyP',
      rowData:{
        cells:[],
        border: "",
        backround: ""
      },   
    },
    {
      title: '10 / 2 row',
      poster: 'https://drive.google.com/uc?id=1ccfJylQqoOGzAd7phgv0a5p9xvB4uLO7',
      rowData:{
        cells:[],
        border: "",
        backround: ""
      },   
    },
    {
      title: '3 / 9 row',
      poster: 'https://drive.google.com/uc?id=1VSPd9GlafcTNborSpPbLNTAE_7V0cJMV',
      rowData:{
        cells:[],
        border: "",
        backround: ""
      },   
    },
    {
      title: '6 / 6 row',
      poster: 'https://drive.google.com/uc?id=1r3YJbRDydPzVtF_cZigaj4xBCvDZO6dQ',
      rowData:{
        cells:[],
        border: "",
        backround: ""
      },   
    },
    {
      title: '9 / 3 row',
      poster: 'https://drive.google.com/uc?id=1GY7ayA5HqFYck6srV9eoITNs02zkHqx4',
      rowData:{
        cells:[],
        border: "",
        backround: ""
      },   
    },
    {
      title: '4/4/4 row',
      poster: 'https://drive.google.com/uc?id=1InpMYPVfYb5UUOjj7KNfh0CtxHGcRkHZ',
      rowData:{
        cells:[],
        border: "",
        backround: ""
      },   
    },
    {
      title: '3/3/6 row',
      poster: 'https://drive.google.com/uc?id=1WnYaIEVrloy-n7Fm0rFPAW-4jMJbjvJy',
      rowData:{
        cells:[],
        border: "",
        backround: ""
      },
    },
    {
        title: '3/3/6 row',
        poster: 'https://drive.google.com/uc?id=1nasFuhuuGsweGP-OdgmCiWH5OvdJ7v0-',
        rowData:{
          cells:[],
          border: "",
          backround: ""
        },     
    },

  ]

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
  }
}
