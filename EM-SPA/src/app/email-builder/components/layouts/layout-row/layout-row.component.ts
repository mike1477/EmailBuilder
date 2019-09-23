import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/shared/models/email/section';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: '[app-layout-row]',
  templateUrl: './layout-row.component.html',
  styleUrls: ['./layout-row.component.scss']
})
export class LayoutRowComponent implements OnInit {

  @Input() row: Section;
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  get backgroundImageUrl() {
    var url = this.row && this.row.backgroundImage && this.row.backgroundImage.url;
    if (typeof url !== "string") return "none";
    var val = this.domSanitizer.bypassSecurityTrustStyle(`url('${url}')`);
    return val;
  }
}
