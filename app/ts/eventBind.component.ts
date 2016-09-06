import { Component } from '@angular/core';

@Component({
  selector: 'event-bind',
  template: `
    <div class="propParent">
      <h1 class="binding">Event Binding</h1>
      <p>Child input: {{ outputVal }}</p>
      <event-child (childChanged)="outputVal = $event"></event-child>
    </div>
  `
})
export class EventBind {}
