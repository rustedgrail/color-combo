import {Component} from 'angular2/core';
import {Color} from './color';

@Component({
  selector: 'my-color-detail',
  inputs: ['color'],
  template: `
    <div *ngIf="color">
      <h2>{{color.name}} is chosen!</h2>
      <div><label>id: </label>{{color.id}}</div>
      <div>
        <label>name: </label>
        <div><input [(ngModel)]="color.name" placeholder="name"></div>
      </div>
      <div>
        <label>RGB: </label>
        <div><input [(ngModel)]="color.rgb" placeholder="rgb"></div>
      </div>
    </div>
  `
})

export class ColorDetailComponent {
  public color: Color;
}
