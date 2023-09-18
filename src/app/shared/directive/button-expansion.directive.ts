import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonExpansion]'
})
export class ButtonExpansionDirective {

  constructor(
    private element: ElementRef<HTMLAnchorElement>,
    private renderer: Renderer2
  ) {    
  }
  
  @HostListener('mouseenter') 
  onMouseOver(){
    this.renderer.setStyle(this.element.nativeElement, 'padding', '0.25rem 1rem 0.25rem 1rem')
    this.renderer.setStyle(this.element.nativeElement, 'transition', '1s')
    this.renderer.setStyle(this.element.nativeElement, 'background', 'blue')
  }
  @HostListener('mouseout') 
  onMouseout(){
    this.renderer.setStyle(this.element.nativeElement, 'padding', '0.25rem 0.5rem 0.25rem 0.5rem')
    this.renderer.setStyle(this.element.nativeElement, 'background', '#146c43')
  }
}
