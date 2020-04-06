import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent implements OnInit {

  @Input() label: string;

  @Input() disabled = false;

  @Input() big = false;

  @Input() rounded = false;

  @Output() clickFn = new EventEmitter<MouseEvent>();

  constructor() {
  }

  ngOnInit() {
  }

  clickHandler(event: MouseEvent) {
    if (!this.disabled) {
      this.clickFn.emit(event);
    }
  }
}
