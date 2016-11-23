import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Output('change') private emitter = new EventEmitter();

  onInput(value: string) {
    this.emitter.emit(value);
  }

}
