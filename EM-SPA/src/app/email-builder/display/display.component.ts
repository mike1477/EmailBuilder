import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TextCardComponent } from '../text-card/text-card.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  AddTextFeild() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(TextCardComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
}

}
