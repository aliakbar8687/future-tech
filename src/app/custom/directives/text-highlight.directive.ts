import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective implements OnInit, OnChanges {
  @Input() appTextHighlight: string = '';
  @Input() defaultColor: string = '';
  @Output() onClick  = new EventEmitter()

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    (this.elementRef.nativeElement as HTMLElement).style.color = this.appTextHighlight || this.defaultColor;
    (this.elementRef.nativeElement as HTMLElement).style.fontSize = '30px';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appTextHighlight'].currentValue) {
      (this.elementRef.nativeElement as HTMLElement).style.color = changes['appTextHighlight'].currentValue;
      this.onClick.emit()
    }
  }

}
