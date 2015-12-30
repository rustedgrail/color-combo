import {Component} from 'angular2/core';
import {Color} from './color';
import {ColorDetailComponent} from './color-detail.component';

@Component({
  selector: 'color-combo',
  template: `
    <h1>{{title}}</h1>

    <h2>COLORS!</h2>
    <ul class="colors">
      <li *ngFor="#color of colors"
        [class.selected]="color === selectedColor"
        (click)="onSelect(color)">
        <span class="badge">{{color.id}}</span> {{color.name}}
      </li>
    </ul>
    <my-color-detail [color]="selectedColor"></my-color-detail>
  `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .colors {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .colors li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .colors li.selected:hover {
      color: white;
    }
    .colors li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .colors .text {
      position: relative;
      top: -3px;
    }
    .colors .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `],
  directives: [ColorDetailComponent]
})

export class AppComponent {
  public title = 'Color Combo'
  public colors = COLORS;
  public selectedColor: Color;
  public color: Color = {
    id: 1,
    name: "Red",
    rgb: "#FF0000"
  }

  onSelect(color: Color) { this.selectedColor = color; }
}

var COLORS: Color[] = [
  { id: 10, name: 'blue', rgb: '#0000FF' },
  { id: 11, name: 'green', rgb: '#00FF00' },
  { id: 12, name: 'white', rgb: '#FFFFFF' }
]
