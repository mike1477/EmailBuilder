import { Component, OnInit, OnDestroy, } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Section } from 'src/app/shared/models/email/section';
import { Router } from '@angular/router';
import { AppConfigurationService } from 'src/app/shared/services/app-configuration.service';
import { SelectionManagerService } from 'src/app/shared/services/selection-manager.service';
import { Subscription } from 'rxjs';

const rowDragGroup = "rows"
const elementDragGroup = "elements"

@Component({
  selector: '[app-dashboard]',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subs: Subscription = new Subscription();

  constructor(
    private dragulaService: DragulaService,
    private router: Router,
    private appConfig: AppConfigurationService,
    private selectionService: SelectionManagerService) { }

  private rowSelectedEvent() {
    this._selectedManagerPanel = "sidepanel-tabs-properties";
    this._bodyPropertiesVisible = false;
    this._rowPropertiesSelected = true;
  }

  private elementSelectedEvent() {
    this._selectedManagerPanel = "sidepanel-tabs-properties";
    this._bodyPropertiesVisible = false;
    this._elementPropertiesSelected = true;
  }

  ngOnInit() {
    this.subs.add(this.selectionService.rowSelectedEvent.subscribe(this.rowSelectedEvent.bind(this)));
    this.subs.add(this.selectionService.elementSelectedEvent.subscribe(this.elementSelectedEvent.bind(this)));

    this.dragulaService.createGroup(rowDragGroup, {
      copy: (el, source) => {
        return source.id === 'layout-row-options';
      },
      copyItem: (rowOption: any) => {
        var newRow = Section.create(rowOption.columnDefinitions);
        return newRow;
      },
      accepts: (el, target, source, sibling) => {
        return target.id !== 'layout-row-options';
      },
      invalid: (el, hanldle) => {
        return !hanldle.classList.contains("enable-move")
      },
      moves: function (el, container, target) {
        if (target.classList.contains("layout-element")) return false;
        while (target = target.parentElement) {
          if (target.classList.contains("layout-element")) return false;
          if (target == el) return true;
        }
        return true;
      }
    });
    this.dragulaService.createGroup(elementDragGroup, {
      copy: (el, source) => {
        return source.id === 'layout-element-options';
      },
      copyItem: (elementOption: any) => {
        var newElement = elementOption.type.create();
        return newElement;
      },
      accepts: (el, target, source, sibling) => {
        return target.id !== 'layout-element-options';
      },
      invalid: (el, tag) => {
        return false;
      },
      moves: function (el, container, target) {
        return true;
      }
    });
  }

  preview() {
    this.router.navigateByUrl("/preview");
  }

  save() {
    this.selectionService.save();
  }

  ngOnDestroy(): void {
    this.dragulaService.destroy(rowDragGroup);
    this.dragulaService.destroy(elementDragGroup);
    this.subs.unsubscribe();
  }

  elementOptions = this.appConfig.ELEMENT_OPTIONS;

  rowOptions = this.appConfig.ROW_OPTIONS;

  private _selectedManagerPanel: string = "sidepanel-tabs-elements";
  get selectedManagerPanel(): string {
    return this._selectedManagerPanel;
  }
  set selectedManagerPanel(newValue: string) {
    this._selectedManagerPanel = newValue;
  }

  private _bodyPropertiesVisible: boolean = false;
  get bodyPropertiesVisible(): boolean {
    return this._bodyPropertiesVisible;
  }
  set bodyPropertiesVisible(newValue: boolean) {
    this._bodyPropertiesVisible = newValue;
  }

  private _rowPropertiesSelected: boolean = false;
  get rowPropertiesSelected(): boolean {
    return this._rowPropertiesSelected;
  }
  set rowPropertiesSelected(newValue: boolean) {
    this._rowPropertiesSelected = newValue;
  }

  private _elementPropertiesSelected: boolean = false;
  get elementPropertiesSelected(): boolean {
    return this._elementPropertiesSelected;
  }
  set elementPropertiesSelected(newValue: boolean) {
    this._elementPropertiesSelected = newValue;
  }

  get currentElementName(): string {
    var currentElement = this.selectionService.selectedElement;
    var name = currentElement && currentElement.elementType;
    switch (name) {
      case "button":
        return "Button";
      case "text":
        return "Text";
      case "divider":
        return "Divider";
      case "image":
        return "Image";
      default:
        return "Element";
    }
  }
}
