import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Row } from 'src/app/email-builder/models/row';
import { ElementBase } from 'src/app/email-builder/models/elements/elementBase';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';

@Directive({
  selector: '[appSelector]'
})
export class SelectorDirective {

  @Input() appSelector: any;
  
  private clickHandler(){
    if(this.appSelector instanceof Row){
      this.selectionService.selectRow(this.appSelector);
    }
    else if(this.appSelector instanceof ElementBase){
      this.selectionService.selectElement(this.appSelector);
    }
    console.log(this.appSelector);
  }

  constructor(el: ElementRef, private selectionService:SelectionManagerService) {
    el.nativeElement.addEventListener("click", this.clickHandler.bind(this), true);
  }

}
