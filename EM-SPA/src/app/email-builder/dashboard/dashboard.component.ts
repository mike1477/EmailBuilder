import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(DisplayComponent, {static: false}) child:DisplayComponent;


  options = [
    {
      title: 'Add Text Field',
      poster: '../../../assets/angular.png',
      rowData:{
        cells:[],
        border: "",
        backround: ""
      }
    },
    {
      title: 'Add Email Field',
      poster: '../../../assets/angular.png'
    },
    {
      title: 'Add Video Field',
      poster: '../../../assets/angular.png'
    },
    {
      title: 'Add Divider',
      poster: '../../../assets/angular.png'
    },
    {
      title: 'Add Social',
      poster: '../../../assets/angular.png'
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
  }
}
