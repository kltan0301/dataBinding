import { Component } from '@angular/core';

@Component({
    selector: 'interpolation',
    template:`
    <div class="propParent">
      <h1 class="binding">Interpolation</h1>
      <h3>{{ sampleVar }}</h3>
    </div>
    `
})
export class InterpolationComponent {
  sampleVar: string = "Interpolation at work!";
}
