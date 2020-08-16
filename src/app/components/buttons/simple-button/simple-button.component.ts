import { Component, EventEmitter, Input, OnInit, Output, HostBinding } from '@angular/core';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent implements OnInit {

  @Input() label: string;

  @Input() disabled = false;

  @Input() big = false;

  @Input() 
  set theme (value: Theme) {
    this._theme = value;
    this.themeClass = value;
  }
  _theme: Theme = Theme.LIGHT;


  @Input() rounded = false;

  @Output() clickFn = new EventEmitter<MouseEvent>();

  @HostBinding('class') themeClass = Theme.LIGHT;

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
