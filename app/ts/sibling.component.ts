import { Component } from '@angular/core';

@Component({
  selector: 'sibling-component',
  template: `
    <div class="propParent">
      <h1 class="binding">Sibling Components</h1>
      <child (myOutput)="child1Output = $event" [siblingInput]="child2Output"></child>
      <child [siblingInput]="child1Output" (myOutput)="child2Output = $event"></child>
    </div>
  `
})
export class SiblingComponent {}
