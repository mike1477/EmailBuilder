import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFormAutoSubmit]'
})
export class FormAutoSubmitDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (typeof this.el.nativeElement.submit === "function") this.el.nativeElement.submit();
  }

}
