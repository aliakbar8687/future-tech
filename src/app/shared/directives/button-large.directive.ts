import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonLarge]'
})
export class ButtonLargeDirective {

  constructor(
    private element:ElementRef<HTMLButtonElement>,
    private renderer:Renderer2
  ) { }
  @HostListener('mouseover') 
  onMouseOver(){
    this.renderer.setStyle(this.element.nativeElement,'padding-right','2rem')
    this.renderer.setStyle(this.element.nativeElement,'padding-left','2rem')
    this.renderer.setStyle(this.element.nativeElement,'transition','1s')
  }
   @HostListener('mouseleave') 
   onMouseLeave(){
     this.renderer.setStyle(this.element.nativeElement,'padding','0.5rem')
     this.renderer.setStyle(this.element.nativeElement,'transition','3s')
   }

}
