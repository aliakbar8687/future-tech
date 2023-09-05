import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Button } from 'src/app/models/Sub-Header';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
  @Input('title') title: string;
  @Input('buttons') buttons: Button[];
  @Input('canSearch') canSearch: boolean = true;

  @Output('onSearch') onSearch = new EventEmitter<string>();

  searchInput: string;

  onSearchClick(): void {
    this.onSearch.emit(this.searchInput);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('child ngOnChanges');
  }

  ngOnInit(): void {
    console.log('child ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('child ngOnDestroy');
    
  }
}
