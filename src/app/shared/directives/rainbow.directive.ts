import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  rainbowColors = [
    'violet',
    'indigo',
    'blue',
    'green',
    'yellow',
    'orange',
    'red'
  ];

  @HostBinding('style.color') color: string = this.pickColor();
  
  constructor() { }

  pickColor(): string {
    const color = Math.round(Math.random() * this.rainbowColors.length);
    return this.rainbowColors[color];
  }

  @HostListener('click') onClick() {
    this.color = this.pickColor();
  }
  
}
