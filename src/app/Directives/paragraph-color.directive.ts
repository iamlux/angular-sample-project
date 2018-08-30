import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParagraphColor]'
})
export class ParagraphColorDirective {

  constructor(private renderer: Renderer, private el: ElementRef) {
  }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'orange');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }
}
