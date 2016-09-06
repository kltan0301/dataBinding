import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>Data Binding</h1>
      <interpolation></interpolation>
      <property-bind></property-bind>
      <event-bind></event-bind>
      <sibling-component></sibling-component>
    `
})
export class AppComponent { }
