import { Component, OnInit } from '@angular/core';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input  #inputElementRef
            [value]="title"
            (keyup.enter)="changeTitle($event.target.value)">
    <button (click)="changeTitle(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello, World';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
    console.log(newTitle);
    this.title = newTitle;
  }
}
