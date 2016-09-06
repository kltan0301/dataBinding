import { Component } from '@angular/core';

@Component ({
  selector: 'property-bind',
  template: `
    <div class="propParent">
      <h1 class="binding">Property Binding</h1>
      <label>Parent Input:</label>
      <input type="text" #parentInput (click)="0">
      <prop-child [parentValue]="parentInput.value"></prop-child>
    </div>
  `
})
export class PropertyBindComponent {
}
