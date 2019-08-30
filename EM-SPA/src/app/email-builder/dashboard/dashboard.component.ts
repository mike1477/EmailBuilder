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


  allowedDropLists:Array<string> = ['layout-row-list'];

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

  rowOptions = [
    {
      title: 'single row',
      poster: 'https://drive.google.com/uc?id=1bVgvI_BG9bl85wXdDsAesE_8LZcn3pyP',
      layoutType:"layout-row"  
    },
    {
      title: '10 / 2 row',
      poster: 'https://drive.google.com/uc?id=1ccfJylQqoOGzAd7phgv0a5p9xvB4uLO7',
      layoutType:"layout-row"  
    },
    {
      title: '3 / 9 row',
      poster: 'https://drive.google.com/uc?id=1VSPd9GlafcTNborSpPbLNTAE_7V0cJMV',
      layoutType:"layout-row" 
    },
    {
      title: '6 / 6 row',
      poster: 'https://drive.google.com/uc?id=1r3YJbRDydPzVtF_cZigaj4xBCvDZO6dQ',
      layoutType:"layout-row"   
    },
    {
      title: '9 / 3 row',
      poster: 'https://drive.google.com/uc?id=1GY7ayA5HqFYck6srV9eoITNs02zkHqx4',
      layoutType:"layout-row" 
    },
    {
      title: '4/4/4 row',
      poster: 'https://drive.google.com/uc?id=1InpMYPVfYb5UUOjj7KNfh0CtxHGcRkHZ',
      layoutType:"layout-row"  
    },
    {
      title: '3/3/6 row',
      poster: 'https://drive.google.com/uc?id=1WnYaIEVrloy-n7Fm0rFPAW-4jMJbjvJy',
      layoutType:"layout-row"
    },
    {
        title: '3/3/6 row',
        poster: 'https://drive.google.com/uc?id=1nasFuhuuGsweGP-OdgmCiWH5OvdJ7v0-',
        layoutType:"layout-row"   
    },

  ]
}
