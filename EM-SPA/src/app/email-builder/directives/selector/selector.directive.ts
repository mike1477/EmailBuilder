import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Section } from 'src/app/shared/models/email/section';
import { ElementBase } from 'src/app/shared/models/email/elements/elementBase';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';
import { IStructureType } from 'src/app/shared/models/email/i-structure-type';
import { AppStructureTypes } from 'src/app/shared/models/email/app-stucture-types';

@Directive({
  selector: '[appSelector]'
})
export class SelectorDirective {

  @Input() appSelector: IStructureType;

  clickHandler() {
    if (this.appSelector.appStuctureType === AppStructureTypes.section) {
      var section = this.appSelector as Section;
      this.selectionService.selectRow(section);
    }
    else if (this.appSelector.appStuctureType === AppStructureTypes.element) {
      var element = this.appSelector as ElementBase;
      this.selectionService.selectElement(element);
    }
  }

  constructor(el: ElementRef, private selectionService: SelectionManagerService) {
    el.nativeElement.addEventListener("click", this.clickHandler.bind(this), true);
  }

}
