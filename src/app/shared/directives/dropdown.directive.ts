import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostBinding('class.active') activeClass: boolean = false;

  @HostListener('click') onClick() {
    this.activeClass = !this.activeClass;
  }

}
