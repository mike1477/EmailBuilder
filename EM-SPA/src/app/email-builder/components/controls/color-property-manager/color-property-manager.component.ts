import { Component, OnInit, Input } from '@angular/core';
import { PropertyManagerColor } from 'src/app/shared/models/property-manager-color';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-property-manager',
  templateUrl: './color-property-manager.component.html',
  styleUrls: ['./color-property-manager.component.scss']
})
export class ColorPropertyManagerComponent implements OnInit {

  @Input() propertyManager: PropertyManagerColor
  
  constructor(
    private selectionManagerService: SelectionManagerService,
    private router: Router) { }

  get color():string{
    return this.propertyManager.defaultValue;
  }
  set color(newValue: string){
    this.propertyManager.defaultValue = newValue;
  }

  editConditions(){
    this.selectionManagerService.targetPropertyManger = this.propertyManager;
    this.router.navigateByUrl("/condition-builder");
  }
  ngOnInit() {
  }

}
