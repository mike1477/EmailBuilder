import { Component, OnInit, } from '@angular/core';
import { DragulaService, Group } from 'ng2-dragula';
import { Row } from 'src/models/row';
import { RowOption } from 'src/app/interfaces/rowOption';
import { DividerElement } from 'src/models/element/dividerElement';
import { ImageElement } from 'src/models/element/imageElement';
import { TextElement } from 'src/models/element/textElement';
import { ButtonElement } from 'src/models/element/buttonElement';
import { Subscription } from 'rxjs';

@Component({
  selector: '[app-dashboard]',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private _subs = new Subscription();
  private _drakeRow:Group;
  private _drakeElement: Group;

  constructor(private dragulaService: DragulaService) {
    this._subs.add(this.dragulaService.drag()
      .subscribe(({ name, el, source }) => {
      })
    );
    this._subs.add(this.dragulaService.drop()
      .subscribe(({ name, el, source }) => {
      })
    );
    this._subs.add(this.dragulaService.cancel()
      .subscribe(({ name, el, source }) => {
      })
    );
    this._drakeRow = dragulaService.createGroup('rows', {
      copy: (el, source) => {
        return source.id === 'layout-row-options';
      },
      copyItem: (rowOption: any) => {
        var newRow = new Row(rowOption.columnDefinitions);
        return newRow;
      },
      accepts: (el, target, source, sibling) => {
        return target.id !== 'layout-row-options';
      },
      invalid:()=>{
        return false;
      },
      moves: function(el, container, target) {
        if(target.classList.contains("layout-element")) return false;
        while (target = target.parentElement) {
          if(target.classList.contains("layout-element")) return false;
          if (target == el) return true;
        }
        return true;     
      }
    });
    this._drakeElement = dragulaService.createGroup('elements', {
      copy: (el, source) => {
        return source.id === 'layout-element-options';
      },
      copyItem: (elementOption: any) => {
        var newElement = new elementOption.type();
        if(newElement instanceof TextElement){
          newElement.content = "Your text content here";
        }
        return newElement;
      },
      accepts: (el, target, source, sibling) => {
        return target.id !== 'layout-element-options';
      },
      invalid:(el, tag)=>{
        return false;
      },
      moves: function(el, container, target) {
        return true;     
       }
    });
   }

  ngOnInit() {
  }

  elementOptions = [
    {
      title: 'Text',
      poster: '../../../assets/angular.png',
      type:TextElement,
      icon:'format_size',
      html: '<p>Add Text Field Editor</p>'
    },
    {
      title: 'Button',
      poster: '../../../assets/angular.png',
      icon: "radio_button_checked",
      type:ButtonElement,
      html: '<p>Add Button</p>'
    },
    {
      title: 'Divider',
      poster: '../../../assets/angular.png',
      icon: "view_stream",
      type:DividerElement,
      html: '<p>Add Divider</p>'
    },
    {
      title: 'Image',
      poster: '../../../assets/angular.png',
      icon: "insert_photo",
      type:ImageElement,
      html: '<p>Add Image Container</p>'
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
