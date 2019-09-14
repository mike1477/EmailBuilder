import { Component, OnInit, EventEmitter, Output , SimpleChange, SimpleChanges, Input} from '@angular/core';
import { Padding } from 'src/app/email-builder/models/padding';

@Component({
  selector: 'app-common-number-selector',
  templateUrl: './common-number-selector.component.html',
  styleUrls: ['./common-number-selector.component.scss']
})
export class CommonNumberSelectorComponent implements OnInit {

 

  @Input() padding:Padding

  constructor() { }

  ngOnInit() {
  }

  
}
