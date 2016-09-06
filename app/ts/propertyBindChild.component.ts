import { Component } from '@angular/core';

@Component({
  selector: 'prop-child',
  template:`
    <div class="propChild">
      <p>Parent Input: <span class="inputVal">{{ parentValue }}</span></p>
    </div>
  `,
  inputs: ['parentValue']
})
export class PropChild{
  parentValue: string;
}
